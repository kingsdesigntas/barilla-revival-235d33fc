import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Introduction from "@/components/home/Introduction";
import ParkFacilities from "@/components/home/ParkFacilities";
import AccommodationCards from "@/components/home/AccommodationCards";
import ThingsToDoBlock from "@/components/home/ThingsToDoBlock";
import InfoCards from "@/components/home/InfoCards";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Introduction />
      <ParkFacilities />
      <AccommodationCards />
      <ThingsToDoBlock />
      <InfoCards />
    </Layout>
  );
};

export default Index;
