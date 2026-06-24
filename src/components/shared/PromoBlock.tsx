import { Phone } from "lucide-react";

const PromoBlock = () => {
  return (
    <section className="py-12 md:py-16 bg-primary text-primary-foreground">
      <div className="container text-center">
        <p className="text-sm md:text-base leading-relaxed max-w-4xl mx-auto">
          You are entitled to a <strong>10% discount up to $40 per stay</strong> at Barilla Holiday Park
          if you are a member of any of the following clubs and present your card: RACT, RACV, RAA, RAC,
          RACQ, NTAA, NRMA and CMCA as well as Seniors Card holders. The discount also applies to rental
          customers from Crusin’ Tasmania, Devil Campers, Hertz, Apollo, Maui and Britz. This discount is
          available for direct bookings only.{" "}
          <a
            href="tel:1800465453"
            className="inline-flex items-center gap-1.5 text-accent font-semibold hover:underline"
          >
            <Phone size={16} />
            Call us today Freecall: 1800 465 453
          </a>
        </p>
      </div>
    </section>
  );
};

export default PromoBlock;
