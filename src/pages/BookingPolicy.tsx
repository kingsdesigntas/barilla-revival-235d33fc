import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";

const refusalReasons = [
  "Not be the person named on the booking request",
  "Not be the person named on the credit card or not be authorised to use the card",
  "Not be able to pay for any charges",
  "May cause damage to the property of the Park or other guests",
  "May exhibit socially unacceptable behaviour",
  "Be younger than 18 years and not accompanied by a responsible person over that age",
  "Be concealing a dog or other unauthorised animal",
];

const BookingPolicy = () => {
  return (
    <Layout>
      <section className="py-16">
        <div className="container max-w-4xl">
          <h1 className="section-heading">Booking Policy</h1>
          <div className="section-underline" />

          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              We reserve the right to refuse a booking at any time from any person reasonably believed
              to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              {refusalReasons.map((reason) => (
                <li key={reason}>{reason}</li>
              ))}
            </ul>
            <p>
              We reserve the right to eject guests from the park who are deemed by management to be
              behaving in a socially unacceptable way; causing damage; disturbing other guests; using
              unacceptable language or otherwise breaking Park rules.
            </p>
            <p>No refund will be given and charges will apply for any damage caused.</p>
          </div>

          <h2 className="section-heading mt-14">Terms and Conditions</h2>
          <div className="section-underline" />

          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <h3 className="text-foreground font-semibold text-lg">Deposits and Payments</h3>
            <p>
              Online bookings – Credit cards will be charged the full amount at the time of booking. A
              confirmation of payment will be sent to the email address supplied.
            </p>
            <p>
              Phone bookings – A credit card will be taken to secure the booking. Payment will be
              deducted on the day of check in from the credit card supplied.
            </p>
            <p>
              CHECK OUT time is 10.30am. Late check outs can be arranged at an extra charge where
              available. CHECK IN time is from 2pm.
            </p>
            <p>
              Changes and Cancellations – Changes and cancellations for stays must be made more than 7
              days prior to arrival. If a cancellation is within 7 days of arrival the deposit is
              forfeited.
            </p>
            <p>
              Reception hours can be found on our{" "}
              <Link to="/contact" className="text-primary underline underline-offset-4">
                contact us page
              </Link>
              .
            </p>
            <p>
              Guests arriving outside these times must contact park reception during reception hours to
              make alternate arrangements. Fees may apply to arrivals after 9pm. Guests who fail to
              arrive on the designated day or who arrive after reception hours and have not made
              alternate arrangements will forfeit the cost of the first night.
            </p>
            <p>
              Special requests are on request basis only and are not guaranteed at the time of booking.
              Please contact the Park for confirmation.
            </p>
            <p>
              A credit card must be produced in the name of the person staying at the Park on check in.
              Any damage caused may be charged against that card. A minimum stay may apply during times
              of high occupancy, public &amp; school holidays, weekends or special events. Adult's rates
              apply to persons above 16 years. Children rates apply to guests aged 5 to 16 years. There
              is no charge for children under 5 years.
            </p>
            <p>
              With the exception of medically certified guide dogs, dogs are only permitted upon approval
              from Management.
            </p>
            <p>
              NO SMOKING in any cabin OR communal rooms – a deodorising fee will be charged to guests
              smoking inside cabins of minimum $50.
            </p>
            <p>
              You are entitled to a 10% discount up to $40 per stay if you are a member of any of the
              following clubs and present your card: RACT, RACV, RAA, RAC, RACQ, NTAA, NRMA and CMCA as
              well as Seniors Card holders. The discount also applies to rental customers from Crusin'
              Tasmania, Devil Campers, Hertz, Apollo, Maui and Britz.
            </p>
            <p className="font-semibold text-foreground">
              This discount is available for direct bookings only.
            </p>
            <p className="font-semibold text-foreground">
              Call us today Freecall:{" "}
              <a href="tel:1800465453" className="text-primary underline underline-offset-4">
                1800 465 453
              </a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BookingPolicy;
