import { useSanityContent } from "@/hooks/useSanityContent";
import { HOME_PAGE_QUERY } from "@/lib/sanity-queries";
import { defaultHomePage } from "@/lib/default-content";
import hobartImage from "@/assets/hobart-mount-wellington.jpg";

const Introduction = () => {
  const { content } = useSanityContent("homePage", HOME_PAGE_QUERY, defaultHomePage);
  const intro = content.introduction;

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="order-1">
            <img
              src={hobartImage}
              alt="Hobart skyline with Mount Wellington in the background"
              width={1024}
              height={1024}
              loading="lazy"
              className="w-full h-auto object-cover"
              style={{ borderRadius: "2rem" }}
            />
          </div>
          <div className="order-2">
            <h2 className="section-heading">{intro.heading}</h2>
            <p className="text-left text-primary font-medium mb-8">{intro.subheading}</p>
            <div className="section-underline" />
            <div className="prose prose-lg max-w-none text-left text-foreground/80 space-y-6">
              {intro.paragraphs?.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
