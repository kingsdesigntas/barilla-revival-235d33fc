// Default/fallback content for all pages when Sanity is not configured
import heroImage from "@/assets/hero-cabin.jpg";
import cabinImage from "@/assets/cabin-accommodation.jpg";
import caravanImage from "@/assets/caravan-site.jpg";
import campingImage from "@/assets/camping-grounds.jpg";
import miniGolfImage from "@/assets/mini-golf.jpg";

export const defaultSiteSettings = {
  siteName: "BARILLA",
  tagline: "Holiday Park",
  phone: "1800 465 453",
  freeCallPhone: "1800 465 453",
  email: "stay@barilla.com.au",
  address: "75 Richmond Road, Cambridge 7170, Tasmania, Australia",
  navigationItems: [
    { label: "Home", href: "/" },
    {
      label: "Accommodation",
      href: "#",
      children: [
        { label: "Cabin Accommodation", href: "/accommodation/cabins" },
        { label: "Caravan Accommodation", href: "/accommodation/caravans" },
        { label: "Camping Grounds", href: "/accommodation/camping" },
        { label: "Hobart Airport Stay", href: "/accommodation/airport" },
      ],
    },
    {
      label: "Things to Do",
      href: "#",
      children: [
        { label: "At Barilla", href: "/things-to-do/at-barilla" },
        { label: "Tourist Attractions", href: "/things-to-do/attractions" },
        { label: "Day Trips", href: "/things-to-do/day-trips" },
        { label: "Mini Golf", href: "/things-to-do/mini-golf" },
      ],
    },
    { label: "Contact", href: "/contact" },
  ],
  footerColumns: [],
  socialLinks: [{ platform: "facebook", url: "https://facebook.com" }],
  seo: {
    title: "Barilla Holiday Park | Caravan Park Hobart Tasmania",
    description: "Family-friendly caravan park near Hobart, Tasmania. Cabins, caravan sites, and camping grounds.",
    keywords: "caravan park, hobart, tasmania, cabins, camping",
  },
};

export const defaultHomePage = {
  hero: {
    heading: "Barilla Holiday Park Tasmania",
    subheading: "Your caravan park makes your perfect holiday base",
    backgroundImage: heroImage,
    ctaButtons: [
      { label: "Cabin Accommodation", href: "/accommodation/cabins", variant: "primary" },
      { label: "Caravan Accommodation", href: "/accommodation/caravans", variant: "primary" },
      { label: "Camping Ground", href: "/accommodation/camping", variant: "success" },
    ],
  },
  introduction: {
    heading: "A Stone's Throw from Hobart",
    subheading: "Our caravan park is close to everything that makes a perfect holiday",
    paragraphs: [
      "Barilla Holiday Park, your family-friendly caravan park in Hobart, Tasmania, nestles in the charming locale of Cambridge. Just a 15-minute drive from Hobart's vibrant centre, we're perfectly positioned for an unforgettable Tasmanian holiday. We're also just a stone's throw from the Hobart Airport, providing stress-free transit for both local and international visitors.",
      "We pride ourselves on offering an array of accommodation choices to cater for every visitor. From cosy cabins to spacious caravan parks and relaxing camping grounds, we have your stay covered, whether you're passing through or looking to explore the heart of Tasmania from a comfortable base.",
      "There's never a dull moment at Barilla Holiday Park. We've designed our park to provide fun for all ages – with mini-golf and plenty of activities. Plus, our proximity to Hobart and neighbouring Richmond means you're never far from your next Tasmanian adventure!",
      "At Barilla, our dedicated and warm staff are always on hand to assist in planning your Tasmanian adventures, and we invite you to make Barilla Holiday Park your home away from home on your next Tasmanian holiday.",
    ],
  },
  accommodationSection: {
    heading: "Our Accommodation",
    description: "Experience the best of family-friendly accommodation at our Hobart caravan park, Barilla. We've ensured the serenity of the natural landscape meets the conveniences of modern amenities.",
    cards: [
      {
        title: "Cabin Accommodation",
        description: "Our cabins feature open plan design and are fully self-contained. We have accommodation options for up to 8 people.",
        image: cabinImage,
        link: "/accommodation/cabins",
        buttonText: "View All Cabins",
      },
      {
        title: "Caravan Accommodation",
        description: "All of our caravan sites are spacious with sheltered and friendly surroundings. A perfect site for your Caravan or Motorhome!",
        image: caravanImage,
        link: "/accommodation/caravans",
        buttonText: "View All Sites",
      },
      {
        title: "Camping Grounds",
        description: "Barilla Holiday Park offers sheltered and friendly camping grounds with lots of things to do for all the family.",
        image: campingImage,
        link: "/accommodation/camping",
        buttonText: "View All Sites",
      },
    ],
  },
  infoSection: {
    heading: "More About Barilla Holiday Park",
    description: "We are conveniently located near tourist attractions, Hobart city and the Hobart Airport.",
    contactCard: {
      heading: "Contact Us",
      address: "75 Richmond Road, Cambridge 7170",
      phone: "Freecall: 1800 465 453",
      mapLink: "https://maps.google.com",
    },
    ratingsCard: {
      heading: "Ratings",
      description: "Barilla Holiday Park has a 4 star rating on Tripadvisor and a certificate of excellence.",
      tripadvisorLink: "https://tripadvisor.com",
      rating: 4.6,
      reviewCount: 160,
    },
    socialCard: {
      heading: "Like Us on Facebook",
      description: "Like us on Facebook to get access to exclusive specials and promotions.",
      facebookLink: "https://facebook.com",
    },
  },
  seo: {
    title: "Barilla Holiday Park | Caravan Park Hobart Tasmania",
    description: "Family-friendly caravan park near Hobart, Tasmania.",
    keywords: "",
  },
};

