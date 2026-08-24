import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";

// Load environment variables for the CLI
dotenv.config({ path: ".env.local" });

const databaseUrl =
    process.env.DATABASE_URL ??
    process.env.POSTGRES_URL ??
    "postgresql://postgres.tbxvpinxxwcvcswklkdk:xEmZKbAQMvLMyxKo@aws-1-eu-central-1.pooler.supabase.com:6543/postgres?sslmode=require";

export default defineConfig({
    schema: "./db/schema.ts",
    out: "./drizzle",
    dialect: "postgresql",
    dbCredentials: {
        url: databaseUrl,
    },
    schemaFilter: ["public"],
    verbose: true,
    strict: true,
});