import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import { Clock, DollarSign, Users, Phone, Mail } from "lucide-react";
import { useSanityContent } from "@/hooks/useSanityContent";
import { ACTIVITY_PAGE_QUERY } from "@/lib/sanity-queries";
import { defaultMiniGolfPage } from "@/lib/default-content";
import gallery1 from "@/assets/mini-golf-gallery-1.jpg";
import gallery2 from "@/assets/mini-golf-gallery-2.jpg";
import gallery3 from "@/assets/mini-golf-gallery-3.jpg";
import gallery5 from "@/assets/mini-golf-gallery-5.jpg";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const iconMap: Record<string, any> = { Clock, DollarSign, Users };

const topSliderImages = [
  { src: gallery2, alt: "Entrance to Barilla Holiday Park Putt & Play with shop and landscaped rocks" },
  { src: gallery3, alt: "Mini golf fairway lined with cypress trees and rocks" },
  { src: gallery5, alt: "Landscaped mini golf hole with rules sign" },
];

const MiniGolf = () => {
  const { content } = useSanityContent("mini-golf-page", ACTIVITY_PAGE_QUERY, defaultMiniGolfPage, { slug: "mini-golf" });

  return (
    <Layout>
      <PageHero title={content.title} subtitle={content.subtitle} backgroundImage={content.heroImage} />
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <h2 className="section-heading">{content.sectionHeading}</h2>
          <p className="text-muted-foreground max-w-2xl mb-4 text-left">{content.sectionDescription}</p>
          <div className="section-underline" />

          {/* Top Slider */}
          <div className="mt-12 mb-12">
            <Carousel opts={{ align: "start", loop: true }}>
              <CarouselContent>
                {topSliderImages.map((img) => (
                  <CarouselItem key={img.src}>
                    <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg">
                      <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>

          {/* Info Cards */}
          {content.infoCards && (
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {content.infoCards.map((card) => {
                const Icon = iconMap[card.icon] || Clock;
                return (
                  <div key={card.heading} className="bg-barilla-cream rounded-lg p-6 text-center flex flex-col items-center">
                    <Icon className="text-primary mb-3" size={36} />
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
        </div>
      </section>

      {/* Prices & Contact */}
      <section className="py-16 md:py-20 bg-barilla-cream">
        <div className="container">
          <h2 className="section-heading">Mini Golf Prices</h2>
          <div className="section-underline" />

          <div className="grid md:grid-cols-2 gap-10 mt-12 max-w-5xl">
            <div className="bg-background rounded-lg p-8 shadow-sm">
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex justify-between border-b border-border pb-3">
                  <span className="font-semibold text-foreground">Adults</span>
                  <span>$18 — members $16</span>
                </li>
                <li className="flex justify-between border-b border-border pb-3">
                  <span className="font-semibold text-foreground">Children (up to 16yrs)</span>
                  <span>$12 — members $10</span>
                </li>
                <li className="flex justify-between border-b border-border pb-3">
                  <span className="font-semibold text-foreground">Concession</span>
                  <span>$15 — members $12</span>
                </li>
                <li className="flex justify-between border-b border-border pb-3">
                  <span className="font-semibold text-foreground">Family (2 Adults + 2 Children)</span>
                  <span>$45 — members $40</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-semibold text-foreground">Extra Child</span>
                  <span>$10 — members $8</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-muted-foreground mb-6">
                For more information about our Putt &amp; Play Mini Golf in Tasmania, check out the{" "}
                <a
                  href="http://www.puttandplay.com.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold underline hover:text-primary/80"
                >
                  Putt &amp; Play website
                </a>
                .
              </p>
              <p className="text-muted-foreground mb-6">Or get in touch with us:</p>
              <div className="space-y-3">
                <a href="tel:0362484447" className="flex items-center gap-3 text-foreground hover:text-primary">
                  <Phone size={20} className="text-primary" />
                  <span>0362 484 447</span>
                </a>
                <a href="mailto:stay@barilla.com.au" className="flex items-center gap-3 text-foreground hover:text-primary">
                  <Mail size={20} className="text-primary" />
                  <span>stay@barilla.com.au</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family Bonding Section with course image */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="overflow-hidden rounded-lg shadow-lg aspect-[4/3]">
              <img
                src={gallery1}
                alt="Aerial view of the Barilla Putt & Play mini golf course"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="section-heading">A Relaxed Family Experience</h2>
              <div className="section-underline" />
              <p className="text-muted-foreground mt-6 leading-relaxed">
                Our mini golf course isn't just a source of entertainment, it also offers a chance for children to gently
                learn new skills and understand the basics of the game. Every hole presents a different challenge in a
                non-competitive and fun-filled atmosphere. A day spent at Barilla Holiday Park's Putt &amp; Play promises
                relaxed enjoyment and calm family bonding amidst the tranquil surroundings of the Holiday Park.
              </p>
            </div>
          </div>
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
