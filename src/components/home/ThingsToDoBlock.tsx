import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import miniGolf from "@/assets/barillapark-mini-golf.jpg";
import attractions from "@/assets/barillapark-aerial-2.jpg";
import dayTrips from "@/assets/barillapark-aerial-mini-golf.jpg";
import atBarilla from "@/assets/barillapark-camping-1.jpg";

const items = [
  {
    title: "At Barilla",
    description: "On-site fun including playground, mini golf and BBQ areas for the whole family.",
    image: atBarilla,
    link: "/things-to-do/at-barilla",
  },
  {
    title: "Mini Golf",
    description: "Our 18-hole mini golf course is perfect for a friendly afternoon competition.",
    image: miniGolf,
    link: "/things-to-do/mini-golf",
  },
  {
    title: "Tourist Attractions",
    description: "MONA, historic Richmond, Mt Wellington and more — all within easy reach.",
    image: attractions,
    link: "/things-to-do/attractions",
  },
  {
    title: "Day Trips",
    description: "Tasman Peninsula, Bruny Island, Wineglass Bay and other unforgettable trips.",
    image: dayTrips,
    link: "/things-to-do/day-trips",
  },
];

const ThingsToDoBlock = () => {
  return (
    <section className="py-16 md:py-24 bg-barilla-cream">
      <div className="container">
        <p className="text-left text-accent font-semibold uppercase tracking-wider text-sm mb-3">
          Explore Tasmania
        </p>
        <h2 className="section-heading">Things to Do</h2>
        <p className="text-left text-muted-foreground max-w-2xl mb-4">
          From on-park activities to iconic Tasmanian destinations, there's plenty to keep you busy
          during your stay at Barilla.
        </p>
        <div className="section-underline" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {items.map((item) => (
            <Link
              key={item.title}
              to={item.link}
              className="group relative block rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <h3 className="text-xl font-serif font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-white/80 mb-3 line-clamp-2">{item.description}</p>
                <span className="inline-flex items-center gap-1 text-accent text-sm font-semibold">
                  Discover more
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThingsToDoBlock;
