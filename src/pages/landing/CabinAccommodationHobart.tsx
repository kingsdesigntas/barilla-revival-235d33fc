import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import AccommodationHighlights from "@/components/shared/AccommodationHighlights";
import { Check } from "lucide-react";
import { BOOKING_URL } from "@/lib/booking";
import cabinImage from "@/assets/barillapark-cabin.jpg";
import studioCabinImage from "@/assets/barillapark-studio-cabin.jpg";

const features = [
  "A range of configurations and sizes to fit your budget",
  "Cabins to suit business travellers or families up to 6 people",
  "Cabins feature open plan design and are fully self-contained",
];

const CabinAccommodationHobart = () => {
  return (
    <Layout>
      <PageHero
        title="Cabin Accommodation Hobart"
        subtitle="Find great value self catered accommodation just 10 minutes drive from Hobart. Featuring clean, comfortable, affordable cabins centrally located between Hobart, Richmond and the airport."
        backgroundImage={cabinImage}
      />
      <AccommodationHighlights />

      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-5xl">
          <h2 className="section-heading">Cabin Accommodation Features</h2>
          <div className="section-underline" />
          <p className="text-muted-foreground mb-6">
            Our cabins offer comfort and convenience for any traveller — whether
            you're here on business, with the family, or exploring Tasmania.
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
            Cabins are located on family friendly Barilla Holiday Park, which has
            a restaurant, Putt &amp; Play mini golf and great facilities.
          </p>

          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta inline-block"
          >
            View Cabins and Pricing
          </a>
        </div>
      </section>

      <section className="pb-16 md:pb-24 bg-background">
        <div className="container max-w-5xl grid md:grid-cols-2 gap-6">
          <img src={cabinImage} alt="Ensuite cabin accommodation at Barilla Holiday Park" className="w-full h-72 object-cover rounded-lg" />
          <img src={studioCabinImage} alt="Studio cabin accommodation at Barilla Holiday Park" className="w-full h-72 object-cover rounded-lg" />
        </div>
      </section>
    </Layout>
  );
};

export default CabinAccommodationHobart;
