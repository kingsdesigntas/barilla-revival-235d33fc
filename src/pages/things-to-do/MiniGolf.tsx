import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import { Link } from "react-router-dom";
import { Clock, DollarSign, Users, Star } from "lucide-react";
import { useSanityContent } from "@/hooks/useSanityContent";
import { ACTIVITY_PAGE_QUERY } from "@/lib/sanity-queries";
import { defaultMiniGolfPage } from "@/lib/default-content";
import gallery1 from "@/assets/mini-golf-gallery-1.jpg";
import gallery2 from "@/assets/mini-golf-gallery-2.jpg";
import gallery3 from "@/assets/mini-golf-gallery-3.jpg";
import gallery4 from "@/assets/mini-golf-gallery-4.jpg";
import gallery5 from "@/assets/mini-golf-gallery-5.jpg";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const iconMap: Record<string, any> = { Clock, DollarSign, Users, Star };

const galleryImages = [
  { src: gallery1, alt: "Aerial view of the Putt & Play mini golf course" },
  { src: gallery2, alt: "Entrance to Barilla Holiday Park Putt & Play mini golf" },
  { src: gallery3, alt: "Mini golf fairway lined with cypress trees and rocks" },
  { src: gallery4, alt: "Hole 11 of the Barilla mini golf course" },
  { src: gallery5, alt: "Landscaped mini golf hole with rules sign" },
];

const MiniGolf = () => {
  const { content } = useSanityContent("mini-golf-page", ACTIVITY_PAGE_QUERY, defaultMiniGolfPage, { slug: "mini-golf" });

  return (
    <Layout>
      <PageHero title={content.title} subtitle={content.subtitle} backgroundImage={content.heroImage} />
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-4xl">
          <h2 className="section-heading">{content.sectionHeading}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-4">{content.sectionDescription}</p>
          <div className="section-underline" />

          {/* Main Image */}
          {(content as any).featureImage && (
            <div className="mt-12 mb-12">
              <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg">
                <img src={(content as any).featureImage} alt={content.title} className="w-full h-full object-cover" />
              </div>
            </div>
          )}

          {/* Info Cards */}
          {content.infoCards && (
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {content.infoCards.map((card) => {
                const Icon = iconMap[card.icon] || Clock;
                return (
                  <div key={card.heading} className="bg-barilla-cream rounded-lg p-6">
                    <Icon className="text-primary mx-auto mb-3" size={36} />
                    <h3 className="font-semibold text-primary mb-2">{card.heading}</h3>
                    <p className="text-sm text-muted-foreground whitespace-pre-line">{card.content}</p>
                  </div>
                );
              })}
            </div>
          )}

          {/* Body Text */}
          {(content as any).bodyText && (
            <div className="prose prose-lg max-w-none text-muted-foreground mb-12">
              {(content as any).bodyText.map((p: string, i: number) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          )}

          {/* Rating */}
          <div className="mb-12">
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className={i < 4 ? "fill-accent text-accent" : "text-accent"} />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">Rated one of the best mini golf courses in Tasmania</p>
          </div>

          {/* CTA */}
          {content.ctaButton && (
            <div className="text-left">
              <Link to={content.ctaButton.href || "/contact"} className="btn-cta inline-block">
                {content.ctaButton.label}
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-20 bg-barilla-cream">
        <div className="container">
          <h2 className="section-heading">Mini Golf Gallery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-4">
            Take a peek at our 18-hole landscaped course at Barilla Holiday Park.
          </p>
          <div className="section-underline" />
          <Carousel opts={{ align: "start", loop: true }} className="mt-12">
            <CarouselContent className="-ml-4">
              {galleryImages.map((img) => (
                <CarouselItem key={img.src} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3">
                  <div className="overflow-hidden rounded-lg shadow-md aspect-[4/3] group">
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>
    </Layout>
  );
};

export default MiniGolf;
