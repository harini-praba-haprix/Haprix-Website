import { motion } from "framer-motion";
import { Check, Cog, BarChart3, Link2, Award } from "lucide-react";
import { Card3D } from "@/components/AnimationEffects";

const reasons = [
  "Zoho CRM Expertise",
  "Process Automation",
  "Custom Integrations",
  "Data Analytics",
  "Scalable Solutions",
];

const pillars = [
  {
    icon: Cog,
    title: "Architectural Integrity",
    desc: "We don't just 'set up' Zoho. We architect the underlying business logic to ensure your systems are robust and engineered for high-performance.",
  },
  {
    icon: BarChart3,
    title: "Strategic Intelligence",
    desc: "Our decade of experience allows us to look beyond software. We provide the strategic insight needed to optimize your entire business model.",
  },
  {
    icon: Link2,
    title: "Future-Proof Engineering",
    desc: "Our ecosystems are built with the modularity and foresight required to adapt to future market shifts and technological advancements.",
  },
  {
    icon: Award,
    title: "Security-First Mentality",
    desc: "In an era of data vulnerability, we prioritize enterprise-grade security protocols across every layer of your digital infrastructure.",
  },
];

const WhyHaPrixSection = () => (
  <section id="why-haprix" className="py-24 bg-surface-elevated">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-semibold tracking-widest uppercase">Why Us</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
          Why Choose <span className="text-gradient-gold">HaPrix</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-3xl mx-auto text-sm leading-relaxed">
          HaPrix was founded on the principle that digital transformation requires more than just software—it requires 
          architectural precision. We bridge the gap between complex technological capabilities and your unique 
          strategic objectives, building systems that act as the backbone for your organizational growth.
        </p>
      </motion.div>

      {/* Checkmarks */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-4 mb-16"
      >
        {reasons.map((r) => (
          <div key={r} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
            <Check size={16} className="text-primary" />
            <span className="text-sm font-medium text-secondary-foreground">{r}</span>
          </div>
        ))}
      </motion.div>

      {/* Pillars */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {pillars.map((p, i) => (
          <Card3D key={p.title} delay={i * 0.1}>
            <div className="p-8 rounded-xl glass-card glass-card-hover border-border transition-all duration-500 group h-full">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-all duration-300">
                <p.icon size={24} className="text-primary group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 tracking-tight">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed antialiased">{p.desc}</p>
            </div>
          </Card3D>
        ))}
      </div>

      {/* Strengths */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 p-8 rounded-xl bg-card border border-border max-w-3xl mx-auto"
      >
        <div className="flex items-center gap-3 mb-5">
          <Cog size={22} className="text-primary" />
          <h3 className="text-lg font-heading font-semibold">Our Architectural Philosophy</h3>
        </div>
        <ul className="space-y-3">
          {[
            "Systems-driven approach to complex business logic",
            "Deep consultative expertise across the Zoho ecosystem",
            "Bespoke engineering for vertical-specific requirements",
            "Strategic roadmap development for digital evolution",
            "Relentless focus on technical excellence and ROI",
          ].map((s) => (
            <li key={s} className="flex items-start gap-2 text-sm">
              <Check size={16} className="text-primary mt-0.5 shrink-0" />
              <span className="text-secondary-foreground">{s}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);

export default WhyHaPrixSection;
