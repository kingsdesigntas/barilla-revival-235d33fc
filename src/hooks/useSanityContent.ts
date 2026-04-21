import { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
	getSanityPerspective,
	hasSanityReadToken,
	isSanityConfigured,
	isVisualEditingEnabled,
	sanityClient,
} from "@/lib/sanity";

/**
 * Generic hook to fetch content from Sanity CMS.
 * Falls back to defaultContent when Sanity is not configured or query fails.
 */
export function useSanityContent<T>(
	queryKey: string,
	groqQuery: string,
	defaultContent: T,
	params?: Record<string, string>,
) {
	const queryClient = useQueryClient();
	const configured = isSanityConfigured();
	const visualEditingEnabled = isVisualEditingEnabled();
	const perspective = getSanityPerspective();
	const canReadDrafts = hasSanityReadToken();
	const shouldUsePreview = visualEditingEnabled && canReadDrafts;

	const queryKeyParts = ["sanity", queryKey, params, perspective];

	const { data, isLoading, error } = useQuery({
		queryKey: queryKeyParts,
		queryFn: async () => {
			if (!configured) return null;
			return sanityClient.fetch<T>(groqQuery, params, { perspective });
		},
		staleTime: shouldUsePreview ? 0 : 1000 * 60 * 5,
		gcTime: shouldUsePreview ? 1000 * 60 : 1000 * 60 * 30,
		refetchOnWindowFocus: shouldUsePreview,
		retry: 1,
		enabled: configured,
	});

	useEffect(() => {
		if (!configured || !shouldUsePreview) return;

		const subscription = sanityClient.listen(groqQuery, params);
		if (!subscription) return;

		const sub = subscription.subscribe(() => {
			queryClient.invalidateQueries({ queryKey: queryKeyParts });
		});

		return () => sub.unsubscribe();
	}, [configured, shouldUsePreview, groqQuery, params, queryClient, queryKeyParts]);

	return {
		content: data || defaultContent,
		isLoading: configured ? isLoading : false,
		isCms: Boolean(data),
		error,
		isPreview: shouldUsePreview,
		previewNeedsToken: visualEditingEnabled && !canReadDrafts,
	};
}
