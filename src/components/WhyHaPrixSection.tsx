import { motion } from "framer-motion";
import { Check, Cog, Lightbulb, Users, Award } from "lucide-react";

const reasons = [
  "Intelligent Automation",
  "Custom-Built Solutions",
  "Scalable Architecture",
  "Secure Cloud Infrastructure",
  "Future-Ready AI Systems",
];

const pillars = [
  {
    icon: Award,
    title: "Operational Excellence",
    desc: "We deliver solutions that improve efficiency, reliability, and performance across business processes — streamlining workflows and reducing manual effort.",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Technology",
    desc: "We leverage automation, cloud capabilities, and AI-driven systems to create scalable solutions that enable organizations to operate smarter.",
  },
  {
    icon: Users,
    title: "Customer-Centric Approach",
    desc: "Every business has unique challenges. We focus on understanding client needs and delivering customized solutions that add real value.",
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
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-sm leading-relaxed">
          We design and build intelligent business systems that help organizations automate processes,
          improve productivity, and make better decisions. Our solutions simplify complex workflows,
          integrate business applications, and create scalable digital systems tailored to each organization's needs.
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
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
              <p.icon size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-3">{p.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
          </motion.div>
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
          <h3 className="text-lg font-heading font-semibold">Our Strengths</h3>
        </div>
        <ul className="space-y-3">
          {[
            "Expertise in business automation and workflow optimization",
            "Ability to design customized business applications",
            "Strong focus on intelligent systems and modern technologies",
            "Scalable solutions designed for future growth",
            "Commitment to delivering reliable and efficient systems",
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
