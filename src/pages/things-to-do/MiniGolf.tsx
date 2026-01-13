import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import { Link } from "react-router-dom";
import { Clock, DollarSign, Users, Star } from "lucide-react";
import miniGolfImage from "@/assets/mini-golf.jpg";
import heroImage from "@/assets/hero-cabin.jpg";

const MiniGolf = () => {
  return (
    <Layout>
      <PageHero 
        title="Putt & Play Mini Golf"
        subtitle="18 holes of family fun in a beautiful garden setting"
        backgroundImage={heroImage}
      />
      
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-4xl">
          <h2 className="section-heading">Mini Golf at Barilla</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-4">
            Challenge yourself on our beautifully landscaped 18-hole mini golf course. 
            Fun for players of all ages and abilities!
          </p>
          <div className="section-underline" />

          {/* Main Image */}
          <div className="mt-12 mb-12">
            <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg">
              <img 
                src={miniGolfImage} 
                alt="Putt & Play Mini Golf Course"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-barilla-cream rounded-lg p-6 text-center">
              <Clock className="text-primary mx-auto mb-3" size={36} />
              <h3 className="font-semibold text-primary mb-2">Opening Hours</h3>
              <p className="text-sm text-muted-foreground">
                Daily: 9am - 5pm<br />
                (Weather permitting)
              </p>
            </div>
            <div className="bg-barilla-cream rounded-lg p-6 text-center">
              <DollarSign className="text-primary mx-auto mb-3" size={36} />
              <h3 className="font-semibold text-primary mb-2">Pricing</h3>
              <p className="text-sm text-muted-foreground">
                Adults: $12<br />
                Children (5-15): $8<br />
                Family (2+2): $35
              </p>
            </div>
            <div className="bg-barilla-cream rounded-lg p-6 text-center">
              <Users className="text-primary mx-auto mb-3" size={36} />
              <h3 className="font-semibold text-primary mb-2">Open to All</h3>
              <p className="text-sm text-muted-foreground">
                Park guests & day visitors welcome!
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="prose prose-lg max-w-none text-center text-muted-foreground mb-12">
            <p>
              Putt and Play Minigolf is a challenging and beautifully laid out 18-hole 
              Miniature Golf Course in a picturesque setting. Our course features creative 
              obstacles, water features, and beautifully maintained synthetic grass greens.
            </p>
            <p>
              Whether you're a serious golfer or just looking for some family fun, our 
              mini golf course offers entertainment for everyone. It's the perfect activity 
              for rainy days or sunny afternoons alike.
            </p>
          </div>

          {/* Rating */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={24} 
                  className={i < 4 ? "fill-accent text-accent" : "text-accent"} 
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Rated one of the best mini golf courses in Tasmania
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link to="/contact" className="btn-cta inline-block">
              Book Your Game
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MiniGolf;
