import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import { Link } from "react-router-dom";
import { Zap, ShowerHead, Wifi, Car, Trees, Sun } from "lucide-react";
import caravanImage from "@/assets/caravan-site.jpg";
import heroImage from "@/assets/hero-cabin.jpg";

const sites = [
  {
    name: "Powered Site",
    description: "Spacious powered sites with easy access to amenities. Suitable for caravans and motorhomes of all sizes."
  },
  {
    name: "Premium Powered Site",
    description: "Our premium sites offer extra space, better views, and are located in the quietest areas of the park."
  },
  {
    name: "Drive-Through Site",
    description: "Convenient drive-through sites perfect for larger rigs. No reversing required!"
  }
];

const CaravanAccommodation = () => {
  return (
    <Layout>
      <PageHero 
        title="Caravan Accommodation"
        subtitle="Spacious sites with power and modern amenities for your caravan or motorhome"
        backgroundImage={heroImage}
      />
      
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <h2 className="section-heading">Our Caravan Sites</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-4">
            All of our caravan sites are spacious with sheltered and friendly surroundings. 
            A perfect site for your Caravan or Motorhome!
          </p>
          <div className="section-underline" />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {sites.map((site) => (
              <div key={site.name} className="card-accommodation">
                <div className="card-header">{site.name}</div>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={caravanImage} 
                    alt={site.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-center mb-4">
                    <Sun className="text-accent" size={24} />
                  </div>
                  <p className="text-muted-foreground text-center text-sm mb-6">
                    {site.description}
                  </p>
                  <Link to="/contact" className="btn-cta block text-center text-sm">
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Site Features */}
          <div className="mt-16 bg-barilla-cream rounded-lg p-8 md:p-12">
            <h3 className="section-heading mb-8">Site Amenities</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
              <div className="flex flex-col items-center gap-2">
                <Zap className="text-primary" size={32} />
                <span className="text-sm font-medium">Power Hookup</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <ShowerHead className="text-primary" size={32} />
                <span className="text-sm font-medium">Modern Amenities</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Wifi className="text-primary" size={32} />
                <span className="text-sm font-medium">Free WiFi</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Car className="text-primary" size={32} />
                <span className="text-sm font-medium">Easy Access</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Trees className="text-primary" size={32} />
                <span className="text-sm font-medium">Shaded Sites</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Sun className="text-primary" size={32} />
                <span className="text-sm font-medium">BBQ Areas</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CaravanAccommodation;
