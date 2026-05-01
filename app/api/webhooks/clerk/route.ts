import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { WebhookEvent } from '@clerk/nextjs/server'
import { db } from '@/db' // Adjust this import based on your actual db/index.ts location
import { users } from '@/db/schema' // Adjust this import based on your db/schema.ts location

export async function POST(req: Request) {
    // 1. Get the Webhook Secret from environment variables
    const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET

    if (!WEBHOOK_SECRET) {
        throw new Error('Please add CLERK_WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local')
    }

    // 2. Get the headers to extract the Svix signatures
    const headerPayload = await headers();
    const svix_id = headerPayload.get("svix-id");
    const svix_timestamp = headerPayload.get("svix-timestamp");
    const svix_signature = headerPayload.get("svix-signature");

    // If there are no headers, error out
    if (!svix_id || !svix_timestamp || !svix_signature) {
        return new Response('Error occured -- no svix headers', {
            status: 400
        })
    }

    // 3. Get the raw body payload
    const payload = await req.json()
    const body = JSON.stringify(payload);

    // 4. Create a new Svix instance with your secret
    const wh = new Webhook(WEBHOOK_SECRET);

    let evt: WebhookEvent

    // 5. Verify the payload using Svix
    try {
        evt = wh.verify(body, {
            "svix-id": svix_id,
            "svix-timestamp": svix_timestamp,
            "svix-signature": svix_signature,
        }) as WebhookEvent
    } catch (err) {
        console.error('Error verifying webhook:', err);
        return new Response('Error occured', {
            status: 400
        })
    }

    // 6. Handle the 'user.created' event
    const eventType = evt.type;

    if (eventType === 'user.created') {
        const { id, email_addresses, first_name, last_name } = evt.data;

        const email = email_addresses[0]?.email_address;

        if (!email) {
            return new Response('Error: No email address found', { status: 400 });
        }

        try {
            // 7. Insert the user into the Supabase database using Drizzle
            await db.insert(users).values({
                id: id,
                email: email,
                firstName: first_name || '',
                lastName: last_name || '',
                role: 'visitor', // Default role as defined in your schema
            });

            console.log(`User ${id} successfully synced to database.`);
        } catch (error) {
            console.error('Database insertion error:', error);
            return new Response('Error syncing user to database', { status: 500 });
        }
    }

    // 8. Always return a 200 to acknowledge receipt to Clerk
    return new Response('Webhook received', { status: 200 })
}