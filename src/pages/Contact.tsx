import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useSanityContent } from "@/hooks/useSanityContent";
import { CONTACT_PAGE_QUERY } from "@/lib/sanity-queries";
import { defaultContactPage } from "@/lib/default-content";

const Contact = () => {
  const { toast } = useToast();
  const { content } = useSanityContent("contact-page", CONTACT_PAGE_QUERY, defaultContactPage);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "Thank you for contacting us. We'll get back to you soon." });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Layout>
      <PageHero title={content.title} subtitle={content.subtitle} backgroundImage={content.heroImage} />
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">{content.contactHeading}</h2>
              <p className="text-muted-foreground mb-8">{content.contactDescription}</p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-barilla-cream rounded-full p-3 shrink-0"><Phone className="text-primary" size={24} /></div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Phone</h3>
                    <a href={`tel:${content.phone?.replace(/\s/g, "")}`} className="text-muted-foreground hover:text-accent transition-colors">
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
                    <p className="text-muted-foreground whitespace-pre-line">{content.address}</p>
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

              {/* Map Placeholder */}
              <div className="mt-8">
                <div className="bg-barilla-cream rounded-lg p-8 text-center">
                  <MapPin className="text-primary mx-auto mb-2" size={32} />
                  <p className="text-sm text-muted-foreground mb-4">View on Google Maps</p>
                  <a href={content.mapLink} target="_blank" rel="noopener noreferrer" className="btn-cta inline-block text-sm">
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">{content.formHeading}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Your Name *</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" placeholder="John Smith" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" placeholder="john@example.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" placeholder="0400 000 000" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Your Message *</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none" placeholder="Tell us about your booking enquiry..." />
                </div>
                <button type="submit" className="btn-cta w-full flex items-center justify-center gap-2">
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
