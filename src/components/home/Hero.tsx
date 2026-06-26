import { Star } from "lucide-react";
import googleLogo from "@/assets/google-logo.webp";
import { CabinIcon, CaravanIcon, CampingIcon } from "@/components/icons/AccommodationIcons";
import { useSanityContent } from "@/hooks/useSanityContent";
import { HOME_PAGE_QUERY } from "@/lib/sanity-queries";
import { defaultHomePage } from "@/lib/default-content";
import { BOOKING_URL } from "@/lib/booking";
import heroVideo from "@/assets/hero-drone.mp4.asset.json";

const Hero = () => {
  const { content } = useSanityContent("homePage", HOME_PAGE_QUERY, defaultHomePage);
  const hero = content.hero;
  const ratings = content.infoSection?.ratingsCard;
  const rating = ratings?.rating ?? 4.4;
  const reviewCount = ratings?.reviewCount ?? "360+";

  return (
    <section className="relative min-h-[80vh] overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src={heroVideo.url}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
      <div
        className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none"
        style={{ backgroundImage: "linear-gradient(to top, #0A3029 0%, rgba(10,48,41,0.7) 35%, rgba(10,48,41,0) 100%)" }}
      />
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
            <div className="grid grid-cols-3 gap-3 md:flex md:flex-wrap">
              {hero.ctaButtons?.map((btn, i) => {
                const icons = [CabinIcon, CaravanIcon, CampingIcon];
                const iconSizes = [38, 64, 47]; // sized so each renders at 36px tall
                const Icon = icons[i] || CabinIcon;
                const iconSize = iconSizes[i] || 38;
                const words = btn.label.split(" ");
                const first = words[0]?.toUpperCase() ?? "";
                const second = words.slice(1).join(" ").toUpperCase() ?? "";
                const isGreen = i < 2;
                const href = btn.href || BOOKING_URL;
                const isExternal = !btn.href;
                return (
                  <a
                    key={i}
                    href={href}
                    {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className={`flex flex-col items-center justify-center md:flex-row md:justify-start gap-1 md:gap-3 px-3 py-2 md:px-6 md:py-3 rounded-[1rem] md:rounded-md transition-all duration-200 ${
                      isGreen
                        ? "bg-success text-success-foreground hover:opacity-90"
                        : "bg-accent text-accent-foreground hover:bg-[hsl(var(--barilla-orange-hover))]"
                    }`}
                  >
                    <span className="scale-75 md:scale-100 origin-center inline-block">
                      <Icon size={iconSize} className="text-current shrink-0" />
                    </span>
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                      <span
                        className="font-['Kanit'] font-bold uppercase text-sm md:text-xl"
                        style={{ letterSpacing: "0.02em", lineHeight: 1 }}
                      >
                        {first}
                      </span>
                      <span
                        className="font-['Outfit'] uppercase text-[10px] md:text-xs hidden md:block"
                        style={{ letterSpacing: "0.2em", lineHeight: 1 }}
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
          <div className="md:col-span-5 lg:col-span-4 hidden md:block">
            <a
              href={ratings?.googleReviewsLink || "#"}
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
              <div className="flex items-center gap-2">
                <div className="text-2xl font-semibold">{rating}/5</div>
                <img src={googleLogo} alt="Google" className="w-5 h-5 object-contain" />
              </div>
              <div className="text-sm text-white/80 mt-1">From {reviewCount} Google reviews</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
