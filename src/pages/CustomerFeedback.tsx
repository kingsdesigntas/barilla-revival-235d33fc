import { Star } from "lucide-react";
import Layout from "@/components/layout/Layout";
import googleLogo from "@/assets/google-logo.webp";
import {
  reviews,
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
  GOOGLE_REVIEWS_LINK,
} from "@/components/shared/ReviewSlider";

const CustomerFeedback = () => {
  return (
    <Layout>
      <section className="py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <div className="max-w-3xl">
              <h1 className="section-heading">
                Barilla has happy and caring staff to help you plan your adventures around Tasmania.
              </h1>
              <div className="section-underline" />
              <h2 className="text-lg md:text-xl text-muted-foreground">
                Please see the feedback from our recent customers
              </h2>
            </div>

            <a
              href={GOOGLE_REVIEWS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 bg-background border border-border rounded-xl p-4 md:p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => {
                  const fillPercent = Math.max(0, Math.min(1, GOOGLE_RATING - i)) * 100;
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
              <div className="flex items-center gap-2">
                <div className="text-xl font-semibold text-foreground">{GOOGLE_RATING}/5</div>
                <img src={googleLogo} alt="Google" className="w-5 h-5 object-contain" />
              </div>
              <div className="text-sm text-muted-foreground mt-1">From {GOOGLE_REVIEW_COUNT} Google reviews</div>
            </a>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <article
                key={review.name}
                className="relative bg-background border border-border rounded-lg p-6 shadow-sm flex flex-col"
              >
                <img
                  src={googleLogo}
                  alt="Google"
                  className="absolute top-4 right-4 w-5 h-5 object-contain"
                />
                <div className="flex items-center gap-1 mb-3" aria-label={`${review.rating} out of 5 stars`}>
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={18} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">“{review.text}”</p>
                <p className="mt-4 font-semibold text-primary text-sm">{review.name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CustomerFeedback;
