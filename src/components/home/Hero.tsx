import { Link } from "react-router-dom";
import { useSanityContent } from "@/hooks/useSanityContent";
import { HOME_PAGE_QUERY } from "@/lib/sanity-queries";
import { defaultHomePage } from "@/lib/default-content";

const Hero = () => {
  const { content } = useSanityContent("homePage", HOME_PAGE_QUERY, defaultHomePage);
  const hero = content.hero;

  return (
    <section
      className="relative min-h-[70vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${hero.backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 drop-shadow-lg">
          {hero.heading}
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          {hero.subheading}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {hero.ctaButtons?.map((btn, i) => (
            <Link
              key={i}
              to={btn.href}
              className={btn.variant === "success"
                ? "bg-success text-success-foreground font-semibold px-6 py-3 rounded-md hover:opacity-90 transition-all duration-200 shadow-md hover:shadow-lg"
                : "btn-cta"}
            >
              {btn.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
