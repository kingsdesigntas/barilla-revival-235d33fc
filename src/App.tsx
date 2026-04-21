import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
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
import { isSanityConfigured, isVisualEditingEnabled } from "@/lib/sanity";
import SanityVisualEditing from "@/components/shared/SanityVisualEditing";

const queryClient = new QueryClient();
const visualEditingEnabled = isSanityConfigured() && isVisualEditingEnabled();

const App = () => (
	<QueryClientProvider client={queryClient}>
		<TooltipProvider>
			<Toaster />
			<Sonner />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Index />} />

					{/* Accommodation Routes */}
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

					{/* Catch-all */}
					<Route path="*" element={<NotFound />} />
				</Routes>
				{visualEditingEnabled && <SanityVisualEditing />}
			</BrowserRouter>
		</TooltipProvider>
	</QueryClientProvider>
);

export default App;
