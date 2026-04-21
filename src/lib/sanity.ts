import { createClient, type SanityClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Configure these values from your Sanity project
// You can find them at https://www.sanity.io/manage
const SANITY_PROJECT_ID = import.meta.env.VITE_SANITY_PROJECT_ID || "";
const SANITY_DATASET = import.meta.env.VITE_SANITY_DATASET || "production";
const SANITY_STUDIO_URL = import.meta.env.VITE_SANITY_STUDIO_URL || "";
const SANITY_READ_TOKEN = import.meta.env.VITE_SANITY_READ_TOKEN || "";
const SANITY_API_VERSION = "2024-01-01";

export const isSanityConfigured = () => Boolean(SANITY_PROJECT_ID);

export const isVisualEditingEnabled = () => {
	const previewFromEnv = import.meta.env.VITE_SANITY_VISUAL_EDITING === "true";

	if (typeof window === "undefined") {
		return previewFromEnv && Boolean(SANITY_STUDIO_URL);
	}

	const params = new URLSearchParams(window.location.search);
	const previewFromStudioParams = params.has("sanity-preview") || params.has("sanity-preview-perspective");

	return (previewFromEnv || previewFromStudioParams) && Boolean(SANITY_STUDIO_URL);
};

export const hasSanityReadToken = () => Boolean(SANITY_READ_TOKEN);

export const getSanityPerspective = (): "published" | "drafts" => {
	if (!isVisualEditingEnabled()) return "published";

	if (typeof window === "undefined") {
		return "drafts";
	}

	const params = new URLSearchParams(window.location.search);
	const perspective = params.get("sanity-preview-perspective");

	return perspective === "published" ? "published" : "drafts";
};

const _clients = new Map<string, SanityClient>();

export function getSanityClient(): SanityClient | null {
	if (!isSanityConfigured()) return null;

	const visualEditingEnabled = isVisualEditingEnabled();
	const perspective = getSanityPerspective();
	const hasToken = Boolean(SANITY_READ_TOKEN);
	const cacheKey = `${visualEditingEnabled}-${perspective}-${hasToken}`;

	if (!_clients.has(cacheKey)) {
		_clients.set(
			cacheKey,
			createClient({
				projectId: SANITY_PROJECT_ID,
				dataset: SANITY_DATASET,
				apiVersion: SANITY_API_VERSION,
				useCdn: !visualEditingEnabled,
				perspective,
				token: visualEditingEnabled ? SANITY_READ_TOKEN || undefined : undefined,
				stega: {
					enabled: visualEditingEnabled,
					studioUrl: SANITY_STUDIO_URL,
				},
			}),
		);
	}

	return _clients.get(cacheKey) || null;
}

// For backward compat — only call when configured
export const sanityClient = {
	fetch: async <T>(
		query: string,
		params?: Record<string, string>,
		options?: { perspective?: "published" | "drafts" },
	): Promise<T | null> => {
		const client = getSanityClient();
		if (!client) return null;
		return client.fetch<T>(query, params || {}, options ? { perspective: options.perspective } : undefined);
	},
	listen: (query: string, params?: Record<string, string>) => {
		const client = getSanityClient();
		if (!client) return null;

		return client.listen(query, params || {}, {
			visibility: "query",
			includeResult: false,
		});
	},
};

let _builder: ReturnType<typeof imageUrlBuilder> | null = null;

export function urlFor(source: any) {
	if (!_builder) {
		const client = getSanityClient();
		if (!client) return { url: () => "" };
		_builder = imageUrlBuilder(client);
	}
	return _builder.image(source);
}
