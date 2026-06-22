import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import AccommodationHighlights from "@/components/shared/AccommodationHighlights";
import { Link } from "react-router-dom";
import { Bed, Users, Wifi, Tv, UtensilsCrossed, Car, Sun, Check } from "lucide-react";
import { useSanityContent } from "@/hooks/useSanityContent";
import { ACCOMMODATION_PAGE_QUERY } from "@/lib/sanity-queries";
import { defaultCabinPage } from "@/lib/default-content";
import { BOOKING_URL } from "@/lib/booking";

const iconMap: Record<string, any> = { Bed, Users, Wifi, Tv, UtensilsCrossed, Car, Sun };

const CabinAccommodation = () => {
  const { content } = useSanityContent("cabin-page", ACCOMMODATION_PAGE_QUERY, defaultCabinPage, { slug: "cabins" });
  const shared = (content as any).sharedFeatures as { icon: string; label: string }[] | undefined;
  const sharedHeading = (content as any).sharedFeaturesHeading || "Included in Every Cabin";
  const sharedDescription = (content as any).sharedFeaturesDescription;

  return (
    <Layout>
      <PageHero title={content.title} subtitle={content.subtitle} backgroundImage={content.heroImage} />
      <AccommodationHighlights />

      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="section-heading text-left">{content.sectionHeading}</h2>
              <div className="section-underline mx-0" />
              <p className="text-muted-foreground mt-6">{content.sectionDescription}</p>
            </div>
            {shared && shared.length > 0 && (
              <div className="bg-barilla-cream rounded-lg p-8 md:p-10">
                <h3 className="section-heading mb-3">{sharedHeading}</h3>
                {sharedDescription && (
                  <p className="text-muted-foreground mb-6">{sharedDescription}</p>
                )}
                <div className="grid sm:grid-cols-2 gap-4">
                  {shared.map((f) => {
                    const Icon = iconMap[f.icon] || Check;
                    return (
                      <div key={f.label} className="flex items-center gap-3">
                        <Icon className="text-primary shrink-0" size={24} />
                        <span className="text-sm font-medium">{f.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Cabin type tiles */}
      <section className="pb-16 md:pb-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.items?.map((cabin: any) => (
              <div key={cabin.name} className="card-accommodation flex flex-col bg-barilla-cream">
                <div className="card-header">{cabin.name}</div>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={cabin.image} alt={cabin.name} className="w-full h-full object-cover" />
                  {cabin.tagline && (
                    <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full shadow">
                      {cabin.tagline}
                    </span>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  {cabin.sleeps && (
                    <div className="flex items-center gap-2 mb-4 text-primary">
                      <Users size={18} />
                      <span className="text-sm font-medium">{cabin.sleeps}</span>
                    </div>
                  )}
                  <p className="text-muted-foreground text-sm mb-5 text-center">{cabin.description}</p>
                  {cabin.features && (
                    <ul className="space-y-2 mb-6">
                      {cabin.features.map((feature: string) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check size={16} className="text-accent mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-cta block text-center text-sm mt-auto">
                    {cabin.buttonText || "Book Now"}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CabinAccommodation;
