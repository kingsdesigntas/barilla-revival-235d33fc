import { useMemo, useState } from "react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import { MapPin, Phone, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

type Category =
  | "Markets & Shopping"
  | "Heritage & History"
  | "Art & Museums"
  | "Wildlife & Nature"
  | "Food & Wine"
  | "Beaches & Coast"
  | "Scenic & Outdoors"
  | "Entertainment";

interface Attraction {
  name: string;
  image: string;
  description: string;
  address: string;
  phone?: string;
  website: string;
  categories: Category[];
}

const attractions: Attraction[] = [
  {
    name: "Salamanca Market",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Salamanca_Market_Hobart.jpg",
    description: "Large outdoor market with 300+ stalls featuring local produce, crafts, and food. Open Saturdays.",
    address: "Salamanca Place, Hobart TAS 7000",
    phone: "+61 3 6238 2711",
    website: "https://salamancamarket.com.au",
    categories: ["Markets & Shopping", "Food & Wine"],
  },
  {
    name: "Richmond Village",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Richmond_Bridge_Tasmania.jpg",
    description: "Historic village with Australia's oldest bridge, boutique shops, and heritage buildings.",
    address: "Richmond TAS 7025",
    phone: "+61 3 6260 2100",
    website: "https://coalriver.com.au",
    categories: ["Heritage & History", "Markets & Shopping"],
  },
  {
    name: "MONA (Museum of Old and New Art)",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6c/MONA_Hobart.jpg",
    description: "World-renowned underground museum blending ancient and contemporary art.",
    address: "655 Main Rd, Berriedale TAS 7011",
    phone: "+61 3 6277 9900",
    website: "https://mona.net.au",
    categories: ["Art & Museums"],
  },
  {
    name: "ZooDoo Zoo",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Kangaroo_Tasmania.jpg",
    description: "Interactive wildlife park with feeding experiences and native animals.",
    address: "620 Middle Tea Tree Rd, Richmond TAS 7025",
    phone: "+61 3 6260 2444",
    website: "https://zoodoo.com.au",
    categories: ["Wildlife & Nature"],
  },
  {
    name: "Coal River Valley Wineries",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Vineyard_Tasmania.jpg",
    description: "Cool-climate wine region close to Cambridge with cellar doors and scenic drives.",
    address: "Coal River Valley, TAS",
    phone: "+61 3 6260 2100",
    website: "https://coalriver.com.au",
    categories: ["Food & Wine", "Scenic & Outdoors"],
  },
  {
    name: "Royal Tasmanian Botanical Gardens",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Royal_Tasmanian_Botanical_Gardens.jpg",
    description: "Expansive gardens featuring Japanese garden, heritage plants, and walking paths.",
    address: "Lower Domain Rd, Hobart TAS 7000",
    phone: "+61 3 6165 0451",
    website: "https://rtbg.tas.gov.au",
    categories: ["Wildlife & Nature", "Scenic & Outdoors"],
  },
  {
    name: "Seven Mile Beach",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Seven_Mile_Beach_Tasmania.jpg",
    description: "Long sandy beach ideal for walking, fishing, and easy vehicle access.",
    address: "Seven Mile Beach TAS 7170",
    website: "https://parks.tas.gov.au",
    categories: ["Beaches & Coast"],
  },
  {
    name: "Barilla Bay Oyster Farm",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Oyster_farm.jpg",
    description: "Oyster farm offering tastings and tours near the airport.",
    address: "1388 Tasman Hwy, Cambridge TAS 7170",
    phone: "+61 3 6248 5458",
    website: "https://barillabay.com.au",
    categories: ["Food & Wine"],
  },
  {
    name: "Mount Wellington (kunanyi)",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Mount_Wellington_Tasmania.jpg",
    description: "Drive-to summit with panoramic views over Hobart and surrounding wilderness.",
    address: "Pinnacle Rd, Wellington Park TAS",
    phone: "+61 3 6238 2711",
    website: "https://wellingtonpark.org.au",
    categories: ["Scenic & Outdoors", "Wildlife & Nature"],
  },
  {
    name: "Tasmanian Museum and Art Gallery",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/TMAG_Hobart.jpg",
    description: "Free-entry museum covering Tasmania's history, culture, and natural sciences.",
    address: "Dunn Pl, Hobart TAS 7000",
    phone: "+61 3 6165 7000",
    website: "https://tmag.tas.gov.au",
    categories: ["Art & Museums", "Heritage & History"],
  },
  {
    name: "Bellerive Bluff & Beach",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Bellerive_Beach.jpg",
    description: "Coastal walk with views of Hobart skyline and easy parking.",
    address: "Bellerive TAS 7018",
    website: "https://clarence.tas.gov.au",
    categories: ["Beaches & Coast", "Scenic & Outdoors"],
  },
  {
    name: "Port Arthur Historic Site",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Port_Arthur_Tasmania.jpg",
    description: "UNESCO-listed convict site with extensive ruins and guided tours.",
    address: "Arthur Hwy, Port Arthur TAS 7182",
    phone: "+61 3 6251 2323",
    website: "https://portarthur.org.au",
    categories: ["Heritage & History"],
  },
  {
    name: "Tasman Peninsula Scenic Drive",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Tasman_Peninsula_Cliffs.jpg",
    description: "Coastal drive featuring cliffs, blowholes, and lookouts.",
    address: "Tasman Peninsula TAS",
    website: "https://discovertasmania.com.au",
    categories: ["Scenic & Outdoors", "Beaches & Coast"],
  },
  {
    name: "Hastings Caves & Thermal Springs",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Newdegate_Cave.jpg",
    description: "Cave system with thermal pool; largest dolomite cave open to tourists in Australia.",
    address: "Hastings TAS 7109",
    phone: "+61 3 6297 3201",
    website: "https://parks.tas.gov.au",
    categories: ["Wildlife & Nature", "Scenic & Outdoors"],
  },
  {
    name: "Bruny Island (Day Trip)",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Bruny_Island_Neck.jpg",
    description: "Island escape with wildlife, beaches, and local produce.",
    address: "Bruny Island TAS",
    phone: "+61 3 6293 1465",
    website: "https://brunyisland.org.au",
    categories: ["Wildlife & Nature", "Beaches & Coast", "Food & Wine"],
  },
  {
    name: "Glenorchy Art & Sculpture Park (GASP)",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/GASP_Tasmania.jpg",
    description: "Waterfront boardwalk with large-scale sculptures and views.",
    address: "470 Brooker Hwy, Montrose TAS 7010",
    phone: "+61 3 6216 6800",
    website: "https://gcc.tas.gov.au",
    categories: ["Art & Museums", "Scenic & Outdoors"],
  },
  {
    name: "Wrest Point Casino",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Wrest_Point_Hobart.jpg",
    description: "Entertainment complex with restaurants, shows, and gaming.",
    address: "410 Sandy Bay Rd, Sandy Bay TAS 7005",
    phone: "+61 3 6221 1700",
    website: "https://wrestpoint.com.au",
    categories: ["Entertainment", "Food & Wine"],
  },
  {
    name: "Hobart Waterfront & Constitution Dock",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Hobart_Waterfront.jpg",
    description: "Harbour precinct with restaurants, boats, and walking areas.",
    address: "Hobart TAS 7000",
    website: "https://hobartcity.com.au",
    categories: ["Scenic & Outdoors", "Food & Wine"],
  },
  {
    name: "Tasmania Golf Club",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/45/Golf_course_Tasmania.jpg",
    description: "Coastal golf course with scenic ocean views near Cambridge.",
    address: "1420 Tasman Hwy, Cambridge TAS 7170",
    phone: "+61 3 6248 5098",
    website: "https://tasmaniangolfclub.com.au",
    categories: ["Entertainment", "Scenic & Outdoors"],
  },
  {
    name: "Coal River Farm",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/12/Cheese_and_chocolate.jpg",
    description: "Farm shop with cheese, chocolate, and local produce tastings.",
    address: "634 Richmond Rd, Cambridge TAS 7170",
    phone: "+61 3 6248 8914",
    website: "https://coalriverfarm.com.au",
    categories: ["Food & Wine"],
  },
];

