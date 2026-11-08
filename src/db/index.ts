import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const databaseUrl = process.env.DATABASE_URL_MAIN;

if (!databaseUrl) {
	throw new Error("DATABASE_URL_MAIN must be configured on the server");
}

const client = postgres(databaseUrl, { max: 1 });

export const db = drizzle(client, { schema });
