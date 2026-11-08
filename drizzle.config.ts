import dotenv from "dotenv";
import { defineConfig } from "drizzle-kit";

dotenv.config({ path: ".env.local" });

const databaseUrl = process.env.DATABASE_URL_MAIN;

if (!databaseUrl) {
  throw new Error("DATABASE_URL_MAIN must be set in .env.local");
}

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/db/schema.ts",
  out: "./src/db",
  tablesFilter: ["sponsors"],
  dbCredentials: { url: databaseUrl },
});
