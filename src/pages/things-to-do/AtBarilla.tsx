import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import { Link } from "react-router-dom";
import { Gamepad2, Bike, Trees, Users, Dog, Sun } from "lucide-react";
import heroImage from "@/assets/hero-cabin.jpg";
import miniGolfImage from "@/assets/mini-golf.jpg";

const activities = [
  {
    icon: Gamepad2,
    title: "Putt & Play Mini Golf",
    description: "Our 18-hole mini golf course is fun for the whole family. Challenge your friends and family!"
  },
  {
    icon: Bike,
    title: "Bike Paths",
    description: "Explore the area on two wheels with easy access to local bike paths and trails."
  },
  {
    icon: Trees,
    title: "Nature Walks",
    description: "Enjoy peaceful walks through our gardens and the surrounding natural bushland."
  },
  {
    icon: Users,
    title: "BBQ Areas",
    description: "Gather the family for a classic Aussie BBQ at our communal cooking facilities."
  },
  {
    icon: Dog,
    title: "Pet Friendly",
    description: "We welcome well-behaved pets in designated areas of the park."
  },
  {
    icon: Sun,
    title: "Playground",
    description: "The kids will love our playground - a safe space for them to run and play."
  }
];

const AtBarilla = () => {
  return (
    <Layout>
      <PageHero 
        title="Things to Do at Barilla"
        subtitle="Fun activities and facilities right here at the park"
        backgroundImage={heroImage}
      />
      
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <h2 className="section-heading">Activities at the Park</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-4">
            There's never a dull moment at Barilla Holiday Park. 
            We've designed our park to provide fun for all ages.
          </p>
          <div className="section-underline" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {activities.map((activity) => (
              <div key={activity.title} className="bg-card rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <activity.icon className="text-primary mx-auto mb-4" size={48} />
                <h3 className="font-semibold text-primary mb-2">{activity.title}</h3>
                <p className="text-sm text-muted-foreground">{activity.description}</p>
              </div>
            ))}
          </div>

          {/* Mini Golf Feature */}
          <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
              <img 
                src={miniGolfImage} 
                alt="Putt & Play Mini Golf"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                Putt & Play Mini Golf
              </h3>
              <p className="text-muted-foreground mb-4">
                Our 18-hole Putt and Play Mini Golf course is one of the highlights of 
                Barilla Holiday Park. Set in a beautifully landscaped garden, it's 
                challenging and fun for players of all ages and skill levels.
              </p>
              <p className="text-muted-foreground mb-6">
                Open to both park guests and day visitors, it's the perfect way to 
                spend an afternoon with family and friends.
              </p>
              <Link to="/things-to-do/mini-golf" className="btn-cta inline-block">
                Learn More About Mini Golf
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AtBarilla;
