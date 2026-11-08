import { createServerFn } from "@tanstack/react-start";
import { asc, eq, sql } from "drizzle-orm";
import { db } from "../../db";
import { sponsors } from "../../db/schema";

export const getSponsors = createServerFn().handler(async () =>
  db
    .select()
    .from(sponsors)
    .where(eq(sponsors.season, sql`(select max(season) from sponsors)`))
    .orderBy(
      sql`case lower(${sponsors.sponsorshipLevel})
				when 'gold' then 1
				when 'silver' then 2
				when 'bronze' then 3
				when 'supporter' then 4
				else 5
			end`,
      asc(sponsors.name),
    ),
);
