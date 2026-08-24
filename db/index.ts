import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

const connectionString =
  process.env.DATABASE_URL ??
  process.env.POSTGRES_URL ??
  'postgresql://postgres.tbxvpinxxwcvcswklkdk:xEmZKbAQMvLMyxKo@aws-1-eu-central-1.pooler.supabase.com:6543/postgres?sslmode=require';

// Disable prefetch as it is not supported for "Transaction" pool mode
const client = postgres(connectionString, { prepare: false });
export const db = drizzle(client, { schema });