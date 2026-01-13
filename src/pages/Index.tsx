import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Introduction from "@/components/home/Introduction";
import AccommodationCards from "@/components/home/AccommodationCards";
import InfoCards from "@/components/home/InfoCards";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Introduction />
      <AccommodationCards />
      <InfoCards />
    </Layout>
  );
};

export default Index;
