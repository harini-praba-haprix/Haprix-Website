import { motion } from "framer-motion";
import { Workflow, Database, AppWindow, Brain, Link2, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Workflow,
    title: "Business Process Automation",
    desc: "Automate manual workflows to improve efficiency and reduce operational costs. Includes workflow automation, approval processes, data synchronization, and process optimization.",
  },
  {
    icon: Database,
    title: "Zoho CRM Implementation",
    desc: "End-to-end CRM setup tailored to your business — Zoho CRM customization, sales pipeline automation, lead management systems, and CRM integrations.",
  },
  {
    icon: AppWindow,
    title: "Custom Application Development",
    desc: "Build custom business applications tailored to company operations — Zoho Creator apps, internal business tools, customer portals, and workflow management systems.",
  },
  {
    icon: Brain,
    title: "AI-Powered Automation",
    desc: "Use AI to improve decision-making and automate intelligent tasks — AI assistants for business workflows, intelligent document processing, AI data insights, and smart automation.",
  },
  {
    icon: Link2,
    title: "System Integrations",
    desc: "Connect multiple business platforms into a unified ecosystem — Zoho integrations, API integrations, payment gateway integrations, and third-party system connections.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics & Insights",
    desc: "Transform raw data into actionable intelligence with business dashboards, data visualization, reporting automation, and performance tracking.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-24 relative">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-semibold tracking-widest uppercase">What We Do</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
          Our <span className="text-gradient-gold">Services</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group p-8 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:glow-gold"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <s.icon size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-3">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
