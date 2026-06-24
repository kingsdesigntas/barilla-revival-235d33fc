// Default/fallback content for all pages when Sanity is not configured
import cabinImage from "@/assets/barillapark-cabin.jpg";
import studioCabinImage from "@/assets/barillapark-studio-cabin.jpg";
import ensuiteCabinImage from "@/assets/Barillapark-31.jpg.asset.json";
import twoBedroomCabinImage from "@/assets/new-cabin-1-1024x681.jpg.asset.json";
import caravanImage from "@/assets/barillapark-powered-site.jpg";
import caravanHomeImage from "@/assets/barillapark-caravan-home.jpg";

import premiumPoweredSiteImage from "@/assets/Barillapark-55-2.jpg.asset.json";
import poweredSiteImage from "@/assets/Barillapark-56.jpg.asset.json";
import driveThroughImage from "@/assets/Barillapark-40.jpg.asset.json";
import campingImage from "@/assets/Barillapark-63.jpg.asset.json";
import campingSiteImage1 from "@/assets/Barillapark-40.jpg.asset.json";
import campingSiteImage2 from "@/assets/Barillapark-85.jpg.asset.json";
import airportCampingImage from "@/assets/camping-couple-tent.jpg.asset.json";
import campingAltImage from "@/assets/barillapark-camping-2.jpg";
import miniGolfImage from "@/assets/barillapark-mini-golf.jpg";
import miniGolfAerialImage from "@/assets/barillapark-aerial-mini-golf.jpg";
import aerialImage from "@/assets/barillapark-aerial-1.jpg";
import aerialImage2 from "@/assets/barillapark-aerial-2.jpg";
import receptionImage from "@/assets/barillapark-reception.jpg";
import heroCaravan from "@/assets/hero-caravan.jpg";
import heroCamping from "@/assets/hero-camping.jpg";
import campingHeroRotated from "@/assets/camping-hero-rotated.jpg.asset.json";
import cabinSlideNew from "@/assets/cabin-exterior.png.asset.json";
import cabinStayAirportImage from "@/assets/airport-cabin-stay.jpg.asset.json";
import cabinSlide1 from "@/assets/Barillapark-1.jpg.asset.json";
import cabinSlide2 from "@/assets/Barillapark-19.jpg.asset.json";
import cabinSlide3 from "@/assets/Barillapark-28.jpg.asset.json";
import cabinSlide4 from "@/assets/Barillapark-36.jpg.asset.json";
import caravanSlideNew from "@/assets/roadpass-9R4ghJq0Fe8-unsplash.jpg.asset.json";
import caravanSlide1 from "@/assets/Barillapark-55.jpg.asset.json";
import caravanSlide2 from "@/assets/Barillapark-59-2.jpg.asset.json";
import caravanSlide3 from "@/assets/Barillapark-65.jpg.asset.json";
import caravanSlide4 from "@/assets/Barillapark-90.jpg.asset.json";
import campingSlide1 from "@/assets/camping-couple-tent.jpg.asset.json";
import campingSlide2 from "@/assets/Barillapark-66.jpg.asset.json";
import campingSlide3 from "@/assets/Barillapark-68.jpg.asset.json";
import campingSlide4 from "@/assets/Barillapark-62.jpg.asset.json";
import atBarillaHero from "@/assets/Barillapark-68-2.jpg.asset.json";

const heroImage = aerialImage;

