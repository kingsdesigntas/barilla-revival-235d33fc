import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Accommodation from "./pages/Accommodation";
import NotFound from "./pages/NotFound";
import CabinAccommodation from "./pages/accommodation/CabinAccommodation";
import CaravanAccommodation from "./pages/accommodation/CaravanAccommodation";
import CampingGrounds from "./pages/accommodation/CampingGrounds";
import AirportAccommodation from "./pages/accommodation/AirportAccommodation";
import AtBarilla from "./pages/things-to-do/AtBarilla";
import TouristAttractions from "./pages/things-to-do/TouristAttractions";
import MiniGolf from "./pages/things-to-do/MiniGolf";
import DayTrips from "./pages/things-to-do/DayTrips";
import Contact from "./pages/Contact";
import CustomerFeedback from "./pages/CustomerFeedback";
import BookingPolicy from "./pages/BookingPolicy";
import CabinAccommodationHobart from "./pages/landing/CabinAccommodationHobart";
import CaravanParksHobart from "./pages/landing/CaravanParksHobart";
import FamilyFriendlyHolidayPark from "./pages/landing/FamilyFriendlyHolidayPark";
import { isSanityConfigured, isVisualEditingEnabled } from "@/lib/sanity";
import SanityVisualEditing from "@/components/shared/SanityVisualEditing";
import Seo from "@/components/shared/Seo";
import ScrollToTop from "@/components/shared/ScrollToTop";

const queryClient = new QueryClient();
const visualEditingEnabled = isSanityConfigured() && isVisualEditingEnabled();

const App = () => (
	<QueryClientProvider client={queryClient}>
		<TooltipProvider>
			<Toaster />
			<Sonner />
			<BrowserRouter>
				<ScrollToTop />
				<Seo />
				<Routes>
					<Route path="/" element={<Index />} />

					{/* Accommodation Routes */}
					<Route path="/accommodation" element={<Accommodation />} />
					<Route path="/accommodation/cabins" element={<CabinAccommodation />} />
					<Route path="/accommodation/caravans" element={<CaravanAccommodation />} />
					<Route path="/accommodation/camping" element={<CampingGrounds />} />
					<Route path="/accommodation/airport" element={<AirportAccommodation />} />

					{/* Things to Do Routes */}
					<Route path="/things-to-do/at-barilla" element={<AtBarilla />} />
					<Route path="/things-to-do/attractions" element={<TouristAttractions />} />
					<Route path="/things-to-do/mini-golf" element={<MiniGolf />} />
					<Route path="/things-to-do/day-trips" element={<DayTrips />} />

					{/* Contact */}
					<Route path="/contact" element={<Contact />} />
					<Route path="/customer-feedback" element={<CustomerFeedback />} />
					<Route path="/booking-policy" element={<BookingPolicy />} />

					{/* Landing pages (not in main nav) */}
					<Route path="/cabin-accommodation-hobart" element={<CabinAccommodationHobart />} />
					<Route path="/caravan-parks-hobart" element={<CaravanParksHobart />} />
					<Route path="/family-friendly-holiday-park-accommodation-in-hobart" element={<FamilyFriendlyHolidayPark />} />

					{/* Legacy URL redirects (preserve SEO equity from barilla.com.au) */}
					<Route path="/accommodation/cabin-accommodation" element={<Navigate to="/accommodation/cabins" replace />} />
					<Route path="/accommodation/caravan-park-hobart" element={<Navigate to="/accommodation/caravans" replace />} />
					<Route path="/accommodation/camping-grounds" element={<Navigate to="/accommodation/camping" replace />} />
					<Route path="/accommodation/accommodation-hobart-airport" element={<Navigate to="/accommodation/airport" replace />} />
					<Route path="/things-to-do/tourist-attractions" element={<Navigate to="/things-to-do/attractions" replace />} />
					<Route path="/mini-golf" element={<Navigate to="/things-to-do/mini-golf" replace />} />
					<Route path="/tours" element={<Navigate to="/things-to-do/day-trips" replace />} />
					<Route path="/caravan-park-richmond" element={<Navigate to="/caravan-parks-hobart" replace />} />
					<Route path="/family-friendly-holiday-park-accomodation-in-hobart" element={<Navigate to="/family-friendly-holiday-park-accommodation-in-hobart" replace />} />
					<Route path="/credits" element={<Navigate to="/" replace />} />

					{/* Catch-all */}
					<Route path="*" element={<NotFound />} />
				</Routes>
				{visualEditingEnabled && <SanityVisualEditing />}
			</BrowserRouter>
		</TooltipProvider>
	</QueryClientProvider>
);

export default App;
