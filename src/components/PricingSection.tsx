import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$999",
    period: "one-time",
    desc: "Perfect for small businesses getting started with Zoho.",
    features: [
      "Zoho CRM setup & configuration",
      "Up to 5 custom fields",
      "Basic workflow automation",
      "2 hours of training",
      "30-day email support",
    ],
    featured: false,
  },
  {
    name: "Growth",
    price: "$2,999",
    period: "one-time",
    desc: "For growing teams that need full customization.",
    features: [
      "Everything in Starter",
      "Unlimited custom fields & modules",
      "Advanced automation & blueprints",
      "Multi-app integration",
      "5 hours of training",
      "90-day priority support",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "quote",
    desc: "Tailored solutions for complex business needs.",
    features: [
      "Everything in Growth",
      "Custom Zoho Creator apps",
      "Data migration & cleanup",
      "Dedicated account manager",
      "Unlimited training sessions",
      "12-month premium support",
    ],
    featured: false,
  },
];

const PricingSection = () => (
  <section id="pricing" className="py-24">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-semibold tracking-widest uppercase">Pricing</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
          Transparent <span className="text-gradient-gold">Pricing</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
          Choose the package that fits your business. All plans include a free discovery call.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`relative p-8 rounded-xl border transition-all duration-300 ${
              p.featured
                ? "bg-card border-primary glow-gold scale-[1.02]"
                : "bg-card border-border hover:border-primary/30"
            }`}
          >
            {p.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold bg-primary text-primary-foreground px-4 py-1 rounded-full">
                Most Popular
              </span>
            )}
            <h3 className="text-lg font-heading font-semibold">{p.name}</h3>
            <div className="mt-4 mb-2">
              <span className="text-4xl font-heading font-bold text-primary">{p.price}</span>
              {p.period !== "quote" && (
                <span className="text-sm text-muted-foreground ml-2">/ {p.period}</span>
              )}
            </div>
            <p className="text-sm text-muted-foreground mb-6">{p.desc}</p>
            <ul className="space-y-3 mb-8">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  <span className="text-secondary-foreground">{f}</span>
                </li>
              ))}
            </ul>
            <Button
              variant={p.featured ? "hero" : "hero-outline"}
              className="w-full"
              asChild
            >
              <a href="#contact">Get Started</a>
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
