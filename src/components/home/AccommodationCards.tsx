import { Link } from "react-router-dom";
import { useSanityContent } from "@/hooks/useSanityContent";
import { HOME_PAGE_QUERY } from "@/lib/sanity-queries";
import { defaultHomePage } from "@/lib/default-content";
import { iconForAccommodationTitle } from "@/components/icons/AccommodationIcons";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface AccommodationCardProps {
  title: string;
  description: string;
  image: string;
  images?: string[];
  link: string;
  buttonText: string;
}

const AccommodationCard = ({ title, description, image, images, link, buttonText }: AccommodationCardProps) => {
  const Icon = iconForAccommodationTitle(title);
  const t = title.toLowerCase();
  const iconWidth = t.includes("caravan") ? 64 : t.includes("camp") ? 47 : 38;
  const slides = images && images.length > 0 ? images : [image];

  return (
    <div className="card-accommodation flex flex-col">
      <div className="card-header">{title}</div>
      <div className="relative aspect-[4/3] overflow-hidden">
        <Carousel opts={{ align: "start", loop: true }} className="w-full h-full">
          <CarouselContent className="h-full">
            {slides.map((src, i) => (
              <CarouselItem key={`${src}-${i}`} className="h-full">
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <img
                    src={src}
                    alt={`${title} ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {slides.length > 1 && (
            <>
              <CarouselPrevious className="left-3 right-auto" />
              <CarouselNext className="right-3 left-auto" />
            </>
          )}
        </Carousel>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex justify-center items-center mb-4" style={{ height: 36 }}>
          <Icon className="text-accent" size={iconWidth} />
        </div>
        <p className="text-muted-foreground text-sm mb-6">{description}</p>
        <Link to={link} className="btn-cta block text-center text-sm mt-auto">{buttonText}</Link>
      </div>
    </div>
  );
};

const AccommodationCards = () => {
  const { content } = useSanityContent("homePage", HOME_PAGE_QUERY, defaultHomePage);
  const section = content.accommodationSection;

  return (
    <section className="py-16 md:py-24 bg-barilla-cream">
      <div className="container">
        <h2 className="section-heading">{section.heading}</h2>
        <div className="section-underline" />
        <p className="text-left text-muted-foreground max-w-2xl mb-4">{section.description}</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {section.cards?.map((acc) => (
            <AccommodationCard key={acc.title} {...acc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccommodationCards;
