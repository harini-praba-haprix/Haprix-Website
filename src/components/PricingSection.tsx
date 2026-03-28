import { motion } from "framer-motion";
import { Check, Star, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  {
    name: "Starter Package",
    tagline: "Perfect for small businesses getting started with Zoho",
    price: "Custom",
    icon: Zap,
    features: [
      "Single Zoho app implementation",
      "Basic customization",
      "User training (up to 5 users)",
      "30-day post-go-live support",
      "Initial requirements analysis",
      "Standard dashboard setup"
    ]
  },
  {
    name: "Growth Package",
    tagline: "Ideal for growing businesses needing multiple Zoho apps",
    price: "Custom",
    icon: Star,
    popular: true,
    features: [
      "Up to 3 Zoho app integration",
      "Advanced customization",
      "Process automation setup",
      "User training (up to 15 users)",
      "90-day post-go-live support",
      "Custom reporting & analytics",
      "Data migration services"
    ]
  },
  {
    name: "Enterprise Package",
    tagline: "Comprehensive solution for large organizations",
    price: "Custom",
    icon: Shield,
    features: [
      "Complete Zoho One implementation",
      "Custom integrations & APIs",
      "Advanced workflow automation",
      "Unlimited user training",
      "6rd-month post-go-live support",
      "Dedicated account manager",
      "Quarterly performance audits",
      "White-glove data migration"
    ]
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-secondary/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Pricing & Packages</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
            Choose Your <span className="text-gradient-gold">Growth Plan</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Choose the package that best fits your business needs and budget. All plans include a free initial assessment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-8 rounded-2xl border transition-all duration-500 group ${
                pkg.popular 
                  ? "bg-card border-primary shadow-[0_0_40px_rgba(212,175,55,0.1)] scale-105 z-10" 
                  : "bg-surface-elevated border-border hover:border-primary/30"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6 flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <pkg.icon size={26} />
                </div>
                <div className="text-2xl font-bold text-gradient-gold">{pkg.price}</div>
              </div>

              <h3 className="text-xl font-heading font-bold mb-2">{pkg.name}</h3>
              <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                {pkg.tagline}
              </p>

              <ul className="space-y-4 mb-10">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check size={18} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-secondary-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={pkg.popular ? "hero" : "hero-outline"}
                className="w-full h-12"
                asChild
              >
                <a href="#contact">Get a Quote</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
