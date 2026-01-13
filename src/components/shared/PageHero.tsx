interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
}

const PageHero = ({ title, subtitle, backgroundImage }: PageHeroProps) => {
  return (
    <section 
      className="page-hero"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="page-hero-overlay" />
      <div className="page-hero-content container">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 drop-shadow-lg">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
