import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import AccommodationHighlights from "@/components/shared/AccommodationHighlights";
import { Check } from "lucide-react";
import { BOOKING_URL } from "@/lib/booking";
import heroCaravan from "@/assets/hero-caravan.jpg";
import caravanImage from "@/assets/barillapark-powered-site.jpg";

const features = [
  "Fully powered sites",
  "Modern laundry and bathroom facilities",
  "Children's play area",
  "Sheltered BBQ area and campers kitchen with TV",
  "Broadband internet access available",
];

const CaravanParksHobart = () => {
  return (
    <Layout>
      <PageHero
        title="Caravan Parks Hobart"
        subtitle="Explore Hobart and the surrounding areas from a caravan park just 10 minutes from Hobart, Tasmania. You will find affordable, quality caravan sites close to Hobart, Richmond and the airport."
        backgroundImage={heroCaravan}
      />
      <AccommodationHighlights />

      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-5xl">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-stretch">
            <div className="md:w-1/2 flex">
              <img
                src={caravanImage}
                alt="Powered caravan sites at Barilla Holiday Park"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="md:w-1/2 flex flex-col">
              <h2 className="section-heading">Drive In to Find</h2>
              <div className="section-underline" />
              <p className="text-muted-foreground mb-6">
                Quality caravan sites in a peaceful setting with everything you need
                for a relaxed stay.
              </p>

              <ul className="space-y-3 mb-10">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-muted-foreground">
                    <Check size={20} className="text-accent mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <p className="text-muted-foreground mb-8">
                Barilla Holiday Park is family friendly with wood-fired pizza,
                Putt &amp; Play mini golf and great facilities in a natural and
                peaceful setting — and just a short drive from Hobart.
              </p>

              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta inline-block mt-auto"
              >
                View Availability and Prices
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CaravanParksHobart;
