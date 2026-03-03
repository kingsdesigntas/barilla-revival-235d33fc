import { useSanityContent } from "@/hooks/useSanityContent";
import { HOME_PAGE_QUERY } from "@/lib/sanity-queries";
import { defaultHomePage } from "@/lib/default-content";

const Introduction = () => {
  const { content } = useSanityContent("homePage", HOME_PAGE_QUERY, defaultHomePage);
  const intro = content.introduction;

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container max-w-4xl">
        <h2 className="section-heading text-primary">{intro.heading}</h2>
        <p className="text-center text-accent font-medium mb-8">
          {intro.subheading}
        </p>
        <div className="section-underline" />
        <div className="prose prose-lg max-w-none text-center text-foreground/80 space-y-6">
          {intro.paragraphs?.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Introduction;