export const defaultCabinPage = {
  title: "Cabin Accommodation",
  subtitle: "Comfortable, self-contained cabins for your Tasmanian getaway",
  heroImage: heroImage,
  sectionHeading: "Our Cabins",
  sectionDescription: "Our cabins feature open plan design and are fully self-contained. We have accommodation options for up to 8 people.",
  items: [
    {
      name: "Family Cabin",
      sleeps: "Up to 6 guests",
      features: ["2 Bedrooms", "Full Kitchen", "Ensuite Bathroom", "Air Conditioning", "TV & WiFi"],
      description: "Perfect for families, our 2-bedroom cabins offer comfort and space with modern amenities.",
      image: cabinImage,
      buttonText: "Book Now",
      buttonLink: "/contact",
    },
    {
      name: "Studio Cabin",
      sleeps: "Up to 4 guests",
      features: ["Open Plan", "Kitchenette", "Ensuite Bathroom", "Air Conditioning", "TV & WiFi"],
      description: "Cosy and self-contained, ideal for couples or small families looking for a comfortable stay.",
      image: cabinImage,
      buttonText: "Book Now",
      buttonLink: "/contact",
    },
    {
      name: "Deluxe Cabin",
      sleeps: "Up to 8 guests",
      features: ["3 Bedrooms", "Full Kitchen", "2 Bathrooms", "Air Conditioning", "Outdoor Deck"],
      description: "Our largest option with premium features, perfect for extended families or groups.",
      image: cabinImage,
      buttonText: "Book Now",
      buttonLink: "/contact",
    },
  ],
  amenitiesHeading: "Cabin Features & Amenities",
  amenities: [
    { icon: "Bed", label: "Comfortable Beds" },
    { icon: "Wifi", label: "Free WiFi" },
    { icon: "Tv", label: "Flat Screen TV" },
    { icon: "UtensilsCrossed", label: "Full Kitchen" },
    { icon: "Car", label: "Free Parking" },
    { icon: "Sun", label: "Air Conditioning" },
  ],
  seo: { title: "Cabin Accommodation | Barilla Holiday Park", description: "Comfortable, self-contained cabins for your Tasmanian getaway.", keywords: "" },
};

