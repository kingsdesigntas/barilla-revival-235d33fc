import { MapPin, Users, Award } from "lucide-react";

const highlights = [
  {
    icon: MapPin,
    title: "Prime Hobart Location",
    description: "Just 6km from Hobart Airport and 14km from Hobart's CBD.",
    bg: "bg-barilla-green",
  },
  {
    icon: Users,
    title: "Family Friendly",
    description: "Barilla Holiday Park offers affordable, inclusive, and family-friendly accommodation.",
    bg: "bg-barilla-orange",
  },
  {
    icon: Award,
    title: "4.4 Star Google Reviews Rating",
    description: "Barilla Holiday Park has a 4.4 star rating on Google Reviews from over 360 happy guests.",
    bg: "bg-barilla-red",
  },
];

const AccommodationHighlights = () => {
  return (
    <section className="bg-barilla-cream border-b border-border">
      <div className="container py-6 md:py-8">
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map(({ icon: Icon, title, description, bg }) => (
            <div key={title} className="flex items-start gap-4">
              <span className={`flex items-center justify-center w-12 h-12 rounded-full text-white shrink-0 ${bg}`}>
                <Icon size={22} />
              </span>
              <div>
                <h3 className="text-sm uppercase tracking-wider text-primary mb-1">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground leading-snug">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccommodationHighlights;
