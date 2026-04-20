import { useMemo, useState } from "react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import { MapPin, Phone, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSanityContent } from "@/hooks/useSanityContent";
import { TOURIST_ATTRACTIONS_QUERY } from "@/lib/sanity-queries";
import { defaultTouristAttractionsPage } from "@/lib/default-content";

interface Attraction {
  name: string;
  image: string;
  description: string;
  address: string;
  phone?: string;
  website: string;
  categories: string[];
}

const TouristAttractions = () => {
  const { content } = useSanityContent(
    "tourist-attractions-page",
    TOURIST_ATTRACTIONS_QUERY,
    defaultTouristAttractionsPage,
  );

  const attractions: Attraction[] = content.attractions || [];
  const categories: string[] = content.categories || [];
  const [active, setActive] = useState<string>("All");

  const filtered = useMemo(
    () => (active === "All" ? attractions : attractions.filter((a) => a.categories?.includes(active))),
    [active, attractions],
  );

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

          {/* Filters */}
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            <Button
              variant={active === "All" ? "default" : "outline"}
              size="sm"
              onClick={() => setActive("All")}
            >
              All ({attractions.length})
            </Button>
            {categories.map((cat) => {
              const count = attractions.filter((a) => a.categories?.includes(cat)).length;
              return (
                <Button
                  key={cat}
                  variant={active === cat ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActive(cat)}
                >
                  {cat} ({count})
                </Button>
              );
            })}
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {filtered.map((a) => (
              <article
                key={a.name}
                className="bg-card rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={a.image}
                    alt={a.name}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
                    }}
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-semibold text-primary text-lg mb-2">{a.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{a.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2 text-muted-foreground">
                      <MapPin size={14} className="shrink-0 mt-0.5 text-accent" />
                      <span>{a.address}</span>
                    </div>
                    {a.phone && (
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Phone size={14} className="shrink-0 text-accent" />
                        <a href={`tel:${a.phone.replace(/\s/g, "")}`} className="hover:text-primary">
                          {a.phone}
                        </a>
                      </div>
                    )}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-1">
                    {a.categories?.map((c) => (
                      <span key={c} className="text-xs bg-barilla-cream text-primary px-2 py-1 rounded-full">
                        {c}
                      </span>
                    ))}
                  </div>
                  {a.website && (
                    <a
                      href={a.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1 text-accent font-medium text-sm hover:underline"
                    >
                      Visit website <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground mt-10">No attractions found in this category.</p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default TouristAttractions;
