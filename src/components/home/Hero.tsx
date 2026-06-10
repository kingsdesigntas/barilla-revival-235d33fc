import { Star, Home, Car, Tent } from "lucide-react";
import { useSanityContent } from "@/hooks/useSanityContent";
import { HOME_PAGE_QUERY } from "@/lib/sanity-queries";
import { defaultHomePage } from "@/lib/default-content";
import { BOOKING_URL } from "@/lib/booking";

const Hero = () => {
  const { content } = useSanityContent("homePage", HOME_PAGE_QUERY, defaultHomePage);
  const hero = content.hero;
  const ratings = content.infoSection?.ratingsCard;
  const rating = ratings?.rating ?? 4.4;
  const reviewCount = ratings?.reviewCount ?? 369;

  return (
    <section
      className="relative min-h-[80vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${hero.backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
      <div className="relative z-10 container min-h-[80vh] flex flex-col justify-end pb-10 md:pb-16">
        <div className="grid md:grid-cols-12 gap-6 items-end">
          {/* Bottom-left: Heading, subheading, buttons */}
          <div className="md:col-span-7 lg:col-span-8 text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4">
              {hero.heading}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl">
              {hero.subheading}
            </p>
            <div className="flex flex-wrap gap-4">
              {hero.ctaButtons?.map((btn, i) => {
                const icons = [Home, Car, Tent];
                const Icon = icons[i] || Home;
                const words = btn.label.split(" ");
                const first = words[0]?.toUpperCase() ?? "";
                const second = words.slice(1).join(" ").toUpperCase() ?? "";
                const isGreen = i < 2;
                return (
                  <a
                    key={i}
                    href={btn.href || BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-3 px-5 py-3 rounded-md transition-all duration-200 ${
                      isGreen
                        ? "bg-success text-success-foreground hover:opacity-90"
                        : "bg-accent text-accent-foreground hover:bg-[hsl(var(--barilla-orange-hover))]"
                    }`}
                  >
                    <Icon size={28} strokeWidth={1.5} />
                    <div className="flex flex-col text-right leading-tight">
                      <span
                        className="font-['Kanit'] uppercase"
                        style={{ fontSize: "20px", letterSpacing: "0.02em" }}
                      >
                        {first}
                      </span>
                      <span
                        className="font-['Outfit'] uppercase"
                        style={{ fontSize: "12px", letterSpacing: "0.2em" }}
                      >
                        {second}
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Bottom-right: Reviews card (larger) */}
          <div className="md:col-span-5 lg:col-span-4">
            <a
              href={ratings?.tripadvisorLink || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white/10 backdrop-blur-md border border-white/20 p-6 text-white hover:bg-white/20 transition-colors"
              style={{ borderRadius: "2rem" }}
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => {
                  const fillPercent = Math.max(0, Math.min(1, rating - i)) * 100;
                  return (
                    <span key={i} className="relative inline-block" style={{ width: 22, height: 22 }}>
                      <Star size={22} className="absolute inset-0 text-accent" />
                      <span className="absolute inset-0 overflow-hidden block" style={{ width: `${fillPercent}%` }}>
                        <Star size={22} className="text-accent fill-accent" />
                      </span>
                    </span>
                  );
                })}
              </div>
              <div className="text-2xl font-semibold">{rating}/5</div>
              <div className="text-sm text-white/80 mt-1">Based on {reviewCount} reviews</div>
              <div className="text-xs text-white/70 mt-3 uppercase tracking-wide">View on Tripadvisor →</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
