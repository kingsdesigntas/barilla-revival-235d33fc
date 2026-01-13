import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import { Link } from "react-router-dom";
import { Plane, Clock, Car, Bed, MapPin, Sun } from "lucide-react";
import heroImage from "@/assets/hero-cabin.jpg";
import cabinImage from "@/assets/cabin-accommodation.jpg";

const AirportAccommodation = () => {
  return (
    <Layout>
      <PageHero 
        title="Hobart Airport Accommodation"
        subtitle="Convenient overnight stays just minutes from Hobart Airport"
        backgroundImage={heroImage}
      />
      
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-4xl">
          <h2 className="section-heading">Airport Stays</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-4">
            Just a stone's throw from Hobart Airport, we're the perfect base 
            for early flights or late arrivals.
          </p>
          <div className="section-underline" />

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6 bg-barilla-cream rounded-lg">
              <Plane className="text-primary mx-auto mb-4" size={40} />
              <h3 className="font-semibold text-primary mb-2">5 Minutes to Airport</h3>
              <p className="text-sm text-muted-foreground">
                We're located just a short drive from Hobart Airport terminal.
              </p>
            </div>
            <div className="text-center p-6 bg-barilla-cream rounded-lg">
              <Clock className="text-primary mx-auto mb-4" size={40} />
              <h3 className="font-semibold text-primary mb-2">Flexible Check-in</h3>
              <p className="text-sm text-muted-foreground">
                We understand travel schedules - ask about our flexible options.
              </p>
            </div>
            <div className="text-center p-6 bg-barilla-cream rounded-lg">
              <Car className="text-primary mx-auto mb-4" size={40} />
              <h3 className="font-semibold text-primary mb-2">Free Parking</h3>
              <p className="text-sm text-muted-foreground">
                Leave your car with us while you travel, or park overnight before your flight.
              </p>
            </div>
          </div>

          {/* Accommodation Options */}
          <div className="mt-16">
            <h3 className="section-heading mb-8">Available Options</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card-accommodation">
                <div className="card-header">Cabin Stay</div>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={cabinImage} 
                    alt="Airport Cabin Stay"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-center mb-4">
                    <Bed className="text-accent" size={24} />
                  </div>
                  <p className="text-muted-foreground text-center text-sm mb-4">
                    Comfortable self-contained cabin accommodation, perfect for 
                    a good night's rest before or after your flight.
                  </p>
                  <Link to="/contact" className="btn-cta block text-center text-sm">
                    Book Cabin
                  </Link>
                </div>
              </div>
              <div className="card-accommodation">
                <div className="card-header">Caravan/Motorhome Site</div>
                <div className="relative aspect-[4/3] overflow-hidden bg-barilla-cream flex items-center justify-center">
                  <Car className="text-primary" size={64} />
                </div>
                <div className="p-6">
                  <div className="flex justify-center mb-4">
                    <Sun className="text-accent" size={24} />
                  </div>
                  <p className="text-muted-foreground text-center text-sm mb-4">
                    Powered site for your caravan or motorhome. Easy access 
                    and secure overnight parking near the airport.
                  </p>
                  <Link to="/contact" className="btn-cta block text-center text-sm">
                    Book Site
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Location Info */}
          <div className="mt-16 bg-primary text-primary-foreground rounded-lg p-8 text-center">
            <MapPin className="mx-auto mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2">Easy to Find</h3>
            <p className="mb-4">
              75 Richmond Road, Cambridge, Tasmania 7170<br />
              Only 5 minutes from Hobart Airport
            </p>
            <Link to="/contact" className="bg-accent text-accent-foreground font-semibold px-6 py-3 rounded-md inline-block hover:opacity-90 transition-opacity">
              Get Directions
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AirportAccommodation;
