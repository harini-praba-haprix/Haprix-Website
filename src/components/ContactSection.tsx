import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {

  return (
    <section id="contact" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Contact</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
            Let's <span className="text-gradient-gold">Talk</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-sm">
            Have questions about our services or want to discuss how HaPrix can help streamline your business? Reach out to us.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full h-[600px] rounded-2xl overflow-hidden border border-border bg-card shadow-2xl hover:shadow-primary/5 transition-shadow duration-500"
          >
            <iframe
              aria-label='Contact Us'
              frameBorder="0"
              style={{ height: '100%', width: '100%', border: 'none' }}
              src='https://forms.zohopublic.in/haprixtechnologiesprivatelimi1/form/Contactwithfeedback/formperma/xJ8UE-0ilYLsJ2VblpawjVFeDaUOgbLerc3j8IlQzww'
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-heading font-semibold mb-4">Get in Touch</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Ready to transform your business with intelligent automation? Book a free consultation
                and let's discuss your needs.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Phone, text: "+91 7358662199" },
                { icon: Mail, text: "harini@haprixai.com" },
                { icon: MapPin, text: "No.159/160, Viji Homes, Urappakkam, Chennai - 603210" },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon size={18} className="text-primary" />
                  </div>
                  <span className="text-sm text-secondary-foreground mt-2">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
