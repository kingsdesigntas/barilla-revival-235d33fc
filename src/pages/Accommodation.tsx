import Layout from "@/components/layout/Layout";
import AccommodationCards from "@/components/home/AccommodationCards";

const Accommodation = () => {
  return (
    <Layout>
      <section className="pt-12 md:pt-16 bg-background">
        <div className="container">
          <h1 className="section-heading text-center">
            Accommodation at Cambridge, Tasmania
          </h1>
          <div className="section-underline mx-auto" />
          <p className="text-muted-foreground text-center max-w-3xl mx-auto">
            Barilla Holiday Park is a family holiday park, with lots of things to see
            and do. Barilla is a family friendly caravan park with accommodation for
            everyone.
          </p>
        </div>
      </section>
      <AccommodationCards />
    </Layout>
  );
};

export default Accommodation;
