import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import { Link } from "react-router-dom";
import { Clock, MapPin, ExternalLink, Mountain, Castle, Wine, Waves, TreePine } from "lucide-react";
import heroImage from "@/assets/hero-cabin.jpg";

const attractions = [
  {
    icon: Castle,
    name: "Richmond Historic Village",
    distance: "5 min drive",
    description: "Australia's oldest bridge, historic buildings, galleries, and antique shops."
  },
  {
    icon: Mountain,
    name: "Mount Wellington",
    distance: "30 min drive",
    description: "Stunning views of Hobart and beyond from the summit. Walking tracks for all levels."
  },
  {
    icon: Wine,
    name: "Coal River Valley Wineries",
    distance: "10 min drive",
    description: "Award-winning cool climate wines in beautiful cellar doors and vineyards."
  },
  {
    icon: Waves,
    name: "Seven Mile Beach",
    distance: "10 min drive",
    description: "Beautiful sandy beach perfect for swimming, walking, and surfing."
  },
  {
    icon: TreePine,
    name: "Bonorong Wildlife Sanctuary",
    distance: "15 min drive",
    description: "Get up close with Tasmanian devils, wombats, koalas, and more native wildlife."
  },
  {
    icon: Castle,
    name: "Hobart City & Salamanca",
    distance: "15 min drive",
    description: "Historic Salamanca Place, Saturday markets, waterfront dining and galleries."
  }
];

const TouristAttractions = () => {
  return (
    <Layout>
      <PageHero 
        title="Tourist Attractions"
        subtitle="Explore the best of Tasmania from our central location"
        backgroundImage={heroImage}
      />
      
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <h2 className="section-heading">Nearby Attractions</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-4">
            Barilla Holiday Park is perfectly positioned to explore all that 
            southern Tasmania has to offer. From historic villages to wild nature.
          </p>
          <div className="section-underline" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {attractions.map((attraction) => (
              <div key={attraction.name} className="bg-card rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-barilla-cream rounded-full p-3 shrink-0">
                    <attraction.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">{attraction.name}</h3>
                    <div className="flex items-center gap-1 text-sm text-accent mb-2">
                      <Clock size={14} />
                      {attraction.distance}
                    </div>
                    <p className="text-sm text-muted-foreground">{attraction.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Map/Location Section */}
          <div className="mt-16 bg-primary text-primary-foreground rounded-lg p-8 text-center">
            <MapPin className="mx-auto mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2">Central to Everything</h3>
            <p className="max-w-2xl mx-auto mb-6">
              Our location in Cambridge means you're just minutes from Hobart city, 
              the airport, Richmond, and all major attractions. The perfect base for 
              your Tasmanian adventure!
            </p>
            <a 
              href="https://www.discovertasmania.com.au/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-accent text-accent-foreground font-semibold px-6 py-3 rounded-md inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              Discover Tasmania <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TouristAttractions;
