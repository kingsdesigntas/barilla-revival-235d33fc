import { createClient, type SanityClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Configure these values from your Sanity project
// You can find them at https://www.sanity.io/manage
const SANITY_PROJECT_ID = import.meta.env.VITE_SANITY_PROJECT_ID || "";
const SANITY_DATASET = import.meta.env.VITE_SANITY_DATASET || "production";
const SANITY_API_VERSION = "2024-01-01";

export const isSanityConfigured = () => Boolean(SANITY_PROJECT_ID);

let _client: SanityClient | null = null;

export function getSanityClient(): SanityClient | null {
  if (!isSanityConfigured()) return null;
  if (!_client) {
    _client = createClient({
      projectId: SANITY_PROJECT_ID,
      dataset: SANITY_DATASET,
      apiVersion: SANITY_API_VERSION,
      useCdn: true,
    });
  }
  return _client;
}

// For backward compat — only call when configured
export const sanityClient = {
  fetch: async <T,>(query: string, params?: Record<string, string>): Promise<T | null> => {
    const client = getSanityClient();
    if (!client) return null;
    return client.fetch<T>(query, params || {});
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
