import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const sponsors = pgTable("sponsors", {
  id: uuid().defaultRandom().primaryKey().notNull(),
  name: varchar({ length: 200 }).notNull(),
  sponsorshipLevel: varchar("sponsorship_level", { length: 50 }).notNull(),
  season: varchar({ length: 20 }).notNull(),
  imageUrl: varchar("image_url", { length: 2048 }),
});
