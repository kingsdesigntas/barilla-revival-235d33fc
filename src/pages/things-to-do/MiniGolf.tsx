import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import { Link } from "react-router-dom";
import { Clock, DollarSign, Users, Star } from "lucide-react";
import { useSanityContent } from "@/hooks/useSanityContent";
import { ACTIVITY_PAGE_QUERY } from "@/lib/sanity-queries";
import { defaultMiniGolfPage } from "@/lib/default-content";

const iconMap: Record<string, any> = { Clock, DollarSign, Users, Star };

const MiniGolf = () => {
  const { content } = useSanityContent("mini-golf-page", ACTIVITY_PAGE_QUERY, defaultMiniGolfPage, { slug: "mini-golf" });

  return (
    <Layout>
      <PageHero title={content.title} subtitle={content.subtitle} backgroundImage={content.heroImage} />
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-4xl">
          <h2 className="section-heading">{content.sectionHeading}</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-4">{content.sectionDescription}</p>
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
                  <div key={card.heading} className="bg-barilla-cream rounded-lg p-6 text-center">
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
            <div className="prose prose-lg max-w-none text-center text-muted-foreground mb-12">
              {(content as any).bodyText.map((p: string, i: number) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          )}

          {/* Rating */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className={i < 4 ? "fill-accent text-accent" : "text-accent"} />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">Rated one of the best mini golf courses in Tasmania</p>
          </div>

          {/* CTA */}
          {content.ctaButton && (
            <div className="text-center">
              <Link to={content.ctaButton.href || "/contact"} className="btn-cta inline-block">
                {content.ctaButton.label}
              </Link>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default MiniGolf;
