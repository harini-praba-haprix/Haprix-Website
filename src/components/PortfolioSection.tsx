import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Insurance Renewal Automation",
    industry: "Insurance",
    desc: "Automated policy renewal pipeline with Zoho CRM + Creator, reducing manual work by 70%.",
    tags: ["Zoho CRM", "Creator", "Automation"],
  },
  {
    title: "Real Estate Lead Management",
    industry: "Real Estate",
    desc: "Custom CRM with property tracking, lead scoring, and automated follow-ups for 200+ agents.",
    tags: ["Zoho CRM", "Analytics", "Workflows"],
  },
  {
    title: "E-Commerce Order System",
    industry: "Retail",
    desc: "Integrated Zoho Inventory + Books + CRM for seamless order-to-delivery tracking.",
    tags: ["Zoho Books", "Inventory", "Integration"],
  },
  {
    title: "Healthcare Patient Portal",
    industry: "Healthcare",
    desc: "HIPAA-compliant patient management system built on Zoho Creator with appointment scheduling.",
    tags: ["Zoho Creator", "Forms", "Security"],
  },
];

const PortfolioSection = () => (
  <section id="portfolio" className="py-24 bg-surface-elevated">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-semibold tracking-widest uppercase">Our Work</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
          Case <span className="text-gradient-gold">Studies</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group p-8 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                {p.industry}
              </span>
              <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-3">{p.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.desc}</p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