export const defaultCaravanPage = {
  title: "Caravan Accommodation",
  subtitle: "Spacious sites with power and modern amenities for your caravan or motorhome",
  heroImage: heroImage,
  sectionHeading: "Our Caravan Sites",
  sectionDescription: "All of our caravan sites are spacious with sheltered and friendly surroundings. A perfect site for your Caravan or Motorhome!",
  items: [
    { name: "Powered Site", description: "Spacious powered sites with easy access to amenities. Suitable for caravans and motorhomes of all sizes.", image: caravanImage, buttonText: "Book Now", buttonLink: "/contact" },
    { name: "Premium Powered Site", description: "Our premium sites offer extra space, better views, and are located in the quietest areas of the park.", image: caravanImage, buttonText: "Book Now", buttonLink: "/contact" },
    { name: "Drive-Through Site", description: "Convenient drive-through sites perfect for larger rigs. No reversing required!", image: caravanImage, buttonText: "Book Now", buttonLink: "/contact" },
  ],
  amenitiesHeading: "Site Amenities",
  amenities: [
    { icon: "Zap", label: "Power Hookup" },
    { icon: "ShowerHead", label: "Modern Amenities" },
    { icon: "Wifi", label: "Free WiFi" },
    { icon: "Car", label: "Easy Access" },
    { icon: "Trees", label: "Shaded Sites" },
    { icon: "Sun", label: "BBQ Areas" },
  ],
  seo: { title: "Caravan Accommodation | Barilla Holiday Park", description: "Spacious powered sites for caravans and motorhomes.", keywords: "" },
};

export const defaultCampingPage = {
  title: "Camping Grounds",
  subtitle: "Sheltered, family-friendly camping in beautiful Tasmania",
  heroImage: heroImage,
  sectionHeading: "Camp at Barilla",
  sectionDescription: "Barilla Holiday Park offers sheltered and friendly camping grounds with lots of things to do for all the family.",
  items: [
    {
      name: "Camping Site",
      description: "Experience the great Tasmanian outdoors at our well-maintained camping grounds. Set up your tent among the eucalyptus trees and enjoy the peaceful surroundings. Our camping sites offer easy access to modern amenity blocks, BBQ areas, and all the park facilities.",
      image: campingImage,
      features: ["Spacious flat camping sites", "Sheltered and shaded areas", "Clean modern amenity blocks", "BBQ and campfire areas", "Free WiFi access"],
      buttonText: "Book Your Campsite",
      buttonLink: "/contact",
    },
  ],
  amenitiesHeading: "Camping Facilities",
  amenities: [
    { icon: "Tent", label: "Tent Sites" },
    { icon: "ShowerHead", label: "Hot Showers" },
    { icon: "Wifi", label: "Free WiFi" },
    { icon: "Flame", label: "BBQ Facilities" },
    { icon: "Trees", label: "Shaded Areas" },
    { icon: "Sun", label: "Picnic Tables" },
  ],
  seo: { title: "Camping Grounds | Barilla Holiday Park", description: "Sheltered, family-friendly camping grounds in Tasmania.", keywords: "" },
};

export const defaultAirportPage = {
  title: "Hobart Airport Accommodation",
  subtitle: "Convenient overnight stays just minutes from Hobart Airport",
  heroImage: heroImage,
  sectionHeading: "Airport Stays",
  sectionDescription: "Just a stone's throw from Hobart Airport, we're the perfect base for early flights or late arrivals.",
  items: [
    {
      name: "Cabin Stay",
      description: "Comfortable self-contained cabin accommodation, perfect for a good night's rest before or after your flight.",
      image: cabinImage,
      buttonText: "Book Cabin",
      buttonLink: "/contact",
    },
    {
      name: "Caravan/Motorhome Site",
      description: "Powered site for your caravan or motorhome. Easy access and secure overnight parking near the airport.",
      image: "",
      buttonText: "Book Site",
      buttonLink: "/contact",
    },
  ],
  benefits: [
    { icon: "Plane", heading: "5 Minutes to Airport", description: "We're located just a short drive from Hobart Airport terminal." },
    { icon: "Clock", heading: "Flexible Check-in", description: "We understand travel schedules - ask about our flexible options." },
    { icon: "Car", heading: "Free Parking", description: "Leave your car with us while you travel, or park overnight before your flight." },
  ],
  locationInfo: {
    address: "75 Richmond Road, Cambridge, Tasmania 7170",
    note: "Only 5 minutes from Hobart Airport",
  },
  amenities: [],
  amenitiesHeading: "",
  seo: { title: "Hobart Airport Accommodation | Barilla Holiday Park", description: "Convenient overnight stays near Hobart Airport.", keywords: "" },
};

