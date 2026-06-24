import { Star } from "lucide-react";
import googleLogo from "@/assets/google-logo.webp.asset.json";

type Review = {
  name: string;
  rating: number;
  text: string;
};

const reviews: Review[] = [
  {
    name: "Pete Eddo",
    rating: 5,
    text: "It was a very tidy park with some good facilities. The park was quiet and well laid out. Thanks.",
  },
  {
    name: "Peter — TheNomad.family",
    rating: 5,
    text: "We spent two nights there on a powered site. The showers have a 7-minute timer, which is plenty of time for a hot shower. The children's playground was lovely. The location is not far from several wineries, and the drive into town isn't too long.",
  },
  {
    name: "Jacob",
    rating: 5,
    text: "Barilla Holiday Park exceeded my expectations with its beautiful grounds and well-maintained facilities. The staff was incredibly welcoming and helpful throughout my stay. Perfect location for a relaxing getaway with plenty of activities nearby.",
  },
  {
    name: "Alison Todd",
    rating: 5,
    text: "We had a campervan. We loved how it had the hedges and groomed gardens. The shower, toilet, kitchen and laundry are clean. Very quiet and the staff are very friendly and helpful. Also on a bus route to Hobart.",
  },
  {
    name: "B G",
    rating: 5,
    text: "We had a 3 night stay at Barilla Holiday Park. The location is close to places of interest including good cafes, distilleries, wineries and the airport. Rooms were clean and perfect for a family of 4. Would definitely visit again on our next visit to Tasmania.",
  },
  {
    name: "Colin M",
    rating: 5,
    text: "This park was incredible, the staff are excellent, the amenities are fantastic and it's like a home away from home. Close to Hobart and the airport, public transport into town, far enough out to get that middle-of-nowhere feel a stone's throw from the city.",
  },
  {
    name: "Jordan Singh",
    rating: 5,
    text: "Amazing spot to camp or hire a hut. Great, well-kept facilities and super friendly staff. Lots of wildlife around still but no pestering creatures! Free showers and flushing toilets all spotless.",
  },
  {
    name: "Dean Jays",
    rating: 5,
    text: "Nice & clean, quiet & a quick drive to shops, Richmond etc. The in-house restaurant & pizza is a great idea — delicious, thanks!",
  },
  {
    name: "Ange Rainbow",
    rating: 5,
    text: "The staff here are amazing and welcoming. Beautiful relaxing setting after a long day travelling. Kids had a ball watching wallabies and birds near the creek. Clean hot showers and a fantastic pizza onsite — definitely a great place to stay.",
  },
  {
    name: "Christine Piers",
    rating: 5,
    text: "Stayed in the 2 bedroom cabins. Clean and comfortable. Plenty of utensils available. Available on site: laundry, restaurant, tourist information. Staff were brilliant and friendly.",
  },
];

const ReviewCard = ({ review }: { review: Review }) => (
  <article className="shrink-0 w-[340px] md:w-[380px] bg-background border border-border rounded-lg p-6 shadow-sm flex flex-col mx-3">
    <div className="flex items-center gap-1 mb-3" aria-label={`${review.rating} out of 5 stars`}>
      {Array.from({ length: review.rating }).map((_, i) => (
        <Star key={i} size={18} className="text-accent fill-accent" />
      ))}
    </div>
    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
      “{review.text}”
    </p>
    <p className="mt-4 font-semibold text-primary text-sm">{review.name}</p>
  </article>
);

const ReviewSlider = () => {
  // Duplicate the list to create a seamless infinite loop
  const loop = [...reviews, ...reviews];

  const rating = 4.4;
  const reviewCount = "360+";
  const googleReviewsLink = "https://www.google.com/travel/search?q=barilla%20holiday%20park&g2lb=4965990%2C72471280%2C72560029%2C72573224%2C72647020%2C72686036%2C72803964%2C72882230%2C73064764%2C73249150%2C121529349&hl=en-AU&gl=au&cs=1&ssta=1&ts=CAEaRwopEicyJTB4YWE2ZGUxYjRjYTVjYTRjZjoweGJjNGY4OTY5NWUzOTEyMWQSGhIUCgcI6g8QBxgGEgcI6g8QBxgHGAEyAhAA&qs=CAEyFENnc0luYVRrOFpXdDRxZThBUkFCOAJCCQkdEjleaYlPvEIJCR0SOV5piU-8&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwi4-IW2nJqVAxUAAAAAHQAAAAAQAw";

  return (
    <section className="py-16 bg-secondary border-t border-border overflow-hidden">
      <div className="container mb-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div>
            <h2 className="section-heading">What Our Guests Are Saying</h2>
            <div className="section-underline" />
            <p className="text-muted-foreground max-w-2xl">
              Real feedback from happy guests who have stayed at Barilla Holiday Park.
            </p>
          </div>
          <a
            href={googleReviewsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-background border border-border rounded-xl p-4 md:p-5 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => {
                const fillPercent = Math.max(0, Math.min(1, rating - i)) * 100;
                return (
                  <span key={i} className="relative inline-block" style={{ width: 22, height: 22 }}>
                    <Star size={22} className="absolute inset-0 text-accent" />
                    <span className="absolute inset-0 overflow-hidden block" style={{ width: `${fillPercent}%` }}>
                      <Star size={22} className="text-accent fill-accent" />
                    </span>
                  </span>
                );
              })}
            </div>
            <div className="text-xl font-semibold text-foreground">{rating}/5</div>
            <div className="text-sm text-muted-foreground mt-1">From {reviewCount} Google reviews</div>
          </a>
        </div>
      </div>

      <div
        className="relative w-full"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
        }}
      >
        <div className="flex w-max animate-review-marquee hover:[animation-play-state:paused]">
          {loop.map((review, idx) => (
            <ReviewCard key={`${review.name}-${idx}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSlider;
