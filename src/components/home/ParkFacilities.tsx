import { Wifi, ShowerHead, Flame, Baby, Tv } from "lucide-react";

const GasBottle = ({ size = 24, className }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M10 2h4" />
    <path d="M9 2v4" />
    <path d="M15 2v4" />
    <rect x="6" y="6" width="12" height="14" rx="2" />
  </svg>
);
import aerial from "@/assets/barillapark-aerial-1.jpg";
import reception from "@/assets/barillapark-reception.jpg";
import camping from "@/assets/barillapark-camping-2.jpg";

const facilities = [
  { icon: ShowerHead, label: "Laundry and bathroom facilities" },
  { icon: Baby, label: "Children's play area" },
  { icon: Flame, label: "Sheltered BBQ area" },
  { icon: Tv, label: "Campers kitchen with TV" },
  { icon: Wifi, label: "Free Wi-Fi" },
  { icon: GasBottle, label: "Gas refills" },
];

const ParkFacilities = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Image collage */}
          <div className="grid grid-cols-2 grid-rows-[2fr_1fr] gap-4 order-1 lg:order-2 h-full">
            <img
              src={aerial}
              alt="Aerial view of Barilla Holiday Park"
              className="rounded-lg w-full h-full object-cover col-span-2"
              loading="lazy"
            />
            <img
              src={reception}
              alt="Barilla Holiday Park reception building"
              className="rounded-lg w-full h-full object-cover"
              loading="lazy"
            />
            <img
              src={camping}
              alt="Camping area at Barilla Holiday Park"
              className="rounded-lg w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Copy */}
          <div className="order-2 lg:order-1">
            <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-3">
              About the Park
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-accent mb-6">
              Everything you need for a relaxed Tasmanian getaway
            </h2>
            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                Set on landscaped grounds in Cambridge — just 15 minutes from Hobart's CBD and minutes
                from the airport — Barilla Holiday Park has been welcoming travellers, families and
                workers for decades. Our park blends bushland surrounds with well-kept facilities so
                you can unwind from the moment you arrive.
              </p>
              <p>
                Whether you're booking a self-contained cabin, pulling in with a caravan, or pitching
                a tent under the gum trees, you'll have access to clean amenities, a friendly camp
                kitchen, and a team that knows Tassie inside out.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
              {facilities.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-barilla-cream text-primary shrink-0">
                    <Icon size={20} />
                  </span>
                  <span className="text-sm font-medium text-foreground">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParkFacilities;
