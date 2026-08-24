import { Link } from "react-router-dom";

const AccommodationBookingFooter = () => {
  return (
    <p className="text-center text-muted-foreground mt-8">
      <Link to="/contact" className="text-primary underline hover:text-primary/80">
        contact us
      </Link>{" "}
      to find out more.{" "}
      <Link to="/booking-policy" className="text-primary underline hover:text-primary/80">
        View our booking policy
      </Link>
      .
    </p>
  );
};

export default AccommodationBookingFooter;
