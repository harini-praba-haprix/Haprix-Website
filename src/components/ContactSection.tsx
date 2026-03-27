import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-surface-elevated">
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
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Input placeholder="Your Name" required className="bg-card border-border" />
              <Input type="email" placeholder="Email Address" required className="bg-card border-border" />
            </div>
            <Input placeholder="Company Name" className="bg-card border-border" />
            <Textarea placeholder="Tell us about your project..." rows={5} required className="bg-card border-border resize-none" />
            <Button variant="hero" size="lg" type="submit" disabled={loading} className="w-full sm:w-auto">
              {loading ? "Sending..." : "Send Message"}
              <Send size={16} />
            </Button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-heading font-semibold mb-4">Get in Touch</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Ready to transform your business with Zoho? Book a free 30-minute discovery call
                and let's discuss your needs.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Mail, text: "hello@zohopro.com" },
                { icon: Phone, text: "+1 (555) 123-4567" },
                { icon: MapPin, text: "Available Worldwide — Remote First" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon size={18} className="text-primary" />
                  </div>
                  <span className="text-sm text-secondary-foreground">{item.text}</span>
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
