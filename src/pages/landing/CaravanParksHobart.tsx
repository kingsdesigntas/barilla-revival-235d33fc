import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import AccommodationHighlights from "@/components/shared/AccommodationHighlights";
import PromoBlock from "@/components/shared/PromoBlock";
import AccommodationBookingFooter from "@/components/shared/AccommodationBookingFooter";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Check } from "lucide-react";
import { BOOKING_URL } from "@/lib/booking";
import heroCaravan from "@/assets/hero-caravan.jpg";
import droneShot from "@/assets/barillapark-aerial-1.jpg";
import caravanImage from "@/assets/barillapark-powered-site.jpg";
import caravanSiteImage from "@/assets/barillapark-caravan-1.jpg";
import caravanHomeImage from "@/assets/barillapark-caravan-home.jpg";

const galleryImages = [
  { src: droneShot, alt: "Aerial drone view of Barilla Holiday Park caravan sites" },
  { src: caravanImage, alt: "Powered caravan sites at Barilla Holiday Park" },
  { src: caravanSiteImage, alt: "Drive-through caravan sites at Barilla Holiday Park" },
  { src: caravanHomeImage, alt: "Caravan accommodation at Barilla Holiday Park" },
];

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
        <div className="container">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-stretch">
            <div className="md:w-1/2 flex">
              <Carousel opts={{ align: "start", loop: true }} className="w-full h-full rounded-lg overflow-hidden">
                <CarouselContent className="h-full">
                  {galleryImages.map((image, i) => (
                    <CarouselItem key={i} className="h-full">
                      <div className="relative w-full h-full min-h-[300px] md:min-h-full overflow-hidden">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-3 right-auto" />
                <CarouselNext className="right-3 left-auto" />
              </Carousel>
            </div>
            <div className="md:w-1/2 flex flex-col">
              <h2 className="section-heading">Your Hobart Caravan Park</h2>
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
                className="btn-cta inline-block self-start mt-auto"
              >
                View Availability and Prices
              </a>
            </div>
          </div>
          <AccommodationBookingFooter />
        </div>
      </section>

      <PromoBlock />
    </Layout>
  );
};

export default CaravanParksHobart;
