interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  backgroundPosition?: string;
  children?: React.ReactNode;
}

const PageHero = ({ title, subtitle, backgroundImage, backgroundPosition = "bg-center", children }: PageHeroProps) => {
  return (
    <section
      className={`relative bg-cover ${backgroundPosition} min-h-[40vh] md:min-h-[35vh] flex`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to top, #0A3029 0%, rgba(10,48,41,0.7) 30%, rgba(10,48,41,0) 60%)",
        }}
      />
      <div className="relative z-10 container flex flex-col justify-end pb-8 text-left text-white w-full">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif drop-shadow-lg">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-white/90 max-w-2xl text-left">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-4">{children}</div>}
      </div>
    </section>
  );
};

export default PageHero;
