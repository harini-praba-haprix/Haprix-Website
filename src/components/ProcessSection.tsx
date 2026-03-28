import { motion } from "framer-motion";
import { Search, PenTool, Layout, ClipboardCheck, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery & Analysis",
    desc: "We analyze your current processes, identify pain points, and define project scope.",
    number: "01"
  },
  {
    icon: PenTool,
    title: "Solution Design",
    desc: "Create a customized implementation plan tailored to your business needs.",
    number: "02"
  },
  {
    icon: Layout,
    title: "Implementation",
    desc: "Configure, customize, and integrate Zoho applications following best practices.",
    number: "03"
  },
  {
    icon: ClipboardCheck,
    title: "Testing & Training",
    desc: "Thorough testing and comprehensive user training to ensure smooth adoption.",
    number: "04"
  },
  {
    icon: Rocket,
    title: "Go-Live & Support",
    desc: "Launch your new system with ongoing support and optimization.",
    number: "05"
  }
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 bg-secondary/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Methodology</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
            Our <span className="text-gradient-gold">Implementation Process</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A proven methodology that ensures successful Zoho implementations every time.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-background border-2 border-border flex items-center justify-center mb-6 group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300">
                  <step.icon size={24} className="text-primary" />
                </div>
                <div className="absolute -top-4 -right-2 text-4xl font-black text-foreground/5 pointer-events-none group-hover:text-primary/10 transition-colors">
                  {step.number}
                </div>
                <h3 className="text-lg font-heading font-semibold mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
