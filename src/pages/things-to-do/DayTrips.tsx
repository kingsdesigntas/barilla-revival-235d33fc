import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import { MapPin, ExternalLink, Users } from "lucide-react";

interface DayTrip {
  title: string;
  image: string;
  description: string;
  bestFor: string;
  stops: string[];
  mapsUrl: string;
}

const dayTrips: DayTrip[] = [
  {
    title: "Bruny Island Explorer",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Bruny_Island_Neck.jpg",
    description: "Full-day coastal and food-focused island loop.",
    bestFor: "Full-day travellers, food, scenery, wildlife",
    stops: [
      "Barilla Holiday Park → Kettering Ferry Terminal — 35 min drive, staging point for ferry",
      "Bruny Island Ferry Crossing — vehicle ferry (20 min)",
      "The Neck Lookout — panoramic isthmus views",
      "Adventure Bay — beach, wildlife, café stop",
      "Cape Bruny Lighthouse — southern cliffs, dramatic coastline",
      "Get Shucked / Bruny Cheese Co. (optional) — local produce stops",
      "Return via same route",
    ],
    mapsUrl:
      "https://www.google.com/maps/dir/?api=1&origin=Barilla+Holiday+Park&destination=Bruny+Island&waypoints=Kettering+Ferry,The+Neck,Adventure+Bay,Cape+Bruny+Lighthouse",
  },
  {
    title: "Port Arthur & Tasman Peninsula Loop",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Port_Arthur_Tasmania.jpg",
    description: "History combined with Tasmania's most dramatic coastal scenery.",
    bestFor: "History, photography",
    stops: [
      "Barilla Holiday Park → Eaglehawk Neck — coastal gateway",
      "Tasman Arch — natural rock formation",
      "Devil's Kitchen — dramatic sea-carved cliffs",
      "Blowhole — wave-powered rock formation",
      "Port Arthur Historic Site — main attraction (2–4 hrs)",
      "Optional: Remarkable Cave detour",
      "Return via Arthur Highway",
    ],
    mapsUrl:
      "https://www.google.com/maps/dir/?api=1&origin=Barilla+Holiday+Park&destination=Port+Arthur+Historic+Site&waypoints=Eaglehawk+Neck,Tasman+Arch,Devils+Kitchen",
  },
  {
    title: "Richmond + Wineries Day",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Richmond_Bridge_Tasmania.jpg",
    description: "Short, low-effort gourmet and heritage loop.",
    bestFor: "Couples, relaxed pace",
    stops: [
      "Coal River Farm — chocolate, cheese tastings",
      "Puddleduck Vineyard — relaxed wine tasting",
      "Richmond Village — heritage walk, bridge, shops",
      "Optional: Pooley Wines / Frogmore Creek",
      "Return via Richmond Road",
    ],
    mapsUrl:
      "https://www.google.com/maps/dir/?api=1&origin=Barilla+Holiday+Park&destination=Richmond+TAS&waypoints=Coal+River+Farm,Puddleduck+Vineyard",
  },
  {
    title: "Hobart City + Mount Wellington",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Mount_Wellington_Tasmania.jpg",
    description: "Core Hobart highlights with elevated viewpoint.",
    bestFor: "First-time visitors",
    stops: [
      "Salamanca Place — galleries, cafés, market (Sat)",
      "Hobart Waterfront — harbour walk, food",
      "Battery Point (optional) — historic streets",
      "Drive to Mount Wellington summit — multiple lookouts",
      "The Pinnacle — panoramic city view",
      "Return via same route",
    ],
    mapsUrl:
      "https://www.google.com/maps/dir/?api=1&origin=Barilla+Holiday+Park&destination=Mount+Wellington&waypoints=Salamanca+Place,Hobart+Waterfront",
  },
  {
    title: "MONA + Northern River Drive",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6c/MONA_Hobart.jpg",
    description: "Art-focused day with minimal driving.",
    bestFor: "Culture and design",
    stops: [
      "Glenorchy Art & Sculpture Park (GASP) — short walk",
      "MONA Museum — 2–3 hr visit",
      "Moorilla Winery (on-site) — tasting/lunch",
      "Optional: Derwent River foreshore stops",
      "Return via Brooker Highway",
    ],
    mapsUrl:
      "https://www.google.com/maps/dir/?api=1&origin=Barilla+Holiday+Park&destination=MONA&waypoints=Glenorchy+Art+Park",
  },
  {
    title: "Huon Valley + Tahune Airwalk",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Tasman_Peninsula_Cliffs.jpg",
    description: "Forest landscapes and elevated walk experience.",
    bestFor: "Nature, moderate activity",
    stops: [
      "Huonville — river town, supplies stop",
      "Geeveston — heritage timber town",
      "Tahune Airwalk — canopy walk + swinging bridges",
      "Optional: Franklin / Wooden Boat Centre",
      "Return via Huon Highway",
    ],
    mapsUrl:
      "https://www.google.com/maps/dir/?api=1&origin=Barilla+Holiday+Park&destination=Tahune+Airwalk&waypoints=Huonville,Geeveston",
  },
  {
    title: "Mount Field National Park",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Newdegate_Cave.jpg",
    description: "Accessible waterfalls and forest walks.",
    bestFor: "Families, low-intensity nature",
    stops: [
      "New Norfolk — café or antique stop",
      "Mount Field Visitor Centre — entry point",
      "Russell Falls — short easy walk",
      "Horseshoe Falls / Tall Trees Walk — optional extensions",
      "Optional: Lake Dobson (weather permitting)",
      "Return via same route",
    ],
    mapsUrl:
      "https://www.google.com/maps/dir/?api=1&origin=Barilla+Holiday+Park&destination=Mount+Field+National+Park&waypoints=New+Norfolk",
  },
  {
    title: "Beaches & Coastal Relaxation",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Seven_Mile_Beach_Tasmania.jpg",
    description: "Minimal driving, maximum relaxation.",
    bestFor: "Low-effort days",
    stops: [
      "Seven Mile Beach — long flat beach walk",
      "Pitt Water / Midway Point causeway views",
      "Lauderdale Beach — quieter coastal stop",
      "Optional: South Arm detour — extended coastal drive",
      "Return locally",
    ],
    mapsUrl:
      "https://www.google.com/maps/dir/?api=1&origin=Barilla+Holiday+Park&destination=Seven+Mile+Beach&waypoints=Lauderdale",
  },
  {
    title: "Wildlife + Local Produce Loop",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Kangaroo_Tasmania.jpg",
    description: "Mix of food and interactive wildlife.",
    bestFor: "Families",
    stops: [
      "Barilla Bay Oyster Farm — seafood tasting",
      "Coal River Farm — chocolate/cheese",
      "ZooDoo Zoo — animal encounters",
      "Optional: Richmond quick stop",
      "Return via Richmond Road",
    ],
    mapsUrl:
      "https://www.google.com/maps/dir/?api=1&origin=Barilla+Holiday+Park&destination=ZooDoo+Zoo&waypoints=Coal+River+Farm,Barilla+Bay",
  },
  {
    title: "Full Hobart Culture Circuit",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/TMAG_Hobart.jpg",
    description: "Dense cultural itinerary covering major institutions.",
    bestFor: "Longer stays, culture-focused visitors",
    stops: [
      "MONA — morning session",
      "Tasmanian Museum & Art Gallery (TMAG) — history/nature",
      "Salamanca Place — lunch and galleries",
      "Royal Tasmanian Botanical Gardens — relaxed finish",
      "Return via city",
    ],
    mapsUrl:
      "https://www.google.com/maps/dir/?api=1&origin=Barilla+Holiday+Park&destination=Royal+Tasmanian+Botanical+Gardens&waypoints=MONA,TMAG,Salamanca",
  },
];

