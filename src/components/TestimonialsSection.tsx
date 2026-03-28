import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    text: "HaPrix transformed our chaotic sales process into a streamlined CRM system. Our conversion rates increased by 40% within 3 months.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Operations Manager, GrowthCo",
    text: "The automation workflows they built saved us 20 hours per week. Now our team focuses on growth instead of manual tasks.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, ServicePro",
    text: "Professional, knowledgeable, and always available for support. The best Zoho implementation partner we could ask for.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-background overflow-hidden">
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Success Stories</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
            What Our <span className="text-gradient-gold">Clients Say</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Don't just take our word for it — hear from businesses we've helped transform.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border relative group hover:glow-gold transition-all duration-300"
            >
              <div className="absolute top-8 left-8 text-primary opacity-20 pointer-events-none">
                <Quote size={40} />
              </div>
              
              <div className="flex gap-1 mb-6 relative">
                {[...Array(t.rating)].map((_, index) => (
                  <Star key={index} size={16} className="fill-primary text-primary" />
                ))}
              </div>

              <p className="text-secondary-foreground text-lg italic mb-8 relative z-10 leading-relaxed font-heading">
                "{t.text}"
              </p>

              <div className="flex items-center gap-4 border-t border-border/50 pt-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground leading-none mb-1">{t.name}</h4>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