const categories: Category[] = [
  "Markets & Shopping",
  "Heritage & History",
  "Art & Museums",
  "Wildlife & Nature",
  "Food & Wine",
  "Beaches & Coast",
  "Scenic & Outdoors",
  "Entertainment",
];

const TouristAttractions = () => {
  const [active, setActive] = useState<Category | "All">("All");

  const filtered = useMemo(
    () => (active === "All" ? attractions : attractions.filter((a) => a.categories.includes(active))),
    [active],
  );

  return (
    <Layout>
      <PageHero
        title="Tourist Attractions Near Hobart"
        subtitle="Discover the best things to see and do during your stay at Barilla Holiday Park"
        backgroundImage="https://upload.wikimedia.org/wikipedia/commons/0/0e/Mount_Wellington_Tasmania.jpg"
      />
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <h2 className="section-heading">Top Attractions Around Hobart</h2>
          <div className="section-underline" />
          <div className="max-w-3xl mx-auto text-center text-muted-foreground space-y-4 mt-6">
            <p>
              Barilla Holiday Park is ideally located for exploring the best tourist attractions near Hobart, Tasmania.
              From vibrant markets and heritage towns to world-class art museums, beaches, wildlife experiences and
              scenic drives, there's something to suit every taste and itinerary during your Hobart holiday. Our friendly
              team at Barilla Holiday Park can help you plan your visits to these top activities and sightseeing
              destinations.
            </p>
            <p>
              Our friendly and knowledgeable staff are here to help you plan your Hobart caravan holiday and can provide
              expert advice on the best things to do in Hobart and across Tasmania.
            </p>
          </div>

          {/* Filters */}
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            <Button
              variant={active === "All" ? "default" : "outline"}
              size="sm"
              onClick={() => setActive("All")}
            >
              All ({attractions.length})
            </Button>
            {categories.map((cat) => {
              const count = attractions.filter((a) => a.categories.includes(cat)).length;
              return (
                <Button
                  key={cat}
                  variant={active === cat ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActive(cat)}
                >
                  {cat} ({count})
                </Button>
              );
            })}
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {filtered.map((a) => (
              <article
                key={a.name}
                className="bg-card rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={a.image}
                    alt={a.name}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
                    }}
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-semibold text-primary text-lg mb-2">{a.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{a.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2 text-muted-foreground">
                      <MapPin size={14} className="shrink-0 mt-0.5 text-accent" />
                      <span>{a.address}</span>
                    </div>
                    {a.phone && (
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Phone size={14} className="shrink-0 text-accent" />
                        <a href={`tel:${a.phone.replace(/\s/g, "")}`} className="hover:text-primary">
                          {a.phone}
                        </a>
                      </div>
                    )}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-1">
                    {a.categories.map((c) => (
                      <span
                        key={c}
                        className="text-xs bg-barilla-cream text-primary px-2 py-1 rounded-full"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                  <a
                    href={a.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-accent font-medium text-sm hover:underline"
                  >
                    Visit website <ExternalLink size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground mt-10">No attractions found in this category.</p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default TouristAttractions;
