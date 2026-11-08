import { createFileRoute } from "@tanstack/react-router";
import { handleMediaAssetRequest } from "../-asset-handler";

export const Route = createFileRoute("/api/media/asset/$filename")({
	server: {
		handlers: {
			GET: ({ request }) => handleMediaAssetRequest(request, true),
		},
	},
});
