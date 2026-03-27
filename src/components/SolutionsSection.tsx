import { motion } from "framer-motion";
import { Users, Workflow, Globe, Package, Bot } from "lucide-react";

const solutions = [
  {
    icon: Users,
    title: "CRM & Lead Management System",
    desc: "Streamline customer relationships and automate lead tracking with custom CRM solutions built on Zoho.",
  },
  {
    icon: Workflow,
    title: "Business Workflow Automation",
    desc: "Eliminate manual processes and boost productivity with intelligent workflow automation systems.",
  },
  {
    icon: Globe,
    title: "Customer Portal Solutions",
    desc: "Create self-service portals that enhance customer experience and reduce support overhead.",
  },
  {
    icon: Package,
    title: "Inventory & Order Management",
    desc: "End-to-end inventory tracking and order management systems integrated with your business tools.",
  },
  {
    icon: Bot,
    title: "AI Assistant for Business",
    desc: "Deploy AI-powered assistants that automate tasks, provide insights, and support smarter decision-making.",
  },
];

const SolutionsSection = () => (
  <section id="solutions" className="py-24 bg-surface-elevated">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-semibold tracking-widest uppercase">Solutions</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
          Our <span className="text-gradient-gold">Solutions</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {solutions.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group p-7 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
          >
            <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <s.icon size={22} className="text-primary" />
            </div>
            <h3 className="text-lg font-heading font-semibold mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionsSection;