export const defaultAtBarillaPage = {
  title: "Things to Do at Barilla",
  subtitle: "Fun activities and facilities right here at the park",
  heroImage: heroImage,
  sectionHeading: "Activities at the Park",
  sectionDescription: "There's never a dull moment at Barilla Holiday Park. We've designed our park to provide fun for all ages.",
  activities: [
    { icon: "Gamepad2", title: "Putt & Play Mini Golf", description: "Our 18-hole mini golf course is fun for the whole family. Challenge your friends and family!" },
    { icon: "Bike", title: "Bike Paths", description: "Explore the area on two wheels with easy access to local bike paths and trails." },
    { icon: "Trees", title: "Nature Walks", description: "Enjoy peaceful walks through our gardens and the surrounding natural bushland." },
    { icon: "Users", title: "BBQ Areas", description: "Gather the family for a classic Aussie BBQ at our communal cooking facilities." },
    { icon: "Dog", title: "Pet Friendly", description: "We welcome well-behaved pets in designated areas of the park." },
    { icon: "Sun", title: "Playground", description: "The kids will love our playground - a safe space for them to run and play." },
  ],
  featureSection: {
    heading: "Putt & Play Mini Golf",
    description: "Our 18-hole Putt and Play Mini Golf course is one of the highlights of Barilla Holiday Park. Set in a beautifully landscaped garden, it's challenging and fun for players of all ages and skill levels.",
    secondaryDescription: "Open to both park guests and day visitors, it's the perfect way to spend an afternoon with family and friends.",
    image: miniGolfImage,
    buttonText: "Learn More About Mini Golf",
    buttonLink: "/things-to-do/mini-golf",
  },
  seo: { title: "Things to Do at Barilla | Barilla Holiday Park", description: "Activities and facilities at Barilla Holiday Park.", keywords: "" },
};

