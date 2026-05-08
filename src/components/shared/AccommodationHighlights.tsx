import { MapPin, Users, Award } from "lucide-react";

const highlights = [
  {
    icon: MapPin,
    title: "Prime Hobart Location",
    description: "Just 6km from Hobart Airport and 14km from Hobart's CBD.",
  },
  {
    icon: Users,
    title: "Family Friendly",
    description: "Barilla Holiday Park offers affordable, inclusive, and family-friendly accommodation.",
  },
  {
    icon: Award,
    title: "4 Star Tripadvisor Rating",
    description: "Barilla Holiday Park has a 4 star rating and a certificate of excellence.",
  },
];

const AccommodationHighlights = () => {
  return (
    <section className="bg-barilla-cream border-b border-border">
      <div className="container py-10 md:py-14">
        <div className="grid md:grid-cols-3 gap-8 md:gap-6">
          {highlights.map(({ icon: Icon, title, description }) => (
            <div key={title} className="text-center px-4">
              <div className="flex justify-center mb-4">
                <span className="flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground">
                  <Icon size={26} />
                </span>
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-2">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccommodationHighlights;
