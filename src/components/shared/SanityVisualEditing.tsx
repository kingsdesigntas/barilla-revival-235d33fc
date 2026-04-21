import { useEffect } from "react";
import { enableVisualEditing } from "@sanity/visual-editing";

export default function SanityVisualEditing() {
	useEffect(() => {
		const disable = enableVisualEditing({
			history: {
				subscribe: (navigate) => {
					const handler = () => {
						navigate({
							type: "pop",
							url: window.location.href,
						});
					};

					window.addEventListener("popstate", handler);
					return () => window.removeEventListener("popstate", handler);
				},
				update: (update) => {
					switch (update.type) {
						case "push":
							window.history.pushState(null, "", update.url);
							window.dispatchEvent(new PopStateEvent("popstate"));
							break;
						case "replace":
							window.history.replaceState(null, "", update.url);
							window.dispatchEvent(new PopStateEvent("popstate"));
							break;
						case "pop":
							window.history.back();
							break;
					}
				},
			},
		});

		return () => disable();
	}, []);

	return null;
}
