import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import AccommodationHighlights from "@/components/shared/AccommodationHighlights";
import PromoBlock from "@/components/shared/PromoBlock";
import { Check } from "lucide-react";
import { BOOKING_URL } from "@/lib/booking";
import aerialImage from "@/assets/barillapark-aerial-1.jpg";


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
                alt="Aerial view of Barilla Holiday Park, a family-friendly holiday park near Hobart"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="md:w-1/2 flex flex-col">
              <h2 className="section-heading">A Holiday Park Designed for Families</h2>
              <div className="section-underline" />
              <div className="space-y-5 text-muted-foreground mb-8">
                <p>
                  Located in Cambridge, only a short drive from Hobart and close to
                  Hobart Airport, Barilla Holiday Park is designed with families in
                  mind. With self-contained cabins for up to six guests, plenty of
                  open space and activities for kids, it's the perfect base for
                  exploring southern Tasmania together.
                </p>
                <p>
                  Whether you're travelling with young children, teenagers, or
                  extended family, you'll find accommodation options that make your
                  stay comfortable and convenient. Our self-contained cabins provide
                  everything you need for a relaxing holiday, including kitchen
                  facilities, comfortable bedding and space to unwind after a day of
                  adventure.
                </p>
                <p>
                  But what really makes Barilla stand out as a family-friendly holiday
                  park in Hobart is what's right outside your door. Kids can burn off
                  energy at the playground or challenge the family to a round on the
                  onsite Putt &amp; Play mini golf course, a fun 19-hole course suitable
                  for all ages. With activities on site and Hobart's attractions just a
                  short drive away, every day brings something new to explore.
                </p>
                <p>
                  Whether you're planning a weekend escape, a school holiday trip,
                  or a longer Tasmanian adventure, Barilla Holiday Park makes family
                  travel simple and memorable.
                </p>
              </div>

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

      <section className="py-16 md:py-24 bg-barilla-cream">
        <div className="container max-w-4xl">
          <h2 className="section-heading">Why Families Choose Barilla Holiday Park</h2>
          <div className="section-underline" />
          <p className="text-muted-foreground mb-8">
            Families love staying at Barilla Holiday Park because everything is
            designed to make travelling with kids easy and enjoyable.
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
            From cosy cabins to family camping adventures, Barilla Holiday Park is a
            welcoming place where families can relax, explore and make lasting
            memories together. Check availability today and find the perfect family
            accommodation in Hobart for your next holiday.
          </p>

          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta inline-block"
          >
            View Cabins and Pricing
          </a>
          <AccommodationBookingFooter />
        </div>
      </section>
      <PromoBlock />
    </Layout>

  );
};

export default FamilyFriendlyHolidayPark;
