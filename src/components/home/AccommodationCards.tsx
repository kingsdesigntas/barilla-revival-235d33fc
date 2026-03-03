import { Link } from "react-router-dom";
import { Sun } from "lucide-react";
import { useSanityContent } from "@/hooks/useSanityContent";
import { HOME_PAGE_QUERY } from "@/lib/sanity-queries";
import { defaultHomePage } from "@/lib/default-content";

interface AccommodationCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  buttonText: string;
}

const AccommodationCard = ({ title, description, image, link, buttonText }: AccommodationCardProps) => (
  <div className="card-accommodation">
    <div className="card-header">{title}</div>
    <div className="relative aspect-[4/3] overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
    </div>
    <div className="p-6">
      <div className="flex justify-center mb-4">
        <Sun className="text-accent" size={24} />
      </div>
      <p className="text-muted-foreground text-center text-sm mb-6">{description}</p>
      <Link to={link} className="btn-cta block text-center text-sm">{buttonText}</Link>
    </div>
  </div>
);

const AccommodationCards = () => {
  const { content } = useSanityContent("homePage", HOME_PAGE_QUERY, defaultHomePage);
  const section = content.accommodationSection;

  return (
    <section className="py-16 md:py-24 bg-barilla-cream">
      <div className="container">
        <h2 className="section-heading">{section.heading}</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-4">{section.description}</p>
        <div className="section-underline" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {section.cards?.map((acc) => (
            <AccommodationCard key={acc.title} {...acc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccommodationCards;