export const defaultTouristAttractionsPage = {
  title: "Tourist Attractions Near Hobart",
  subtitle: "Discover the best things to see and do during your stay at Barilla Holiday Park",
  heroImage: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Mount_Wellington_Tasmania.jpg",
  sectionHeading: "Top Attractions Around Hobart",
  introParagraphs: [
    "Barilla Holiday Park is ideally located for exploring the best tourist attractions near Hobart, Tasmania. From vibrant markets and heritage towns to world-class art museums, beaches, wildlife experiences and scenic drives, there's something to suit every taste and itinerary during your Hobart holiday. Our friendly team at Barilla Holiday Park can help you plan your visits to these top activities and sightseeing destinations.",
    "Our friendly and knowledgeable staff are here to help you plan your Hobart caravan holiday and can provide expert advice on the best things to do in Hobart and across Tasmania.",
  ],
  categories: [
    "Markets & Shopping",
    "Heritage & History",
    "Art & Museums",
    "Wildlife & Nature",
    "Food & Wine",
    "Beaches & Coast",
    "Scenic & Outdoors",
    "Entertainment",
  ],
  attractions: [
    { name: "Salamanca Market", image: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Salamanca_Market_Hobart.jpg", description: "Large outdoor market with 300+ stalls featuring local produce, crafts, and food. Open Saturdays.", address: "Salamanca Place, Hobart TAS 7000", phone: "+61 3 6238 2711", website: "https://salamancamarket.com.au", categories: ["Markets & Shopping", "Food & Wine"] },
    { name: "Richmond Village", image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Richmond_Bridge_Tasmania.jpg", description: "Historic village with Australia's oldest bridge, boutique shops, and heritage buildings.", address: "Richmond TAS 7025", phone: "+61 3 6260 2100", website: "https://coalriver.com.au", categories: ["Heritage & History", "Markets & Shopping"] },
    { name: "MONA (Museum of Old and New Art)", image: "https://upload.wikimedia.org/wikipedia/commons/6/6c/MONA_Hobart.jpg", description: "World-renowned underground museum blending ancient and contemporary art.", address: "655 Main Rd, Berriedale TAS 7011", phone: "+61 3 6277 9900", website: "https://mona.net.au", categories: ["Art & Museums"] },
    { name: "ZooDoo Zoo", image: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Kangaroo_Tasmania.jpg", description: "Interactive wildlife park with feeding experiences and native animals.", address: "620 Middle Tea Tree Rd, Richmond TAS 7025", phone: "+61 3 6260 2444", website: "https://zoodoo.com.au", categories: ["Wildlife & Nature"] },
    { name: "Coal River Valley Wineries", image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Vineyard_Tasmania.jpg", description: "Cool-climate wine region close to Cambridge with cellar doors and scenic drives.", address: "Coal River Valley, TAS", phone: "+61 3 6260 2100", website: "https://coalriver.com.au", categories: ["Food & Wine", "Scenic & Outdoors"] },
    { name: "Royal Tasmanian Botanical Gardens", image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Royal_Tasmanian_Botanical_Gardens.jpg", description: "Expansive gardens featuring Japanese garden, heritage plants, and walking paths.", address: "Lower Domain Rd, Hobart TAS 7000", phone: "+61 3 6165 0451", website: "https://rtbg.tas.gov.au", categories: ["Wildlife & Nature", "Scenic & Outdoors"] },
    { name: "Seven Mile Beach", image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Seven_Mile_Beach_Tasmania.jpg", description: "Long sandy beach ideal for walking, fishing, and easy vehicle access.", address: "Seven Mile Beach TAS 7170", phone: "", website: "https://parks.tas.gov.au", categories: ["Beaches & Coast"] },
    { name: "Barilla Bay Oyster Farm", image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Oyster_farm.jpg", description: "Oyster farm offering tastings and tours near the airport.", address: "1388 Tasman Hwy, Cambridge TAS 7170", phone: "+61 3 6248 5458", website: "https://barillabay.com.au", categories: ["Food & Wine"] },
    { name: "Mount Wellington (kunanyi)", image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Mount_Wellington_Tasmania.jpg", description: "Drive-to summit with panoramic views over Hobart and surrounding wilderness.", address: "Pinnacle Rd, Wellington Park TAS", phone: "+61 3 6238 2711", website: "https://wellingtonpark.org.au", categories: ["Scenic & Outdoors", "Wildlife & Nature"] },
    { name: "Tasmanian Museum and Art Gallery", image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/TMAG_Hobart.jpg", description: "Free-entry museum covering Tasmania's history, culture, and natural sciences.", address: "Dunn Pl, Hobart TAS 7000", phone: "+61 3 6165 7000", website: "https://tmag.tas.gov.au", categories: ["Art & Museums", "Heritage & History"] },
    { name: "Bellerive Bluff & Beach", image: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Bellerive_Beach.jpg", description: "Coastal walk with views of Hobart skyline and easy parking.", address: "Bellerive TAS 7018", phone: "", website: "https://clarence.tas.gov.au", categories: ["Beaches & Coast", "Scenic & Outdoors"] },
    { name: "Port Arthur Historic Site", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Port_Arthur_Tasmania.jpg", description: "UNESCO-listed convict site with extensive ruins and guided tours.", address: "Arthur Hwy, Port Arthur TAS 7182", phone: "+61 3 6251 2323", website: "https://portarthur.org.au", categories: ["Heritage & History"] },
    { name: "Tasman Peninsula Scenic Drive", image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Tasman_Peninsula_Cliffs.jpg", description: "Coastal drive featuring cliffs, blowholes, and lookouts.", address: "Tasman Peninsula TAS", phone: "", website: "https://discovertasmania.com.au", categories: ["Scenic & Outdoors", "Beaches & Coast"] },
    { name: "Hastings Caves & Thermal Springs", image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Newdegate_Cave.jpg", description: "Cave system with thermal pool; largest dolomite cave open to tourists in Australia.", address: "Hastings TAS 7109", phone: "+61 3 6297 3201", website: "https://parks.tas.gov.au", categories: ["Wildlife & Nature", "Scenic & Outdoors"] },
    { name: "Bruny Island (Day Trip)", image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Bruny_Island_Neck.jpg", description: "Island escape with wildlife, beaches, and local produce.", address: "Bruny Island TAS", phone: "+61 3 6293 1465", website: "https://brunyisland.org.au", categories: ["Wildlife & Nature", "Beaches & Coast", "Food & Wine"] },
    { name: "Glenorchy Art & Sculpture Park (GASP)", image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/GASP_Tasmania.jpg", description: "Waterfront boardwalk with large-scale sculptures and views.", address: "470 Brooker Hwy, Montrose TAS 7010", phone: "+61 3 6216 6800", website: "https://gcc.tas.gov.au", categories: ["Art & Museums", "Scenic & Outdoors"] },
    { name: "Wrest Point Casino", image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Wrest_Point_Hobart.jpg", description: "Entertainment complex with restaurants, shows, and gaming.", address: "410 Sandy Bay Rd, Sandy Bay TAS 7005", phone: "+61 3 6221 1700", website: "https://wrestpoint.com.au", categories: ["Entertainment", "Food & Wine"] },
    { name: "Hobart Waterfront & Constitution Dock", image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Hobart_Waterfront.jpg", description: "Harbour precinct with restaurants, boats, and walking areas.", address: "Hobart TAS 7000", phone: "", website: "https://hobartcity.com.au", categories: ["Scenic & Outdoors", "Food & Wine"] },
    { name: "Tasmania Golf Club", image: "https://upload.wikimedia.org/wikipedia/commons/4/45/Golf_course_Tasmania.jpg", description: "Coastal golf course with scenic ocean views near Cambridge.", address: "1420 Tasman Hwy, Cambridge TAS 7170", phone: "+61 3 6248 5098", website: "https://tasmaniangolfclub.com.au", categories: ["Entertainment", "Scenic & Outdoors"] },
    { name: "Coal River Farm", image: "https://upload.wikimedia.org/wikipedia/commons/1/12/Cheese_and_chocolate.jpg", description: "Farm shop with cheese, chocolate, and local produce tastings.", address: "634 Richmond Rd, Cambridge TAS 7170", phone: "+61 3 6248 8914", website: "https://coalriverfarm.com.au", categories: ["Food & Wine"] },
  ],
  seo: { title: "Tourist Attractions Near Hobart | Barilla Holiday Park", description: "Explore the best tourist attractions near Hobart, Tasmania from Barilla Holiday Park.", keywords: "hobart attractions, tasmania, tourism, salamanca, mona, port arthur" },
};

export const defaultDayTripsPage = {
  title: "Day Trips from Barilla Holiday Park",
  subtitle: "Custom-built itineraries to help you explore Hobart, Port Arthur and Tasmania's south",
  heroImage: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Tasman_Peninsula_Cliffs.jpg",
  sectionHeading: "Curated Day Trips for Our Guests",
  introParagraphs: [
    "At Barilla Holiday Park, we've put together a collection of custom day trips designed to help our guests get the most out of their stay. From the convict heritage of Port Arthur and the dramatic coastline of the Tasman Peninsula, to wineries, wildlife parks and cultural icons of Hobart, each itinerary is built around our central location near Cambridge — making it easy to explore and return comfortably each evening.",
    "Pick the day trip that suits your pace and interests, then tap the map link to launch turn-by-turn directions with all the suggested stops pre-loaded. Our friendly staff can also help fine-tune any itinerary on arrival.",
  ],
  trips: [
    { title: "Bruny Island Explorer", image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Bruny_Island_Neck.jpg", description: "Full-day coastal and food-focused island loop.", bestFor: "Full-day travellers, food, scenery, wildlife", stops: ["Barilla Holiday Park → Kettering Ferry Terminal — 35 min drive, staging point for ferry", "Bruny Island Ferry Crossing — vehicle ferry (20 min)", "The Neck Lookout — panoramic isthmus views", "Adventure Bay — beach, wildlife, café stop", "Cape Bruny Lighthouse — southern cliffs, dramatic coastline", "Get Shucked / Bruny Cheese Co. (optional) — local produce stops", "Return via same route"], mapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Barilla+Holiday+Park&destination=Bruny+Island&waypoints=Kettering+Ferry,The+Neck,Adventure+Bay,Cape+Bruny+Lighthouse" },
    { title: "Port Arthur & Tasman Peninsula Loop", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Port_Arthur_Tasmania.jpg", description: "History combined with Tasmania's most dramatic coastal scenery.", bestFor: "History, photography", stops: ["Barilla Holiday Park → Eaglehawk Neck — coastal gateway", "Tasman Arch — natural rock formation", "Devil's Kitchen — dramatic sea-carved cliffs", "Blowhole — wave-powered rock formation", "Port Arthur Historic Site — main attraction (2–4 hrs)", "Optional: Remarkable Cave detour", "Return via Arthur Highway"], mapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Barilla+Holiday+Park&destination=Port+Arthur+Historic+Site&waypoints=Eaglehawk+Neck,Tasman+Arch,Devils+Kitchen" },
    { title: "Richmond + Wineries Day", image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Richmond_Bridge_Tasmania.jpg", description: "Short, low-effort gourmet and heritage loop.", bestFor: "Couples, relaxed pace", stops: ["Coal River Farm — chocolate, cheese tastings", "Puddleduck Vineyard — relaxed wine tasting", "Richmond Village — heritage walk, bridge, shops", "Optional: Pooley Wines / Frogmore Creek", "Return via Richmond Road"], mapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Barilla+Holiday+Park&destination=Richmond+TAS&waypoints=Coal+River+Farm,Puddleduck+Vineyard" },
    { title: "Hobart City + Mount Wellington", image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Mount_Wellington_Tasmania.jpg", description: "Core Hobart highlights with elevated viewpoint.", bestFor: "First-time visitors", stops: ["Salamanca Place — galleries, cafés, market (Sat)", "Hobart Waterfront — harbour walk, food", "Battery Point (optional) — historic streets", "Drive to Mount Wellington summit — multiple lookouts", "The Pinnacle — panoramic city view", "Return via same route"], mapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Barilla+Holiday+Park&destination=Mount+Wellington&waypoints=Salamanca+Place,Hobart+Waterfront" },
    { title: "MONA + Northern River Drive", image: "https://upload.wikimedia.org/wikipedia/commons/6/6c/MONA_Hobart.jpg", description: "Art-focused day with minimal driving.", bestFor: "Culture and design", stops: ["Glenorchy Art & Sculpture Park (GASP) — short walk", "MONA Museum — 2–3 hr visit", "Moorilla Winery (on-site) — tasting/lunch", "Optional: Derwent River foreshore stops", "Return via Brooker Highway"], mapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Barilla+Holiday+Park&destination=MONA&waypoints=Glenorchy+Art+Park" },
    { title: "Huon Valley + Tahune Airwalk", image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Tasman_Peninsula_Cliffs.jpg", description: "Forest landscapes and elevated walk experience.", bestFor: "Nature, moderate activity", stops: ["Huonville — river town, supplies stop", "Geeveston — heritage timber town", "Tahune Airwalk — canopy walk + swinging bridges", "Optional: Franklin / Wooden Boat Centre", "Return via Huon Highway"], mapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Barilla+Holiday+Park&destination=Tahune+Airwalk&waypoints=Huonville,Geeveston" },
    { title: "Mount Field National Park", image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Newdegate_Cave.jpg", description: "Accessible waterfalls and forest walks.", bestFor: "Families, low-intensity nature", stops: ["New Norfolk — café or antique stop", "Mount Field Visitor Centre — entry point", "Russell Falls — short easy walk", "Horseshoe Falls / Tall Trees Walk — optional extensions", "Optional: Lake Dobson (weather permitting)", "Return via same route"], mapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Barilla+Holiday+Park&destination=Mount+Field+National+Park&waypoints=New+Norfolk" },
    { title: "Beaches & Coastal Relaxation", image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Seven_Mile_Beach_Tasmania.jpg", description: "Minimal driving, maximum relaxation.", bestFor: "Low-effort days", stops: ["Seven Mile Beach — long flat beach walk", "Pitt Water / Midway Point causeway views", "Lauderdale Beach — quieter coastal stop", "Optional: South Arm detour — extended coastal drive", "Return locally"], mapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Barilla+Holiday+Park&destination=Seven+Mile+Beach&waypoints=Lauderdale" },
    { title: "Wildlife + Local Produce Loop", image: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Kangaroo_Tasmania.jpg", description: "Mix of food and interactive wildlife.", bestFor: "Families", stops: ["Barilla Bay Oyster Farm — seafood tasting", "Coal River Farm — chocolate/cheese", "ZooDoo Zoo — animal encounters", "Optional: Richmond quick stop", "Return via Richmond Road"], mapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Barilla+Holiday+Park&destination=ZooDoo+Zoo&waypoints=Coal+River+Farm,Barilla+Bay" },
    { title: "Full Hobart Culture Circuit", image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/TMAG_Hobart.jpg", description: "Dense cultural itinerary covering major institutions.", bestFor: "Longer stays, culture-focused visitors", stops: ["MONA — morning session", "Tasmanian Museum & Art Gallery (TMAG) — history/nature", "Salamanca Place — lunch and galleries", "Royal Tasmanian Botanical Gardens — relaxed finish", "Return via city"], mapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Barilla+Holiday+Park&destination=Royal+Tasmanian+Botanical+Gardens&waypoints=MONA,TMAG,Salamanca" },
  ],
  seo: { title: "Day Trips from Hobart | Barilla Holiday Park", description: "Custom day trip itineraries from Barilla Holiday Park to Port Arthur, Bruny Island, MONA and more.", keywords: "hobart day trips, port arthur, bruny island, tasmania itineraries" },
};

export const defaultMiniGolfPage = {
  title: "Putt & Play Mini Golf",
  subtitle: "18 holes of family fun in a beautiful garden setting",
  heroImage: heroImage,
  sectionHeading: "Mini Golf at Barilla",
  sectionDescription: "Challenge yourself on our beautifully landscaped 18-hole mini golf course. Fun for players of all ages and abilities!",
  bodyText: [
    "Putt and Play Minigolf is a challenging and beautifully laid out 18-hole Miniature Golf Course in a picturesque setting. Our course features creative obstacles, water features, and beautifully maintained synthetic grass greens.",
    "Whether you're a serious golfer or just looking for some family fun, our mini golf course offers entertainment for everyone. It's the perfect activity for rainy days or sunny afternoons alike.",
  ],
  infoCards: [
    { icon: "Clock", heading: "Opening Hours", content: "Daily: 9am - 5pm\n(Weather permitting)" },
    { icon: "DollarSign", heading: "Pricing", content: "Adults: $12\nChildren (5-15): $8\nFamily (2+2): $35" },
    { icon: "Users", heading: "Open to All", content: "Park guests & day visitors welcome!" },
  ],
  featureImage: miniGolfImage,
  ctaButton: { label: "Book Your Game", href: "/contact" },
  seo: { title: "Mini Golf | Barilla Holiday Park", description: "18-hole mini golf course in a beautiful garden setting.", keywords: "" },
};

export const defaultContactPage = {
  title: "Contact Us",
  subtitle: "We'd love to hear from you",
  heroImage: heroImage,
  contactHeading: "Get in Touch",
  contactDescription: "Have a question or ready to book? Contact us by phone, email, or fill out the form and we'll get back to you as soon as possible.",
  phone: "1800 465 453",
  email: "stay@barilla.com.au",
  address: "75 Richmond Road\nCambridge, Tasmania 7170\nAustralia",
  receptionHours: "Daily: 8:00am - 8:00pm\nLate arrivals by arrangement",
  mapLink: "https://maps.google.com/?q=75+Richmond+Road+Cambridge+Tasmania+7170",
  formHeading: "Send a Message",
  seo: { title: "Contact Us | Barilla Holiday Park", description: "Contact Barilla Holiday Park. Phone, email or send us a message.", keywords: "" },
};
