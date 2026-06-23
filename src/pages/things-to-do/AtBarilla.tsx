import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import { Link } from "react-router-dom";
import { Flag } from "lucide-react";
import { useSanityContent } from "@/hooks/useSanityContent";
import { ACTIVITY_PAGE_QUERY } from "@/lib/sanity-queries";
import { defaultAtBarillaPage } from "@/lib/default-content";

const BbqGrillIcon = ({ size = 24, ...props }: any) => (
  <svg {...props} width={size} height={size} viewBox="0 0 294.23 383.22" fill="currentColor">
    <path d="M200.89,323.23l-107.43-.02-9.88,51.11c-1.19,6.18-7.25,9.75-13.05,8.72-5.15-.92-10.44-6.25-9.24-12.53l20.83-109C32.23,236.72.57,186.45,0,131.02c-.07-6.85,3.76-12.31,11.04-12.75h272.21c6.35.39,10.95,5.09,10.97,11.29.13,55.99-31.73,106.91-82.05,131.99l20.83,108.96c1.2,6.28-4.09,11.61-9.24,12.53-5.76,1.04-11.88-2.54-13.06-8.72l-9.82-51.1ZM270.92,140.91H23.25c5.85,63.06,57.83,111.1,120.1,113.06,65.69,2.06,121.99-47.99,127.58-113.06ZM196.52,300.53l-5.81-30.35c-28.69,8.69-58.34,8.76-87.13-.05l-5.85,30.42,98.78-.02Z"/>
    <path d="M98.49,0c3.32,1.73,6,4.06,8.56,7.13,8.61,10.32,11.09,23.55,6.28,36.22-2.56,6.74-6.89,12.11-11.48,17.47-5.43,6.34-5.12,14.74.92,20.2,5.34,4.82,5.29,12.99.24,17.38-5.45,4.74-12.45,3.1-17.1-1.94-9.93-10.75-13.62-24.85-8.18-38.76,2.33-5.94,5.97-11,10.27-15.8,6.19-6.91,7-14.91.53-21.41-3.42-3.43-5.17-7.09-3.97-12.18.85-3.57,4-6.66,8.12-8.33h5.8Z"/>
    <path d="M150.14,0l3.05,1.78c17.69,13.97,18.98,37.99,2.9,55.84-3.29,3.66-6.25,7.68-6.5,12.81-.21,4.24,2.23,8.16,5.17,10.98,5.06,4.85,4.8,12.72-.13,17.01s-12.22,3.35-16.71-1.6c-15.56-17.17-14.26-37.71,1.07-54.09,6.65-7.1,8-15.32,1.18-22.22-3.39-3.43-5.17-7.11-3.96-12.18.85-3.58,4-6.66,7.94-8.32h5.99Z"/>
    <path d="M201.79,0c3.32,1.74,5.99,4.07,8.55,7.14,8.6,10.31,11.09,23.53,6.28,36.21-2.55,6.73-6.89,12.1-11.48,17.46-5.46,6.38-5.16,14.73.92,20.23,5.15,4.67,5.35,12.49.61,17.01-5.02,4.8-12.47,3.91-17.12-1.23-6.19-6.84-10.64-14.72-11.01-24.22-.44-11.44,4.38-21.66,12.09-29.88,6.63-7.07,7.98-15.37,1.15-22.23-3.38-3.39-5.15-7.1-3.94-12.27.81-3.47,4.06-6.57,7.95-8.23h5.99Z"/>
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
          <div className="text-muted-foreground max-w-2xl mb-4 text-left whitespace-pre-line">{content.sectionDescription}</div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {content.activities?.map((activity) => {
              const Icon = iconMap[activity.icon];
              return (
                <div key={activity.title} className="bg-[hsl(155,35%,93%)] rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col items-center justify-center text-center">
                  <div className="flex items-center justify-center mb-4" style={{ height: 36 }}>
                    {Icon && <Icon className="text-primary" size={36} />}
                  </div>
                  <h3 className="font-semibold text-primary mb-2 text-center">{activity.title}</h3>
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
