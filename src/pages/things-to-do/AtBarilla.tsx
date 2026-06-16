import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import { Link } from "react-router-dom";
import { Flag, Trees } from "lucide-react";
import { useSanityContent } from "@/hooks/useSanityContent";
import { ACTIVITY_PAGE_QUERY } from "@/lib/sanity-queries";
import { defaultAtBarillaPage } from "@/lib/default-content";

const BbqGrillIcon = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 14c0 3.31 2.69 6 6 6s6-2.69 6-6" />
    <path d="M4 14h16" />
    <path d="M8 20l-2 3" />
    <path d="M16 20l2 3" />
    <path d="M9 8c0-1.66 1.34-3 3-3s3 1.34 3 3" />
    <path d="M12 5V3" />
    <path d="M9 8c-1 .5-1.5 1.5-1.5 2.5" />
    <path d="M15 8c1 .5 1.5 1.5 1.5 2.5" />
  </svg>
);

const SlideIcon = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 20V10" />
    <path d="M6 10h12l-4 10H6z" />
    <path d="M6 10l-2-2" />
    <path d="M8 8l-2 2" />
    <path d="M4 20h16" />
  </svg>
);

const iconMap: Record<string, any> = { Flag, Trees, BbqGrillIcon, SlideIcon };

const AtBarilla = () => {
  const { content } = useSanityContent("at-barilla-page", ACTIVITY_PAGE_QUERY, defaultAtBarillaPage, { slug: "at-barilla" });

  return (
    <Layout>
      <PageHero title={content.title} subtitle={content.subtitle} backgroundImage={content.heroImage} />
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <h2 className="section-heading">{content.sectionHeading}</h2>
          <div className="section-underline" />
          <p className="text-muted-foreground max-w-2xl mb-4 text-left">{content.sectionDescription}</p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {content.activities?.map((activity) => {
              const Icon = iconMap[activity.icon] || Sun;
              return (
                <div key={activity.title} className="bg-[hsl(155,35%,93%)] rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col items-center justify-center text-center">
                  <div className="flex items-center justify-center mb-4" style={{ height: 36 }}>
                    <Icon className="text-primary" size={36} />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{activity.title}</h3>
                  <p className="text-sm text-muted-foreground">{activity.description}</p>
                </div>
              );
            })}
          </div>

          {/* Mini Golf Feature */}
          {content.featureSection && (
            <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
              {content.featureSection.image && (
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                  <img src={content.featureSection.image} alt={content.featureSection.heading} className="w-full h-full object-cover" />
                </div>
              )}
              <div>
                <h3 className="text-2xl font-serif text-primary mb-4">{content.featureSection.heading}</h3>
                <p className="text-muted-foreground mb-4">{content.featureSection.description}</p>
                {(content.featureSection as any).secondaryDescription && (
                  <p className="text-muted-foreground mb-6">{(content.featureSection as any).secondaryDescription}</p>
                )}
                <Link to={content.featureSection.buttonLink || "#"} className="btn-cta inline-block">
                  {content.featureSection.buttonText}
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default AtBarilla;
