import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import { Link } from "react-router-dom";
import { Tent, ShowerHead, Wifi, Flame, Trees, Sun } from "lucide-react";
import campingImage from "@/assets/camping-grounds.jpg";
import heroImage from "@/assets/hero-cabin.jpg";

const CampingGrounds = () => {
  return (
    <Layout>
      <PageHero 
        title="Camping Grounds"
        subtitle="Sheltered, family-friendly camping in beautiful Tasmania"
        backgroundImage={heroImage}
      />
      
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-4xl">
          <h2 className="section-heading">Camp at Barilla</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-4">
            Barilla Holiday Park offers sheltered and friendly camping grounds 
            with lots of things to do for all the family.
          </p>
          <div className="section-underline" />

          <div className="mt-12">
            <div className="card-accommodation max-w-2xl mx-auto">
              <div className="card-header">Camping Site</div>
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={campingImage} 
                  alt="Camping at Barilla"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-muted-foreground text-center mb-6">
                  Experience the great Tasmanian outdoors at our well-maintained camping grounds. 
                  Set up your tent among the eucalyptus trees and enjoy the peaceful surroundings. 
                  Our camping sites offer easy access to modern amenity blocks, BBQ areas, and 
                  all the park facilities.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <Tent className="text-accent shrink-0" size={20} />
                    Spacious flat camping sites
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <Trees className="text-accent shrink-0" size={20} />
                    Sheltered and shaded areas
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <ShowerHead className="text-accent shrink-0" size={20} />
                    Clean modern amenity blocks
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <Flame className="text-accent shrink-0" size={20} />
                    BBQ and campfire areas
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <Wifi className="text-accent shrink-0" size={20} />
                    Free WiFi access
                  </li>
                </ul>
                <Link to="/contact" className="btn-cta block text-center">
                  Book Your Campsite
                </Link>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mt-16 bg-barilla-cream rounded-lg p-8 md:p-12">
            <h3 className="section-heading mb-8">Camping Facilities</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center gap-2">
                <Tent className="text-primary" size={32} />
                <span className="text-sm font-medium">Tent Sites</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <ShowerHead className="text-primary" size={32} />
                <span className="text-sm font-medium">Hot Showers</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Wifi className="text-primary" size={32} />
                <span className="text-sm font-medium">Free WiFi</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Flame className="text-primary" size={32} />
                <span className="text-sm font-medium">BBQ Facilities</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Trees className="text-primary" size={32} />
                <span className="text-sm font-medium">Shaded Areas</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Sun className="text-primary" size={32} />
                <span className="text-sm font-medium">Picnic Tables</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CampingGrounds;