const DayTrips = () => {
  return (
    <Layout>
      <PageHero
        title="Day Trips from Barilla Holiday Park"
        subtitle="Custom-built itineraries to help you explore Hobart, Port Arthur and Tasmania's south"
        backgroundImage="https://upload.wikimedia.org/wikipedia/commons/2/2c/Tasman_Peninsula_Cliffs.jpg"
      />
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <h2 className="section-heading">Curated Day Trips for Our Guests</h2>
          <div className="section-underline" />
          <div className="max-w-3xl mx-auto text-center text-muted-foreground space-y-4 mt-6">
            <p>
              At Barilla Holiday Park, we've put together a collection of custom day trips designed to help our
              guests get the most out of their stay. From the convict heritage of Port Arthur and the dramatic
              coastline of the Tasman Peninsula, to wineries, wildlife parks and cultural icons of Hobart, each
              itinerary is built around our central location near Cambridge — making it easy to explore and return
              comfortably each evening.
            </p>
            <p>
              Pick the day trip that suits your pace and interests, then tap the map link to launch turn-by-turn
              directions with all the suggested stops pre-loaded. Our friendly staff can also help fine-tune any
              itinerary on arrival.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {dayTrips.map((trip, idx) => (
              <article
                key={trip.title}
                className="bg-card rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[16/9] overflow-hidden bg-muted relative">
                  <img
                    src={trip.image}
                    alt={trip.title}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
                    }}
                  />
                  <div className="absolute top-3 left-3 right-3 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1.5 rounded-full inline-flex items-center gap-2 shadow-md w-fit max-w-[calc(100%-1.5rem)]">
                    <Users size={14} className="shrink-0" />
                    <span className="truncate">{trip.bestFor}</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-serif font-semibold text-primary mb-2">{trip.title}</h3>
                  <p className="text-muted-foreground mb-4">{trip.description}</p>

                  <div className="bg-secondary/50 rounded-md p-4 mb-4 flex-1">
                    <h4 className="font-semibold text-primary text-sm mb-2 flex items-center gap-2">
                      <MapPin size={14} className="text-accent" /> Stops Breakdown
                    </h4>
                    <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside marker:text-accent marker:font-semibold">
                      {trip.stops.map((stop) => (
                        <li key={stop} className="leading-relaxed">
                          {stop}
                        </li>
                      ))}
                    </ol>
                  </div>

                  <a
                    href={trip.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-5 py-2.5 rounded-md hover:bg-primary/90 transition-colors"
                  >
                    Open Route in Google Maps <ExternalLink size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DayTrips;
