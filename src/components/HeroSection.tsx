import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-8">
          <Cpu size={14} className="text-primary" />
          <span className="text-xs font-medium text-muted-foreground">Intelligent Automation & AI Solutions</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
          Build Smarter Systems with{" "}
          <span className="text-gradient-gold">HaPrix</span>
        </h1>

        <p className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
          We design intelligent automation systems, custom business applications, and AI-powered solutions
          that streamline operations, reduce manual effort, and help organizations grow faster.
        </p>

        <div className="flex flex-wrap gap-4">
          <Button variant="hero" size="lg" asChild>
            <a href="#contact">
              Book a Free Consultation
              <ArrowRight size={18} />
            </a>
          </Button>
          <Button variant="hero-outline" size="lg" asChild>
            <a href="#services">Explore Services</a>
          </Button>
        </div>

        <div className="flex flex-wrap gap-12 mt-16 pt-8 border-t border-border">
          {[
            { value: "Automation", label: "Intelligent Workflows" },
            { value: "Custom", label: "Tailored Solutions" },
            { value: "Scalable", label: "Future-Ready Tech" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-heading font-bold text-primary">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
