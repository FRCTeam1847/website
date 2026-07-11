import { queryOptions } from "@tanstack/react-query";
import { fetchTeamHistory } from "../server/teamHistory";

export const teamHistoryQuery = queryOptions({
  queryKey: ["team-history"],
  queryFn: () => fetchTeamHistory(),
});