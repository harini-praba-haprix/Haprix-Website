import { motion } from "framer-motion";
import { Workflow, Database, AppWindow, Brain, Link2, BarChart3 } from "lucide-react";
import { Card3D } from "@/components/AnimationEffects";

const services = [
  {
    icon: Database,
    title: "Strategic CRM Architecture",
    desc: "We design CRM systems that don't just store data, but drive revenue through unified sales intelligence and automated lead life cycles.",
  },
  {
    icon: AppWindow,
    title: "Cognitive Process Automation",
    desc: "Enterprise-wide workflow automation that adapts to your needs. We eliminate manual friction by engineering self-sustaining digital processes.",
  },
  {
    icon: Workflow,
    title: "Unified Digital Ecosystems",
    desc: "Seamlessly connecting your entire business stack under a single, orchestrated Zoho infrastructure. Eliminating silos for operational harmony.",
  },
  {
    icon: Link2,
    title: "Bespoke App Development",
    desc: "Custom application engineering tailored to your unique business logic. We build the specialized tools that off-the-shelf software can't provide.",
  },
  {
    icon: BarChart3,
    title: "Data Intelligence & Analytics",
    desc: "Transforming passive data into strategic assets. Our bespoke dashboards provide the ROI clarity needed for high-stakes decision-making.",
  },
  {
    icon: Brain,
    title: "Eco-System Audits & Support",
    desc: "Continuous optimization and architectural audits. We ensure your digital infrastructure evolves as fast as your global business goals.",
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
          <Card3D key={s.title} delay={i * 0.1}>
            <div className="group p-8 rounded-xl glass-card glass-card-hover border-border transition-all duration-500 h-full">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
                <s.icon size={28} className="text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 tracking-tight">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed antialiased">{s.desc}</p>
            </div>
          </Card3D>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
