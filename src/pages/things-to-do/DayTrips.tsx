import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import { MapPin, ExternalLink, Users } from "lucide-react";
import { useSanityContent } from "@/hooks/useSanityContent";
import { DAY_TRIPS_QUERY } from "@/lib/sanity-queries";
import { defaultDayTripsPage } from "@/lib/default-content";

interface DayTrip {
  title: string;
  image: string;
  description: string;
  bestFor: string;
  stops: string[];
  mapsUrl: string;
}

const DayTrips = () => {
  const { content } = useSanityContent("day-trips-page", DAY_TRIPS_QUERY, defaultDayTripsPage);
  const trips: DayTrip[] = content.trips || [];

  return (
    <Layout>
      <PageHero title={content.title} subtitle={content.subtitle} backgroundImage={content.heroImage} />
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <h2 className="section-heading">{content.sectionHeading}</h2>
          <div className="section-underline" />
          <div className="max-w-3xl mx-auto text-center text-muted-foreground space-y-4 mt-6">
            {content.introParagraphs?.map((p: string, i: number) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {trips.map((trip) => (
              <article
                key={trip.title}
                className="bg-card rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[16/9] overflow-hidden bg-muted relative">
                  <img
                    src={trip.image}
                    alt={trip.title}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
                    }}
                  />
                  <div className="absolute top-3 left-3 right-3 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1.5 rounded-full inline-flex items-center gap-2 shadow-md w-fit max-w-[calc(100%-1.5rem)]">
                    <Users size={14} className="shrink-0" />
                    <span className="truncate">{trip.bestFor}</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-serif font-semibold text-primary mb-2">{trip.title}</h3>
                  <p className="text-muted-foreground mb-4">{trip.description}</p>

                  <div className="bg-secondary/50 rounded-md p-4 mb-4 flex-1">
                    <h4 className="font-semibold text-primary text-sm mb-2 flex items-center gap-2">
                      <MapPin size={14} className="text-accent" /> Stops Breakdown
                    </h4>
                    <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside marker:text-accent marker:font-semibold">
                      {trip.stops?.map((stop) => (
                        <li key={stop} className="leading-relaxed">
                          {stop}
                        </li>
                      ))}
                    </ol>
                  </div>

                  {trip.mapsUrl && (
                    <a
                      href={trip.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-5 py-2.5 rounded-md hover:bg-primary/90 transition-colors"
                    >
                      Open Route in Google Maps <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DayTrips;
