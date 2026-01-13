import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import { Link } from "react-router-dom";
import { Bed, Users, Wifi, Tv, UtensilsCrossed, Car, Sun } from "lucide-react";
import cabinImage from "@/assets/cabin-accommodation.jpg";
import heroImage from "@/assets/hero-cabin.jpg";

const cabins = [
  {
    name: "Family Cabin",
    sleeps: "Up to 6 guests",
    features: ["2 Bedrooms", "Full Kitchen", "Ensuite Bathroom", "Air Conditioning", "TV & WiFi"],
    description: "Perfect for families, our 2-bedroom cabins offer comfort and space with modern amenities."
  },
  {
    name: "Studio Cabin",
    sleeps: "Up to 4 guests",
    features: ["Open Plan", "Kitchenette", "Ensuite Bathroom", "Air Conditioning", "TV & WiFi"],
    description: "Cosy and self-contained, ideal for couples or small families looking for a comfortable stay."
  },
  {
    name: "Deluxe Cabin",
    sleeps: "Up to 8 guests",
    features: ["3 Bedrooms", "Full Kitchen", "2 Bathrooms", "Air Conditioning", "Outdoor Deck"],
    description: "Our largest option with premium features, perfect for extended families or groups."
  }
];

const CabinAccommodation = () => {
  return (
    <Layout>
      <PageHero 
        title="Cabin Accommodation"
        subtitle="Comfortable, self-contained cabins for your Tasmanian getaway"
        backgroundImage={heroImage}
      />
      
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <h2 className="section-heading">Our Cabins</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-4">
            Our cabins feature open plan design and are fully self-contained. 
            We have accommodation options for up to 8 people.
          </p>
          <div className="section-underline" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {cabins.map((cabin) => (
              <div key={cabin.name} className="card-accommodation">
                <div className="card-header">{cabin.name}</div>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={cabinImage} 
                    alt={cabin.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-center gap-2 mb-4 text-primary">
                    <Users size={18} />
                    <span className="text-sm font-medium">{cabin.sleeps}</span>
                  </div>
                  <p className="text-muted-foreground text-center text-sm mb-4">
                    {cabin.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {cabin.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Sun size={14} className="text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn-cta block text-center text-sm">
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Cabin Features */}
          <div className="mt-16 bg-barilla-cream rounded-lg p-8 md:p-12">
            <h3 className="section-heading mb-8">Cabin Features & Amenities</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
              <div className="flex flex-col items-center gap-2">
                <Bed className="text-primary" size={32} />
                <span className="text-sm font-medium">Comfortable Beds</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Wifi className="text-primary" size={32} />
                <span className="text-sm font-medium">Free WiFi</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Tv className="text-primary" size={32} />
                <span className="text-sm font-medium">Flat Screen TV</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <UtensilsCrossed className="text-primary" size={32} />
                <span className="text-sm font-medium">Full Kitchen</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Car className="text-primary" size={32} />
                <span className="text-sm font-medium">Free Parking</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Sun className="text-primary" size={32} />
                <span className="text-sm font-medium">Air Conditioning</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CabinAccommodation;
