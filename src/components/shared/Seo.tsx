import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://www.barilla.com.au";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

type Meta = { title: string; description: string };

const DEFAULT_META: Meta = {
	title: "Barilla Holiday Park Tasmania | Caravan Park & Cabins Hobart",
	description:
		"Family-friendly caravan park in Cambridge, Tasmania. Cabins, caravan sites & camping near Hobart Airport. Mini golf, BBQ areas & close to Richmond attractions.",
};

const ROUTE_META: Record<string, Meta> = {
	"/": DEFAULT_META,
	"/accommodation/cabins": {
		title: "Cabin Accommodation Hobart | Barilla Holiday Park",
		description:
			"Self-contained cabins near Hobart Airport with kitchens, ensuites and family layouts. Comfortable, affordable cabin accommodation in Cambridge, Tasmania.",
	},
	"/accommodation/caravans": {
		title: "Powered Caravan Sites near Hobart | Barilla Holiday Park",
		description:
			"Spacious powered and drive-through caravan sites with modern amenities, five minutes from Hobart Airport and fifteen from Hobart city.",
	},
	"/accommodation/camping": {
		title: "Camping Grounds near Hobart | Barilla Holiday Park",
		description:
			"Sheltered, well-maintained camping grounds for tents and camper trailers, with camp kitchen, BBQs and amenities close to Hobart Airport.",
	},
	"/accommodation/airport": {
		title: "Hobart Airport Accommodation | Barilla Holiday Park",
		description:
			"Cabins, caravan sites and camping just five minutes from Hobart Airport. Ideal for early flights, late arrivals and campervan hire drop-offs.",
	},
	"/things-to-do/at-barilla": {
		title: "Things to Do at Barilla Holiday Park | Family Activities",
		description:
			"Mini golf, playgrounds, BBQ areas and open green spaces — family-friendly activities and relaxation right here at Barilla Holiday Park.",
	},
	"/things-to-do/attractions": {
		title: "Hobart & Southern Tasmania Attractions | Barilla Holiday Park",
		description:
			"Markets, museums, beaches, wildlife and heritage towns — discover the best attractions around Hobart from your base at Barilla Holiday Park.",
	},
	"/things-to-do/mini-golf": {
		title: "Mini Golf in Cambridge, Tasmania | Barilla Holiday Park",
		description:
			"Play a round on our on-site mini golf course — fun for the whole family, open to guests and visitors at Barilla Holiday Park.",
	},
	"/things-to-do/day-trips": {
		title: "Day Trips from Hobart | Barilla Holiday Park Itineraries",
		description:
			"Easy-to-follow day trip itineraries from Cambridge — Port Arthur, the Tasman Peninsula, wineries, wildlife parks and Hobart's cultural highlights.",
	},
	"/contact": {
		title: "Contact Barilla Holiday Park | Cambridge, Tasmania",
		description:
			"Get in touch with our friendly team for bookings, local advice and travel tips. Freecall 1800 465 453 or visit us at 75 Richmond Road, Cambridge.",
	},
	"/customer-feedback": {
		title: "Customer Feedback & Guest Reviews | Barilla Holiday Park",
		description:
			"Read genuine guest reviews of Barilla Holiday Park in Cambridge, Tasmania — clean facilities, friendly staff and a handy location near Hobart Airport.",
	"/cabin-accommodation-hobart": {
		title: "Cabin Accommodation in Hobart | Barilla Holiday Park",
		description:
			"Affordable, self-contained cabin accommodation minutes from Hobart Airport and the city. Perfect for families, couples and business travellers.",
	},
	"/caravan-parks-hobart": {
		title: "Caravan Parks Hobart | Barilla Holiday Park Cambridge",
		description:
			"One of Hobart's most convenient caravan parks — powered sites, modern amenities and a peaceful setting close to the airport and city.",
	},
	"/family-friendly-holiday-park-accommodation-in-hobart": {
		title: "Family Friendly Holiday Park Accommodation in Hobart",
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
