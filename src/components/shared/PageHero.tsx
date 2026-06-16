interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
}

const PageHero = ({ title, subtitle, backgroundImage }: PageHeroProps) => {
  return (
    <section
      className="relative bg-cover bg-center min-h-[50vh] md:min-h-[60vh] flex"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to top, #0A3029 0%, rgba(10,48,41,0.7) 35%, rgba(10,48,41,0) 100%)",
        }}
      />
      <div className="relative z-10 container flex flex-col justify-end pb-10 md:pb-16 text-left text-white w-full">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4 drop-shadow-lg">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-white/90 max-w-2xl text-left">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
