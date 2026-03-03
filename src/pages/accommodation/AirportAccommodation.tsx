import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import { Link } from "react-router-dom";
import { Plane, Clock, Car, Bed, MapPin, Sun } from "lucide-react";
import { useSanityContent } from "@/hooks/useSanityContent";
import { ACCOMMODATION_PAGE_QUERY } from "@/lib/sanity-queries";
import { defaultAirportPage } from "@/lib/default-content";

const iconMap: Record<string, any> = { Plane, Clock, Car, Bed, MapPin, Sun };

const AirportAccommodation = () => {
  const { content } = useSanityContent("airport-page", ACCOMMODATION_PAGE_QUERY, defaultAirportPage, { slug: "airport" });

  return (
    <Layout>
      <PageHero title={content.title} subtitle={content.subtitle} backgroundImage={content.heroImage} />
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-4xl">
          <h2 className="section-heading">{content.sectionHeading}</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-4">{content.sectionDescription}</p>
          <div className="section-underline" />

          {/* Benefits */}
          {(content as any).benefits && (
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {(content as any).benefits.map((benefit: any) => {
                const Icon = iconMap[benefit.icon] || Sun;
                return (
                  <div key={benefit.heading} className="text-center p-6 bg-barilla-cream rounded-lg">
                    <Icon className="text-primary mx-auto mb-4" size={40} />
                    <h3 className="font-semibold text-primary mb-2">{benefit.heading}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          )}

          {/* Accommodation Options */}
          <div className="mt-16">
            <h3 className="section-heading mb-8">Available Options</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {content.items?.map((item) => (
                <div key={item.name} className="card-accommodation">
                  <div className="card-header">{item.name}</div>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {item.image ? (
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-barilla-cream flex items-center justify-center">
                        <Car className="text-primary" size={64} />
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex justify-center mb-4">
                      <Sun className="text-accent" size={24} />
                    </div>
                    <p className="text-muted-foreground text-center text-sm mb-4">{item.description}</p>
                    <Link to={item.buttonLink || "/contact"} className="btn-cta block text-center text-sm">
                      {item.buttonText || "Book"}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Location Info */}
          {(content as any).locationInfo && (
            <div className="mt-16 bg-primary text-primary-foreground rounded-lg p-8 text-center">
              <MapPin className="mx-auto mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2">Easy to Find</h3>
              <p className="mb-4">
                {(content as any).locationInfo.address}<br />
                {(content as any).locationInfo.note}
              </p>
              <Link to="/contact" className="bg-accent text-accent-foreground font-semibold px-6 py-3 rounded-md inline-block hover:opacity-90 transition-opacity">
                Get Directions
              </Link>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default AirportAccommodation;
