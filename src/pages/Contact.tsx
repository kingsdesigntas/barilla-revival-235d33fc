import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import { Phone, Mail, MapPin, Clock, Map } from "lucide-react";
import { useSanityContent } from "@/hooks/useSanityContent";
import { CONTACT_PAGE_QUERY } from "@/lib/sanity-queries";
import { defaultContactPage } from "@/lib/default-content";

const Contact = () => {
  const { content } = useSanityContent("contact-page", CONTACT_PAGE_QUERY, defaultContactPage);

  return (
    <Layout>
      <PageHero title={content.title} subtitle={content.subtitle} />
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-serif text-primary mb-6">{content.contactHeading}</h2>
              <p className="text-muted-foreground mb-8">{content.contactDescription}</p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-barilla-cream rounded-full p-3 shrink-0"><Phone className="text-primary" size={24} /></div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Phone</h3>
                    <a href={`tel:${content.phone?.replace(/\s/g, "")}`} className="text-accent hover:underline transition-colors">
                      Freecall: {content.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-barilla-cream rounded-full p-3 shrink-0"><Mail className="text-primary" size={24} /></div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Email</h3>
                    <a href={`mailto:${content.email}`} className="text-muted-foreground hover:text-accent transition-colors">{content.email}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-barilla-cream rounded-full p-3 shrink-0"><MapPin className="text-primary" size={24} /></div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Address</h3>
                    <p className="text-muted-foreground whitespace-pre-line mb-2">{content.address}</p>
                    <a
                      href={content.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
                    >
                      <Map size={16} /> Get Directions on Google Maps
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-barilla-cream rounded-full p-3 shrink-0"><Clock className="text-primary" size={24} /></div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Reception Hours</h3>
                    <p className="text-muted-foreground whitespace-pre-line">{content.receptionHours}</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Google Map */}
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5025.0839847890775!2d147.44218217613377!3d-42.832685871152954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaa6de1b4ca5ca4cf%3A0xbc4f89695e39121d!2sBarilla%20Holiday%20Park!5e1!3m2!1sen!2sau!4v1782262159347!5m2!1sen!2sau"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
