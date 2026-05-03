import { pgTable, text, timestamp, integer, serial, uuid } from "drizzle-orm/pg-core";

// Users table (Synced with Clerk)
export const users = pgTable("users", {
    id: text("id").primaryKey(), // We will use the Clerk User ID here
    email: text("email").notNull().unique(),
    firstName: text("first_name"),
    lastName: text("last_name"),
    role: text("role").default("visitor"), // 'visitor', 'exhibitor', 'sponsor'
    createdAt: timestamp("created_at").defaultNow(),
});

// Registrations / Transactions table
export const registrations = pgTable("registrations", {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: text("user_id").references(() => users.id).notNull(),
    purchaseType: text("purchase_type").notNull(), // e.g., 'ticket_vip', 'sponsorship_gold'
    amountPaid: integer("amount_paid").notNull(), // Stored in Kobo
    status: text("status").default("pending"), // 'pending', 'successful', 'failed'
    paystackReference: text("paystack_reference").unique(),
    ticketNumber: text("ticket_number").unique(), // Unique ticket identifier for QR codes
    createdAt: timestamp("created_at").defaultNow(),
});