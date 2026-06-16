import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import { Link } from "react-router-dom";
import { Flag, Trees } from "lucide-react";
import { useSanityContent } from "@/hooks/useSanityContent";
import { ACTIVITY_PAGE_QUERY } from "@/lib/sanity-queries";
import { defaultAtBarillaPage } from "@/lib/default-content";

const BbqGrillIcon = ({ size = 24, ...props }: any) => (
  <svg {...props} width={size} height={size} viewBox="0 0 294.26 383.24" fill="currentColor">
    <path d="M219.01,383.24H75.11c4.37-1.64,7.7-4.63,8.63-9.51l9.65-50.51h107.51s9.39,49.3,9.39,49.3c1.02,5.33,3.75,9.06,8.71,10.73Z" />
    <path d="M224.8,383.24h-5.79c-4.96-1.67-7.7-5.39-8.71-10.72l-9.39-49.3h-107.51s-9.65,50.51-9.65,50.51c-.93,4.88-4.26,7.87-8.63,9.51h-5.81c-4.47-2.27-9.18-6.69-8.03-12.73l20.84-109C32.23,236.71.57,186.44,0,131.01c-.07-6.85,3.76-12.31,11.05-12.75h272.2c6.82.41,11.04,5.48,11.01,12-.23,55.73-31.97,106.31-82.08,131.28l20.85,108.97c1.16,6.04-3.56,10.45-8.22,12.73ZM270.92,140.9H23.25c5.85,63.06,57.83,111.11,120.1,113.06,65.69,2.06,121.99-47.99,127.58-113.06ZM196.52,300.52l-5.81-30.35c-28.69,8.69-58.34,8.76-87.13-.05l-5.85,30.42,98.78-.02Z" />
    <path d="M86.09,96.64c-10.2-10.94-13.77-25.05-8.35-38.94,2.32-5.95,5.97-10.99,10.27-15.8,6.36-7.11,6.97-15.42.15-21.81-5.08-4.76-5.28-12.4-.49-16.96,5.31-5.06,12.5-3.6,17.33,1.53,11.65,12.38,14.29,29.32,5.68,44.34-2.5,4.37-5.95,8.29-9.14,12.24-5.11,6.33-4.65,14.42,1.26,19.78,5.13,4.66,5.33,12.51.61,17.01-5.15,4.91-12.39,3.88-17.31-1.4Z" />
    <path d="M138.11,97c-15.89-17.28-14.36-37.96.88-54.28,6.82-7.3,7.99-15.82.8-22.62-5.05-4.78-5.28-12.41-.48-16.97,5.32-5.05,12.5-3.59,17.33,1.54,11.64,12.37,14.29,29.31,5.67,44.34-2.5,4.36-5.95,8.29-9.14,12.24-5.13,6.35-4.66,14.42,1.26,19.79,4.96,4.51,5.36,12.02.96,16.64-4.72,4.97-12.39,4.65-17.29-.68Z" />
    <path d="M189.75,97c-15.89-17.27-14.36-37.98.89-54.28,6.64-7.09,7.98-15.9,1.13-22.21-5.27-4.85-5.84-12.66-.81-17.4,5.34-5.03,12.5-3.58,17.32,1.56,11.63,12.38,14.29,29.31,5.67,44.33-2.5,4.36-5.95,8.29-9.14,12.23-5.15,6.36-4.68,14.41,1.26,19.81,4.96,4.51,5.36,12.01.97,16.63-4.72,4.96-12.39,4.66-17.3-.67Z" />
  </svg>
);

const iconMap: Record<string, any> = { Flag, Trees, BbqGrillIcon, SwingIcon: null };

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
              const isSwing = activity.icon === "SwingIcon";
              const Icon = iconMap[activity.icon];
              return (
                <div key={activity.title} className="bg-[hsl(155,35%,93%)] rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col items-center justify-center text-center">
                  <div className="flex items-center justify-center mb-4" style={{ height: 36 }}>
                    {isSwing ? (
                      <img src={swingIcon.url} alt="Playground" className="h-9 w-9 object-contain" />
                    ) : (
                      Icon && <Icon className="text-primary" size={36} />
                    )}
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
