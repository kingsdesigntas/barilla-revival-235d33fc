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

const PlaygroundIcon = ({ size = 24, ...props }: any) => (
  <svg {...props} width={size} height={size} viewBox="0 0 399.97 408.8" fill="currentColor">
    <path d="M389.62,408.8h-86.64c-6.15-2.56-9.68-7.3-9.68-14.54V88.92s-26.5-.1-26.5-.1l-.3,14.5c-.35,16.57-10.93,30.75-26.53,36.52v137.96c18.16,6.7,29.02,24.81,26.16,43.53-2.88,18.85-18.56,33.23-38.27,34.14H91.47c-19.47-1.26-34.79-15.51-37.61-34.11s8.01-36.95,26.17-43.52v-138c-15.71-5.64-26.39-20.09-26.59-36.83l-.17-14.13-26.56-.02v305.41c0,7.21-3.6,11.87-9.72,14.53h-7.05C3.63,406.41,0,401.42,0,394.16L.02,13.27C.02,5.44,6.6-.08,13.52.02s13.18,5.86,13.18,13.56l.04,48.63h266.57s.01-48.64.01-48.64C293.32,5.81,299.36,0,306.59,0s13.34,5.78,13.35,13.57v48.64s53.31,0,53.31,0V13.57c.13-7.69,5.91-13.46,13.22-13.56,6.9-.09,13.49,5.42,13.49,13.25l.02,380.89c0,7.26-3.63,12.25-10.35,14.64ZM106.65,101.93v-13.07s-26.6,0-26.6,0l.03,13.4c.02,7.55,6.23,13.23,13.3,13.2s13.28-5.61,13.28-13.52ZM213.33,222.13v-82.29c-15.74-5.69-26.17-20.09-26.63-36.82l-.05-14.15-53.17-.02-.21,13.95c-.35,16.84-10.71,31.23-26.62,37.06v82.3s106.67-.03,106.67-.03ZM239.96,101.93v-13.07s-26.63,0-26.63,0l.04,13.39c.02,7.59,6.24,13.23,13.33,13.21s13.26-5.63,13.26-13.52ZM373.25,88.86h-53.31v26.68h53.31v-26.68ZM373.25,142.18h-53.31v26.66h53.31v-26.66ZM373.25,195.53h-53.31v26.63h53.31v-26.63ZM213.32,248.85h-106.67v26.61h106.67v-26.61ZM373.25,248.85h-53.31v26.61h53.31v-26.61ZM225.87,302.17H93.89c-8.01,0-13.91,6-13.78,13.52s5.82,13.14,13.79,13.13l132.98-.05c7.85,0,13.35-6.98,13.03-13.76-.34-7.25-5.88-12.85-14.03-12.85ZM373.25,302.17h-53.31v26.64h53.31v-26.64ZM373.25,355.46h-53.31v26.66h53.31v-26.66Z"/>
  </svg>
);

const iconMap: Record<string, any> = { Flag, Trees, BbqGrillIcon, PlaygroundIcon };

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
              const Icon = iconMap[activity.icon];
              return (
                <div key={activity.title} className="bg-[hsl(155,35%,93%)] rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col items-center justify-center text-center">
                  <div className="flex items-center justify-center mb-4" style={{ height: 36 }}>
                    {Icon && <Icon className="text-primary" size={36} />}
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
