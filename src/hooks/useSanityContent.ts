import { useQuery } from "@tanstack/react-query";
import { sanityClient, isSanityConfigured } from "@/lib/sanity";

/**
 * Generic hook to fetch content from Sanity CMS.
 * Falls back to defaultContent when Sanity is not configured or query fails.
 */
export function useSanityContent<T>(
  queryKey: string,
  groqQuery: string,
  defaultContent: T,
  params?: Record<string, string>
) {
  const configured = isSanityConfigured();

  const { data, isLoading, error } = useQuery({
    queryKey: ["sanity", queryKey, params],
    queryFn: async () => {
      if (!configured) return null;
      return sanityClient.fetch<T>(groqQuery, params);
    },
    staleTime: 1000 * 60 * 5,
    retry: 1,
    enabled: configured,
  });

  return {
    content: data || defaultContent,
    isLoading: configured ? isLoading : false,
    isCms: Boolean(data),
    error,
  };
}