export const defaultSiteSettings = {
  siteName: "BARILLA",
  tagline: "Holiday Park",
  phone: "0362 484 447",
  freeCallPhone: "1800 465 453",
  bookNowPhone: "0362 484 447",
  email: "stay@barilla.com.au",
  address: "75 Richmond Road, Cambridge 7170, Tasmania, Australia",
  navigationItems: [
    { label: "Home", href: "/" },
    {
      label: "Accommodation",
      href: "#",
      children: [
        { label: "Caravan Accommodation", href: "/accommodation/caravans" },
        { label: "Cabin Accommodation", href: "/accommodation/cabins" },
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
  socialLinks: [{ platform: "facebook", url: "https://www.facebook.com/BarillaHolidayPark" }],
  seo: {
    title: "Barilla Holiday Park | Caravan Park Hobart Tasmania",
    description: "Family-friendly caravan park near Hobart, Tasmania. Cabins, caravan sites, and camping grounds.",
    keywords: "caravan park, hobart, tasmania, cabins, camping",
  },
};

export const defaultHomePage = {
  hero: {
    heading: "Barilla Holiday Park Tasmania",
    subheading: "Your Relaxing Base for Exploring Hobart and Southern Tasmania",
    backgroundImage: heroImage,
    ctaButtons: [
      { label: "Cabin Accommodation", href: "/accommodation/cabins", variant: "primary" },
      { label: "Caravan Accommodation", href: "/accommodation/caravans", variant: "primary" },
      { label: "Camping Ground", href: "/accommodation/camping", variant: "success" },
    ],
  },
  introduction: {
    heading: "Your Local, Family-Friendly Holiday Park",
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
    description: "Barilla Holiday Park offers a range of practical, affordable accommodation options to suit every kind of traveller. Whether you're after the comfort of a self-contained cabin, travelling with a caravan or motorhome, or setting up camp, you'll find a relaxed, well-positioned base close to Hobart, the airport, and Southern Tasmania's top attractions.",
    cards: [
      {
        title: "Cabins",
        description: "Our self-contained cabins are designed for comfort and convenience, with open-plan living and everything you need to settle in. Suitable for couples, families, and small groups, with options accommodating up to six guests.",
        image: cabinImage,
        images: [cabinSlideNew.url, cabinSlide1.url, cabinSlide2.url, cabinSlide3.url, cabinSlide4.url],
        link: "/accommodation/cabins",
        buttonText: "View All Cabins",
      },
      {
        title: "Caravan & Motorhome Sites",
        description: "Spacious and easy to access, our caravan sites offer a comfortable and friendly setting for your stay. Whether you're stopping over or staying a while, it's a practical base with everything you need close by.",
        image: caravanHomeImage,
        images: [caravanSlideNew.url, caravanSlide1.url, caravanSlide2.url, caravanSlide3.url, caravanSlide4.url],
        link: "/accommodation/caravans",
        buttonText: "View All Sites",
      },
      {
        title: "Camping Grounds",
        description: "Our sheltered camping grounds provide a relaxed, family-friendly space to unwind. Simple, welcoming, and well-equipped, it's an easy place to set up, recharge, and enjoy your surroundings.",
        image: campingImage.url,
        images: [campingSlide1.url, campingSlide2.url, campingSlide3.url, campingSlide4.url],
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
      mapLink: "https://maps.google.com/?q=75+Richmond+Road+Cambridge+Tasmania+7170",
    },
    ratingsCard: {
      heading: "Ratings",
      description: "Barilla Holiday Park has a 4.4 star rating on Google Reviews from over 360 happy guests.",
      googleReviewsLink: "https://www.google.com/travel/search?q=barilla%20holiday%20park&g2lb=4965990%2C72471280%2C72560029%2C72573224%2C72647020%2C72686036%2C72803964%2C72882230%2C73064764%2C73249150%2C121529349&hl=en-AU&gl=au&cs=1&ssta=1&ts=CAEaRwopEicyJTB4YWE2ZGUxYjRjYTVjYTRjZjoweGJjNGY4OTY5NWUzOTEyMWQSGhIUCgcI6g8QBxgGEgcI6g8QBxgHGAEyAhAA&qs=CAEyFENnc0luYVRrOFpXdDRxZThBUkFCOAJCCQkdEjleaYlPvEIJCR0SOV5piU-8&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwi4-IW2nJqVAxUAAAAAHQAAAAAQAw",
      rating: 4.4,
      reviewCount: "360+",
    },
    socialCard: {
      heading: "Like Us on Facebook",
      description: "Like us on Facebook to get access to exclusive specials and promotions.",
      facebookLink: "https://www.facebook.com/BarillaHolidayPark",
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
  heroImage: cabinImage,
  sectionHeading: "Our Cabins",
  sectionDescription: "Choose from three styles of self-contained cabin, all set within our peaceful Cambridge holiday park. Every cabin includes the essentials below — then pick the layout that suits your group.",
  sharedFeaturesHeading: "Included in Every Cabin",
  sharedFeaturesDescription: "All of our cabins are self-contained and ready for a comfortable stay, with the following standard inclusions.",
  sharedFeatures: [
    { icon: "Bed", label: "All linen supplied" },
    { icon: "UtensilsCrossed", label: "Crockery & cutlery" },
    { icon: "Sun", label: "Reverse cycle heating & A/C" },
    { icon: "Tv", label: "TV in living area" },
    { icon: "Wifi", label: "Self-contained kitchen" },
    { icon: "Car", label: "Off-street parking" },
  ],
  items: [
    {
      name: "Two Bedroom Cabins",
      sleeps: "Sleeps up to 6 - 4 cabins available",
      tagline: "Most popular",
      description: "Our most popular option, these Two Bedroom Cabins sleep up to six guests and offer practical, affordable accommodation with flexible bedding, a shared kitchen, and cosy living area. Perfect for families, workers, or small groups exploring Tasmania comfortably together.",
      features: [
        "Flexible configurations (queen + ensuite with bunks, or four singles)",
        "Open plan kitchen and dining",
        "Reverse cycle heating and air conditioning",
        "All linen and crockery provided",
        "Fully self-contained",
      ],
      image: twoBedroomCabinImage.url,
      buttonText: "Book Now",
      buttonLink: "/contact",
    },
    {
      name: "Ensuite Cabins",
      sleeps: "Sleeps 2–3 · 6 cabins available",
      tagline: "Newly refurbished",
      description: "Our Ensuite Cabins provide comfortable, self-contained accommodation for couples, solo travellers, and small families. Newly refurbished studio-style cabins with a queen bed in the living area, private ensuite, and modern fit-out — an easy, relaxing base for short stays or longer Tasmania adventures.",
      features: [
        "Studio-style layout (open bedroom + living)",
        "Private ensuite (shower + toilet)",
        "Kitchen with gas cooktop",
        "Couch, TV & breakfast bar",
        "Split-system air conditioning",
      ],
      image: ensuiteCabinImage.url,
      buttonText: "Book Now",
      buttonLink: "/contact",
    },
    {
      name: "Standard Cabins",
      sleeps: "Budget-friendly · ensuite & non-ensuite",
      tagline: "Best value",
      description: "Our Standard Cabins are a budget-friendly accommodation option with both ensuite and non-ensuite rooms available, providing practical comfort and essential amenities for road-trippers, workers, and value-conscious travellers. A simple, cosy place to rest, recharge, and enjoy an affordable Tasmania stay.",
      features: [
        "Budget-friendly nightly rates",
        "Ensuite and non-ensuite options",
        "Heating & electric blankets",
        "Crockery and cutlery included",
        "Additional linen supplied",
      ],
      image: cabinImage,
      buttonText: "Book Now",
      buttonLink: "/contact",
    },
  ],
  amenitiesHeading: "",
  amenities: [],
  seo: { title: "Cabin Accommodation | Barilla Holiday Park", description: "Two Bedroom, Ensuite and Standard cabins at Barilla Holiday Park, Cambridge Tasmania.", keywords: "cabins, hobart, tasmania, accommodation" },
};


export const defaultCaravanPage = {
  title: "Caravan Accommodation",
  subtitle: "Spacious sites with power and modern amenities for your caravan or motorhome",
  heroImage: heroCaravan,
  sectionHeading: "Our Caravan Sites",
  sectionDescription: "Nestled amongst peaceful, sheltered surrounds, Barilla Holiday Park offers the perfect balance of convenience and relaxation. Enjoy easy access to Hobart and nearby attractions while unwinding in the laid-back atmosphere of a true holiday park escape. With a range of powered and unpowered caravan and camping sites available, we make it simple to find great value accommodation and book your stay with ease.",
  items: [
    { name: "Powered Site", description: "Spacious powered sites with convenient access to park amenities, suitable for caravans, campervans and motorhomes of all sizes.", image: poweredSiteImage.url, buttonText: "Book Now", buttonLink: "/contact" },
    { name: "Unpowered Site", description: "Offering great value for money, our spacious unpowered sites provide a simple and comfortable camping option with convenient access to all park amenities and plenty of room to relax during your stay.", image: campingImage.url, buttonText: "Book Now", buttonLink: "/contact" },
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
  heroImage: campingHeroRotated.url,
  sectionHeading: "Camp at Barilla",
  sectionDescription: "Barilla Holiday Park offers sheltered and friendly camping grounds with lots of things to do for all the family.",
  items: [
    {
      name: "Camping Site",
      description: "Experience the great Tasmanian outdoors at our well-maintained camping grounds. Set up your tent among the eucalyptus trees and enjoy the peaceful surroundings. Our camping sites offer easy access to modern amenity blocks, BBQ areas, and all the park facilities.",
      image: campingSiteImage1.url,
      images: [campingSiteImage1.url, campingSiteImage2.url, campingImage.url],
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
  sectionDescription: "Whether you’re arriving in Tasmania or preparing for your journey home, Barilla Holiday Park offers comfortable cabin and caravan accommodation just five minutes from Hobart Airport and fifteen minutes from Hobart city. Surrounded by peaceful natural surroundings, you can enjoy a relaxing stay close to the airport without the disturbance of overhead aeroplanes, making Barilla Holiday Park an ideal place to begin or end your Tasmanian adventure.",
  items: [
    {
      name: "CABIN STAYS",
      description: " Enjoy comfortable, self-contained accommodation with everything you need for a relaxing stay. Ideal for a convenient overnight stop before or after your flight.",
      image: cabinStayAirportImage.url,
      buttonText: "Book Cabin",
      buttonLink: "/contact",
    },
    {
      name: "CARAVAN SITES",
      description: "Spacious and sheltered caravan sites with easy access to park amenities, offering a flexible and comfortable option for caravans, campervans and motorhomes.",
      image: caravanSlide1.url,
      buttonText: "Book Site",
      buttonLink: "/contact",
    },
    {
      name: "CAMPING GROUNDS",
      description: "Sheltered and well-maintained camping grounds allowing you to enjoy a more relaxed and quieter stay. ",
      image: airportCampingImage.url,
      buttonText: "Book Campsite",
      buttonLink: "/contact",
    },
  ],
  benefits: [
    { icon: "Plane", heading: "Just 5 Minutes from Hobart Airport", description: "Enjoy a quick and convenient drive to and from the airport terminal." },
    { icon: "Clock", heading: "Flexible Check-In Options", description: "We’re happy to work around your travel schedule wherever possible." },
    { icon: "Car", heading: "Close to Caravan Hire Drop-Off Locations", description: "Conveniently located near major caravan and motorhome hire depots for an easy start or finish to your trip." },
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
  subtitle: "There's plenty for the whole family to enjoy at Barilla Holiday Park. Our park is the perfect place to relax, explore and spend quality time together. Along with our peaceful surroundings and convenient location, guests can enjoy a range of family-friendly activities and open spaces designed for both fun and relaxation during your Tasmanian holiday.",
  heroImage: atBarillaHero.url,
  sectionHeading: "Activities at the Park",
  sectionDescription: "From Putt and Play mini golf to our playground and other family-friendly activities, there's no shortage of fun when you visit Barilla Holiday Park.\n\nIdeally located just a short drive from Hobart and close to Hobart Airport, Barilla Holiday Park is the perfect base for your holiday. Explore the attractions of Cambridge, Hobart, and the rest of Tasmania, then return to the comfort and convenience of our park.\n\nNot only is our location unbeatable, but we also offer plenty to do right here onsite, from outdoor games to relaxing family spaces, making Barilla Holiday Park one of the most beloved Hobart caravan parks and holiday destinations.",
  activities: [
    { icon: "Flag", title: "Putt & Play Mini Golf", description: "Our 18-hole mini golf course is fun for the whole family. Challenge your friends and family!" },
    { icon: "BbqGrillIcon", title: "BBQ Areas", description: "Gather the family for a classic Aussie BBQ at our communal cooking facilities." },
    { icon: "PlaygroundIcon", title: "Playground", description: "The kids will love our playground - a safe space for them to run and play." },
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
    "Barilla Holiday Park is the perfect base for discovering the very best of Hobart and Southern Tasmania. From bustling local markets and charming heritage towns to world-class museums, beautiful beaches, wildlife encounters and scenic coastal drives, there's something for every family, couple and traveller to enjoy. Whether you're planning a day of adventure or a relaxed afternoon exploring at your own pace, our friendly team is always here to help you make the most of your Tasmanian holiday.",
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
    { name: "Salamanca Market", image: "/__l5e/assets-v1/cc410d2e-a5dc-42b1-84f2-08c9507b101a/salamanca-market.jpg", description: "Large outdoor market with 300+ stalls featuring local produce, crafts, and food. Open Saturdays.", address: "Salamanca Place, Hobart TAS 7000", phone: "+61 3 6238 2711", website: "https://salamancamarket.com.au", categories: ["Markets & Shopping", "Food & Wine"] },
    { name: "Richmond Village", image: "/__l5e/assets-v1/efcd9197-7a0f-428c-be6a-98304f017e74/richmond-village.jpg", description: "Historic village with Australia's oldest bridge, boutique shops, and heritage buildings.", address: "Richmond TAS 7025", phone: "", website: "https://www.richmondvillage.com.au/", categories: ["Heritage & History", "Markets & Shopping"] },
    { name: "MONA (Museum of Old and New Art)", image: "/__l5e/assets-v1/58f2fa54-b70d-42d4-87f8-4d58e311bee4/mona.jpg", description: "World-renowned underground museum blending ancient and contemporary art.", address: "655 Main Rd, Berriedale TAS 7011", phone: "+61 3 6277 9900", website: "https://mona.net.au", categories: ["Art & Museums"] },
    { name: "ZooDoo Zoo", image: "/__l5e/assets-v1/dce39c11-752b-44a8-916e-0b2c7c685620/zoodoo.jpg", description: "Interactive wildlife park with feeding experiences and native animals.", address: "620 Middle Tea Tree Rd, Richmond TAS 7025", phone: "+61 3 6260 2444", website: "https://zoodoo.com.au", categories: ["Wildlife & Nature"] },
    { name: "Coal River Farm", image: "/__l5e/assets-v1/9b9750d4-2f47-4f24-8e25-b16f0e33124a/coal-river-farm.jpg", description: "Cool-climate wine region close to Cambridge with cellar doors and scenic drives.", address: "634 Richmond Rd, Cambridge TAS 7170", phone: "03 6248 4960", website: "https://www.coalriverfarm.com.au/", categories: ["Food & Wine", "Scenic & Outdoors"] },
    { name: "Royal Tasmanian Botanical Gardens", image: "/__l5e/assets-v1/3f77ec69-62ff-4c1b-8fa6-a8286117ba8f/botanical-gardens.jpg", description: "Expansive gardens featuring Japanese garden, heritage plants, and walking paths.", address: "Lower Domain Rd, Hobart TAS 7000", phone: "+61 3 6165 0451", website: "https://rtbg.tas.gov.au", categories: ["Wildlife & Nature", "Scenic & Outdoors"] },
    { name: "Seven Mile Beach", image: "/__l5e/assets-v1/9d5e3ed6-57c3-4365-a734-65a1131d5a21/seven-mile-beach.jpg", description: "Long sandy beach ideal for walking, fishing, and easy vehicle access.", address: "Seven Mile Beach TAS 7170", phone: "", website: "https://www.ccc.tas.gov.au/facility/seven-mile-beach/", categories: ["Beaches & Coast"] },
    { name: "Barilla Bay Oyster Farm", image: "/__l5e/assets-v1/21728f54-dc2c-4c43-8931-afc12e8819f4/barilla-bay.jpg", description: "Oyster farm offering tastings and tours near the airport.", address: "1388 Tasman Hwy, Cambridge TAS 7170", phone: "+61 3 6248 5458", website: "https://barillabay.com.au", categories: ["Food & Wine"] },
    { name: "Mount Wellington (kunanyi)", image: "/__l5e/assets-v1/4d412c06-7c72-4313-9e3d-4b802295ebb7/kunanyi.jpg", description: "Drive-to summit with panoramic views over Hobart and surrounding wilderness.", address: "Pinnacle Rd, Wellington Park TAS", phone: "+61 3 6238 2711", website: "https://wellingtonpark.org.au", categories: ["Scenic & Outdoors", "Wildlife & Nature"] },
    { name: "Tasmanian Museum and Art Gallery", image: "/__l5e/assets-v1/b302c75c-e1cd-4362-87cd-a241a57a311b/tmag.jpg", description: "Free-entry museum covering Tasmania's history, culture, and natural sciences.", address: "Dunn Pl, Hobart TAS 7000", phone: "+61 3 6165 7000", website: "https://tmag.tas.gov.au", categories: ["Art & Museums", "Heritage & History"] },
    { name: "Bellerive Bluff & Beach", image: "/__l5e/assets-v1/7ea793f7-d4b7-4b26-9bda-b22f9a61dbad/bellerive.jpg", description: "Coastal walk with views of Hobart skyline and easy parking.", address: "Bellerive TAS 7018", phone: "", website: "https://www.ccc.tas.gov.au/facility/kangaroo-bluff-battery-historic-site/", categories: ["Beaches & Coast", "Scenic & Outdoors"] },
    { name: "Port Arthur Historic Site", image: "/__l5e/assets-v1/cb925278-cb73-401d-ae35-7cf033716e68/port-arthur.jpg", description: "UNESCO-listed convict site with extensive ruins and guided tours.", address: "Arthur Hwy, Port Arthur TAS 7182", phone: "+61 3 6251 2323", website: "https://portarthur.org.au", categories: ["Heritage & History"] },
    { name: "Tasman Peninsula Scenic Drive", image: "/__l5e/assets-v1/b636fec4-738f-4c42-8ed9-dfd343539706/tasman-peninsula.jpg", description: "Coastal drive featuring cliffs, blowholes, and lookouts.", address: "Tasman Peninsula TAS", phone: "", website: "https://www.discovertasmania.com.au/regions/hobart-and-south/tasman-peninsula/", categories: ["Scenic & Outdoors", "Beaches & Coast"] },
    { name: "Hastings Caves & Thermal Springs", image: "/__l5e/assets-v1/492dc3a1-a710-45dc-8919-0be127c73b20/hastings-caves.jpg", description: "Cave system with thermal pool; largest dolomite cave open to tourists in Australia.", address: "Hastings TAS 7109", phone: "+61 3 6297 3201", website: "https://parks.tas.gov.au/explore-our-parks/hastings-caves-state-reserve/hastings-caves-and-thermal-springs", categories: ["Wildlife & Nature", "Scenic & Outdoors"] },
    { name: "Bruny Island (Day Trip)", image: "/__l5e/assets-v1/eb24aa11-5020-4319-9463-20c782af2df4/bruny-island.jpg", description: "Island escape with wildlife, beaches, and local produce.", address: "Bruny Island TAS", phone: "+61 3 6293 1465", website: "https://brunyisland.org.au", categories: ["Wildlife & Nature", "Beaches & Coast", "Food & Wine"] },
    
    { name: "Wrest Point Casino", image: "/__l5e/assets-v1/53110b8c-7eab-4c1b-b2aa-98bc71c5a0b6/wrest-point.jpg", description: "Entertainment complex with restaurants, shows, and gaming.", address: "410 Sandy Bay Rd, Sandy Bay TAS 7005", phone: "+61 3 6221 1700", website: "https://wrestpoint.com.au", categories: ["Entertainment", "Food & Wine"] },
    { name: "Hobart Waterfront & Constitution Dock", image: "/__l5e/assets-v1/2feb568f-be3b-4b3e-9a49-91f3fc22f35a/hobart-waterfront.jpg", description: "Harbour precinct with restaurants, boats, and walking areas.", address: "Hobart TAS 7000", phone: "", website: "https://hobartcity.com.au", categories: ["Scenic & Outdoors", "Food & Wine"] },
    { name: "Tasmania Golf Club", image: "/__l5e/assets-v1/54b66801-67f0-40da-bbd2-2bb8c019cfc5/tasmania-golf-club.jpg", description: "Coastal golf course with scenic ocean views near Cambridge.", address: "1420 Tasman Hwy, Cambridge TAS 7170", phone: "+61 3 6248 5098", website: "https://www.tasmaniagolfclub.com.au/", categories: ["Entertainment", "Scenic & Outdoors"] },
  ],
  seo: { title: "Tourist Attractions Near Hobart | Barilla Holiday Park", description: "Explore the best tourist attractions near Hobart, Tasmania from Barilla Holiday Park.", keywords: "hobart attractions, tasmania, tourism, salamanca, mona, port arthur" },
};

export const defaultDayTripsPage = {
  title: "Day Trips from Barilla Holiday Park",
  subtitle: "Explore Hobart and Southern Tasmania with ease from the convenient base of Barilla Holiday Park.",
  heroImage: "/__l5e/assets-v1/2cb566bb-9fdb-4f2b-8d05-80284ec8d250/day-trips-hero.jpg",
  sectionHeading: "Curated Day Trips for Our Guests",
  introParagraphs: [
    "Barilla Holiday Park is perfectly placed to help you experience some of Southern Tasmania's most loved attractions and scenic day trips. We've created a collection of easy-to-follow itineraries so you can explore more during your stay. From the rich history of Port Arthur and the dramatic Tasman Peninsula coastline, to award-winning wineries, wildlife parks and Hobart's cultural highlights.",
    "With our convenient location near Cambridge, it's easy to head out for the day and return to the comfort of the holiday park each evening. Simply choose the day trip that suits your interests and travel style, then follow the map link for turn-by-turn directions and suggested stops along the way. If you'd like local tips or personalised recommendations, our friendly team is always happy to help.",
  ],
  trips: [
    { title: "Bruny Island Explorer", image: "/__l5e/assets-v1/8cf7af36-4673-4ca2-839e-2478d67b0d26/bruny-island-ferry.jpg", description: "Full-day coastal and food-focused island loop.", bestFor: "Full-day travellers, food, scenery, wildlife", stops: ["Barilla Holiday Park → Kettering Ferry Terminal — 35 min drive, staging point for ferry", "Bruny Island Ferry Crossing — vehicle ferry (20 min)", "The Neck Lookout — panoramic isthmus views", "Adventure Bay — beach, wildlife, café stop", "Cape Bruny Lighthouse — southern cliffs, dramatic coastline", "Get Shucked / Bruny Cheese Co. (optional) — local produce stops", "Return via same route"], mapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Barilla+Holiday+Park&destination=Bruny+Island&waypoints=Kettering+Ferry,The+Neck,Adventure+Bay,Cape+Bruny+Lighthouse" },
    { title: "Port Arthur & Tasman Peninsula Loop", image: "/__l5e/assets-v1/0847eed5-cac9-42e9-8944-9b40cfad3173/port-arthur-map.jpg", description: "History combined with Tasmania's most dramatic coastal scenery.", bestFor: "History, photography", stops: ["Barilla Holiday Park → Eaglehawk Neck — coastal gateway", "Tasman Arch — natural rock formation", "Devil's Kitchen — dramatic sea-carved cliffs", "Blowhole — wave-powered rock formation", "Port Arthur Historic Site — main attraction (2–4 hrs)", "Optional: Remarkable Cave detour", "Return via Arthur Highway"], mapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Barilla+Holiday+Park&destination=Port+Arthur+Historic+Site&waypoints=Eaglehawk+Neck,Tasman+Arch,Devils+Kitchen" },
    { title: "Richmond + Wineries Day", image: "/__l5e/assets-v1/c6a18759-3c0f-4956-b840-3b6b42c19aa8/richmond-village-day.jpg", description: "Short, low-effort gourmet and heritage loop.", bestFor: "Couples, relaxed pace", stops: ["Coal River Farm — chocolate, cheese tastings", "Puddleduck Vineyard — relaxed wine tasting", "Richmond Village — heritage walk, bridge, shops", "Optional: Pooley Wines / Frogmore Creek", "Return via Richmond Road"], mapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Barilla+Holiday+Park&destination=Richmond+TAS&waypoints=Coal+River+Farm,Puddleduck+Vineyard" },
    { title: "Hobart City + Mount Wellington", image: "/__l5e/assets-v1/ae2c4708-61e0-4ef4-b0a0-69f79a6e8b60/hobart-wellington.jpg", description: "Core Hobart highlights with elevated viewpoint.", bestFor: "First-time visitors", stops: ["Salamanca Place — galleries, cafés, market (Sat)", "Hobart Waterfront — harbour walk, food", "Battery Point (optional) — historic streets", "Drive to Mount Wellington summit — multiple lookouts", "The Pinnacle — panoramic city view", "Return via same route"], mapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Barilla+Holiday+Park&destination=Mount+Wellington&waypoints=Salamanca+Place,Hobart+Waterfront" },
    { title: "MONA + Northern River Drive", image: "/__l5e/assets-v1/58f2fa54-b70d-42d4-87f8-4d58e311bee4/mona.jpg", description: "Art-focused day with minimal driving.", bestFor: "Culture and design", stops: ["Glenorchy Art & Sculpture Park (GASP) — short walk", "MONA Museum — 2–3 hr visit", "Moorilla Winery (on-site) — tasting/lunch", "Optional: Derwent River foreshore stops", "Return via Brooker Highway"], mapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Barilla+Holiday+Park&destination=MONA&waypoints=Glenorchy+Art+Park" },
    { title: "Huon Valley + Tahune Airwalk", image: "/__l5e/assets-v1/5b1bb34a-4d11-41cd-b2dc-7f3bf26696c5/tahune-airwalk.jpg", description: "Forest landscapes and elevated walk experience.", bestFor: "Nature, moderate activity", stops: ["Huonville — river town, supplies stop", "Geeveston — heritage timber town", "Tahune Airwalk — canopy walk + swinging bridges", "Optional: Franklin / Wooden Boat Centre", "Return via Huon Highway"], mapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Barilla+Holiday+Park&destination=Tahune+Airwalk&waypoints=Huonville,Geeveston" },
    { title: "Mount Field National Park", image: "/__l5e/assets-v1/cecd23dc-5a02-4417-9140-9fbcab53e1b6/mount-field.jpg", description: "Accessible waterfalls and forest walks.", bestFor: "Families, low-intensity nature", stops: ["New Norfolk — café or antique stop", "Mount Field Visitor Centre — entry point", "Russell Falls — short easy walk", "Horseshoe Falls / Tall Trees Walk — optional extensions", "Optional: Lake Dobson (weather permitting)", "Return via same route"], mapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Barilla+Holiday+Park&destination=Mount+Field+National+Park&waypoints=New+Norfolk" },
    { title: "Beaches & Coastal Relaxation", image: "/__l5e/assets-v1/17168659-b6dc-4a5a-807f-5d5b2b41f017/beaches-coastal.jpg", description: "Minimal driving, maximum relaxation.", bestFor: "Low-effort days", stops: ["Seven Mile Beach — long flat beach walk", "Pitt Water / Midway Point causeway views", "Lauderdale Beach — quieter coastal stop", "Optional: South Arm detour — extended coastal drive", "Return locally"], mapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Barilla+Holiday+Park&destination=Seven+Mile+Beach&waypoints=Lauderdale" },
    { title: "Wildlife + Local Produce Loop", image: "/__l5e/assets-v1/041a59eb-69eb-4ac1-9451-2ca35a102e25/wildlife-produce.jpg", description: "Mix of food and interactive wildlife.", bestFor: "Families", stops: ["Barilla Bay Oyster Farm — seafood tasting", "Coal River Farm — chocolate/cheese", "ZooDoo Zoo — animal encounters", "Optional: Richmond quick stop", "Return via Richmond Road"], mapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Barilla+Holiday+Park&destination=ZooDoo+Zoo&waypoints=Coal+River+Farm,Barilla+Bay" },
    { title: "Full Hobart Culture Circuit", image: "/__l5e/assets-v1/ee738732-36fd-404e-963c-aef9d678397b/hobart-culture.jpg", description: "Dense cultural itinerary covering major institutions.", bestFor: "Longer stays, culture-focused visitors", stops: ["MONA — morning session", "Tasmanian Museum & Art Gallery (TMAG) — history/nature", "Salamanca Place — lunch and galleries", "Royal Tasmanian Botanical Gardens — relaxed finish", "Return via city"], mapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Barilla+Holiday+Park&destination=Royal+Tasmanian+Botanical+Gardens&waypoints=MONA,TMAG,Salamanca" },
  ],
  seo: { title: "Day Trips from Hobart | Barilla Holiday Park", description: "Custom day trip itineraries from Barilla Holiday Park to Port Arthur, Bruny Island, MONA and more.", keywords: "hobart day trips, port arthur, bruny island, tasmania itineraries" },
};

export const defaultMiniGolfPage = {
  title: "Putt & Play Mini Golf",
  subtitle: "18 holes of family fun in a beautiful garden setting",
  heroImage: miniGolfAerialImage,
  sectionHeading: "Mini Golf at Barilla",
  sectionDescription: "Challenge yourself on our beautifully landscaped 18-hole mini golf course. Fun for players of all ages and abilities!",
  bodyText: [
    "Putt and Play Minigolf is a challenging and beautifully laid out 18-hole Miniature Golf Course in a picturesque setting. Our course features creative obstacles, water features, and beautifully maintained synthetic grass greens.",
    "Whether you're a serious golfer or just looking for some family fun, our mini golf course offers entertainment for everyone. It's the perfect activity for rainy days or sunny afternoons alike.",
  ],
  infoCards: [
    { icon: "Clock", heading: "Opening Hours", content: "Daily: 9am - 5pm\n(Weather permitting)" },
    { icon: "DollarSign", heading: "Pricing", content: "Adults: $18 - Members $16\nChildren (up to 16yrs): $12 - Members $10\nConcession: $15 - Members $12\nFamily (2 Adults and 2 Children): $45 – Members $40\nExtra Child: $10 – Members $8" },
  ],
  featureImage: miniGolfImage,
  ctaButton: { label: "Book Your Game", href: "/contact" },
  seo: { title: "Mini Golf | Barilla Holiday Park", description: "18-hole mini golf course in a beautiful garden setting.", keywords: "" },
};

export const defaultContactPage = {
  title: "Contact us.",
  subtitle: "Our friendly team is always here to help with local advice, travel tips and any questions you may have during your stay at Barilla Holiday Park.",
  heroImage: receptionImage,
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
