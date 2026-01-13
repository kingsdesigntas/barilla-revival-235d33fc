import { Link } from "react-router-dom";
import cabinImage from "@/assets/cabin-accommodation.jpg";
import caravanImage from "@/assets/caravan-site.jpg";
import campingImage from "@/assets/camping-grounds.jpg";
import { Sun } from "lucide-react";

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
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>
    <div className="p-6">
      <div className="flex justify-center mb-4">
        <Sun className="text-accent" size={24} />
      </div>
      <p className="text-muted-foreground text-center text-sm mb-6">
        {description}
      </p>
      <Link 
        to={link}
        className="btn-cta block text-center text-sm"
      >
        {buttonText}
      </Link>
    </div>
  </div>
);

const AccommodationCards = () => {
  const accommodations = [
    {
      title: "Cabin Accommodation",
      description: "Our cabins feature open plan design and are fully self-contained. We have accommodation options for up to 8 people.",
      image: cabinImage,
      link: "/accommodation/cabins",
      buttonText: "View All Cabins"
    },
    {
      title: "Caravan Accommodation",
      description: "All of our caravan sites are spacious with sheltered and friendly surroundings. A perfect site for your Caravan or Motorhome!",
      image: caravanImage,
      link: "/accommodation/caravans",
      buttonText: "View All Sites"
    },
    {
      title: "Camping Grounds",
      description: "Barilla Holiday Park offers sheltered and friendly camping grounds with lots of things to do for all the family.",
      image: campingImage,
      link: "/accommodation/camping",
      buttonText: "View All Sites"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-barilla-cream">
      <div className="container">
        <h2 className="section-heading">Our Accommodation</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-4">
          Experience the best of family-friendly accommodation at our Hobart caravan park, Barilla. 
          We've ensured the serenity of the natural landscape meets the conveniences of modern amenities.
        </p>
        <div className="section-underline" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {accommodations.map((acc) => (
            <AccommodationCard key={acc.title} {...acc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccommodationCards;
