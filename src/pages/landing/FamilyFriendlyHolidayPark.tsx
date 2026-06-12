import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import AccommodationHighlights from "@/components/shared/AccommodationHighlights";
import { Check } from "lucide-react";
import { BOOKING_URL } from "@/lib/booking";
import aerialImage from "@/assets/barillapark-aerial-1.jpg";
import miniGolfImage from "@/assets/barillapark-mini-golf.jpg";

const reasons = [
  "Spacious self-contained cabins with room for families of up to six",
  "Family powered caravan sites and camping options for every travel style",
  "Onsite Putt & Play mini golf course for family-friendly fun",
  "Kids playground where little ones can play safely",
  "BBQ areas and shared facilities perfect for relaxed family meals",
  "Convenient location near Hobart, Richmond and the airport",
  "Peaceful setting that feels like a holiday escape while staying close to attractions",
];

const FamilyFriendlyHolidayPark = () => {
  return (
    <Layout>
      <PageHero
        title="Family-Friendly Holiday Park Accommodation in Hobart"
        subtitle="Looking for relaxed, affordable family accommodation in Hobart? Barilla Holiday Park allows families to enjoy spacious cabins, caravan sites and camping options in a peaceful setting just minutes from the city."
        backgroundImage={aerialImage}
      />
      <AccommodationHighlights />

      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-stretch">
            <div className="md:w-1/2 flex">
              <img
                src={aerialImage}
                alt="Aerial view of Barilla Holiday Park"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="md:w-1/2 flex flex-col">
              <h2 className="section-heading">A Holiday Park Designed for Families</h2>
              <div className="section-underline" />
              <p className="text-muted-foreground mb-6">
                Located in Cambridge, only a short drive from Hobart and close to
                Hobart Airport, Barilla Holiday Park is designed with families in
                mind. With self-contained cabins for up to six guests, plenty of
                open space and activities for kids, it's the perfect base for
                exploring southern Tasmania together.
              </p>

              <ul className="space-y-3 mb-10">
                {reasons.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-muted-foreground">
                    <Check size={20} className="text-accent mt-0.5 shrink-0" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>

              <p className="text-muted-foreground mb-8">
                Whether you're planning a weekend escape, a school holiday trip,
                or a longer Tasmanian adventure, Barilla Holiday Park makes family
                travel simple and memorable.
              </p>

              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta inline-block self-start mt-auto"
              >
                Check Availability
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FamilyFriendlyHolidayPark;
