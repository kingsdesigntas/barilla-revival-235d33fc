import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://www.barilla.com.au";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

type Meta = { title: string; description: string };

const DEFAULT_META: Meta = {
	title: "Barilla Holiday Park | Hobart Caravan Park & Accommodation",
	description:
		"Experience Barilla Holiday Park. Powered sites, self-contained cabins, and campsites just 15 minutes from Hobart's CBD. Book online now!",
};

const ROUTE_META: Record<string, Meta> = {
	"/": DEFAULT_META,
	"/accommodation": {
		title: "Accommodation Hobart | Barilla Holiday Park",
		description:
			"Barilla Holiday Park is a family holiday park with lots to see and do — a family friendly caravan park near Hobart with accommodation for everyone.",
	},
	"/accommodation/cabins": {
		title: "Cabin Accommodation Hobart | Barilla Holiday Park",
		description:
			"Book your Hobart accommodation at Barilla Holiday Park. Self-contained cabins for up to 6 guests, 15 minutes from Hobart CBD. Secure your cabin today!",
	},
	"/accommodation/caravans": {
		title: "Local Caravan Parks Hobart | Barilla Holiday Park",
		description:
			"Plan your next family-friendly caravan getaway with Barilla Holiday Park. Powered, drive-through sites just 15 minutes from Hobart's CBD. Book online today!",
	},
	"/accommodation/camping": {
		title: "Family-Friendly Camping Near Hobart | Barilla Holiday Park",
		description:
			"Enjoy family-friendly camping near Hobart at Barilla Holiday Park. Powered sites, tents and caravan options. Book your campsite today!",
	},
	"/accommodation/airport": {
		title: "Accommodation Hobart Airport | Barilla Holiday Park",
		description:
			"Whether arriving or departing Hobart, stay at Barilla Holiday Park. Comfortable cabins and camping grounds just minutes from Hobart Airport.",
	},
	"/things-to-do/at-barilla": {
		title: "Things to do at Barilla | Barilla Holiday Park Hobart",
		description:
			"Putt and Play mini golf, wood-fired pizza, hot pool, playground — so many things to do when you visit Barilla Holiday Park in Hobart, Tasmania.",
	},
	"/things-to-do/attractions": {
		title: "Tourist Attractions Near Hobart | Barilla Holiday Park",
		description:
			"Explore the best things to do in Hobart from Barilla Holiday Park. Perfect for families and visitors planning a Tasmanian getaway.",
	},
	"/things-to-do/mini-golf": {
		title: "Family-Friendly Putt & Play | Barilla Holiday Park Hobart",
		description:
			"Enjoy family-friendly mini golf at Barilla Holiday Park Hobart. A fun, affordable Putt & Play course just minutes from Hobart's CBD.",
	},
	"/things-to-do/day-trips": {
		title: "Day Trips from Hobart | Barilla Holiday Park Tasmania",
		description:
			"Easy day trip itineraries from Barilla Holiday Park — Port Arthur, the Tasman Peninsula, wineries, wildlife parks and Hobart's cultural highlights.",
	},
	"/contact": {
		title: "Contact Barilla Holiday Park Hobart, Tasmania",
		description:
			"To find out more about the accommodation and attractions at Barilla Holiday Park in Hobart, Tasmania, contact us via phone, email or in person.",
	},
	"/customer-feedback": {
		title: "Customer Feedback | Barilla Holiday Park",
		description:
			"Read genuine guest reviews of Barilla Holiday Park in Hobart, Tasmania — clean facilities, friendly staff and a handy location near Hobart Airport.",
	},
	"/cabin-accommodation-hobart": {
		title: "Cabin Accommodation Hobart | Barilla Holiday Park",
		description:
			"Barilla Holiday Park's comfortable cabins are a great place to stay when you want quality cabin accommodation. We are located close to Hobart Airport.",
	},
	"/caravan-parks-hobart": {
		title: "Caravan Parks Hobart | Barilla Holiday Park",
		description:
			"Book Hobart accommodation at Barilla Holiday Park. Self contained cabins, caravan sites and campsites near Hobart. Easy online booking available.",
	},
	"/family-friendly-holiday-park-accommodation-in-hobart": {
		title: "Family-Friendly Holiday Park Accommodation in Hobart",
		description:
			"Family-friendly holiday park accommodation near Hobart with cabins, caravan sites, camping, mini golf and plenty of space for kids to play.",
	},
};

const Seo = () => {
	const { pathname } = useLocation();
	const path = pathname !== "/" && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
	const meta = ROUTE_META[path] ?? DEFAULT_META;
	const url = `${SITE_URL}${path === "/" ? "/" : path}`;

	return (
		<Helmet>
			<title>{meta.title}</title>
			<meta name="title" content={meta.title} />
			<meta name="description" content={meta.description} />
			<link rel="canonical" href={url} />

			<meta property="og:type" content="website" />
			<meta property="og:site_name" content="Barilla Holiday Park" />
			<meta property="og:url" content={url} />
			<meta property="og:title" content={meta.title} />
			<meta property="og:description" content={meta.description} />
			<meta property="og:image" content={OG_IMAGE} />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="630" />

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:url" content={url} />
			<meta name="twitter:title" content={meta.title} />
			<meta name="twitter:description" content={meta.description} />
			<meta name="twitter:image" content={OG_IMAGE} />
		</Helmet>
	);
};

export default Seo;
