import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-cabin.jpg";

const Hero = () => {
  return (
    <section 
      className="relative min-h-[70vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 drop-shadow-lg">
          Barilla Holiday Park Tasmania
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Your caravan park makes your perfect holiday base
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            to="/accommodation/cabins" 
            className="btn-cta"
          >
            Cabin Accommodation
          </Link>
          <Link 
            to="/accommodation/caravans" 
            className="btn-cta"
          >
            Caravan Accommodation
          </Link>
          <Link 
            to="/accommodation/camping" 
            className="bg-success text-success-foreground font-semibold px-6 py-3 rounded-md hover:opacity-90 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Camping Ground
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
