import { createServerFn } from "@tanstack/react-start";
import type BaTeamHistory from "../../types/BaTeamHistory";

const API_URL = "https://www.thebluealliance.com/api/v3/team/frc1847/history";

export const fetchTeamHistory = createServerFn().handler(
  async (): Promise<BaTeamHistory> => {
    const response = await fetch(API_URL, {
      headers: {
        accept: "application/json",
        "X-TBA-Auth-Key": String(process.env.BA_AUTH_KEY),
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch team history: ${response.statusText}`);
    }

    return response.json();
  }
);