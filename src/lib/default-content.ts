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
  title: "Tourist Attractions",
  subtitle: "Explore the best of Tasmania from our central location",
  heroImage: heroImage,
  sectionHeading: "Nearby Attractions",
  sectionDescription: "Barilla Holiday Park is perfectly positioned to explore all that southern Tasmania has to offer. From historic villages to wild nature.",
  activities: [
    { icon: "Castle", title: "Richmond Historic Village", distance: "5 min drive", description: "Australia's oldest bridge, historic buildings, galleries, and antique shops." },
    { icon: "Mountain", title: "Mount Wellington", distance: "30 min drive", description: "Stunning views of Hobart and beyond from the summit. Walking tracks for all levels." },
    { icon: "Wine", title: "Coal River Valley Wineries", distance: "10 min drive", description: "Award-winning cool climate wines in beautiful cellar doors and vineyards." },
    { icon: "Waves", title: "Seven Mile Beach", distance: "10 min drive", description: "Beautiful sandy beach perfect for swimming, walking, and surfing." },
    { icon: "TreePine", title: "Bonorong Wildlife Sanctuary", distance: "15 min drive", description: "Get up close with Tasmanian devils, wombats, koalas, and more native wildlife." },
    { icon: "Castle", title: "Hobart City & Salamanca", distance: "15 min drive", description: "Historic Salamanca Place, Saturday markets, waterfront dining and galleries." },
  ],
  featureSection: {
    heading: "Central to Everything",
    description: "Our location in Cambridge means you're just minutes from Hobart city, the airport, Richmond, and all major attractions. The perfect base for your Tasmanian adventure!",
    buttonText: "Discover Tasmania",
    buttonLink: "https://www.discovertasmania.com.au/",
  },
  seo: { title: "Tourist Attractions | Barilla Holiday Park", description: "Explore Tasmania from our central location.", keywords: "" },
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
