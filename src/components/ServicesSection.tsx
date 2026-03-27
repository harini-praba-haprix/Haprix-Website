import { motion } from "framer-motion";
import { Database, Workflow, AppWindow, BarChart3, Shield, Headphones } from "lucide-react";

const services = [
  {
    icon: Database,
    title: "Zoho CRM",
    desc: "Custom CRM implementation, pipeline setup, lead management, and sales automation tailored to your workflow.",
  },
  {
    icon: Workflow,
    title: "Automation & Workflows",
    desc: "Automate repetitive tasks, create smart workflows, and connect your Zoho apps for seamless operations.",
  },
  {
    icon: AppWindow,
    title: "Zoho Creator Apps",
    desc: "Build custom applications on Zoho Creator to solve unique business challenges without code limitations.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    desc: "Set up Zoho Analytics dashboards with real-time insights to make data-driven decisions confidently.",
  },
  {
    icon: Shield,
    title: "Data Migration",
    desc: "Safely migrate your existing data from legacy systems into Zoho with zero downtime and full integrity.",
  },
  {
    icon: Headphones,
    title: "Training & Support",
    desc: "Empower your team with hands-on training sessions and ongoing dedicated support to maximize ROI.",
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
          End-to-End <span className="text-gradient-gold">Zoho Expertise</span>
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
