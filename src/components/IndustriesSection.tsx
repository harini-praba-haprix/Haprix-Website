import { motion } from "framer-motion";
import { 
  Building2, ShoppingCart, Activity, GraduationCap, 
  Factory, Landmark, Truck, Briefcase, Check 
} from "lucide-react";

const industries = [
  {
    icon: Building2,
    title: "Real Estate",
    description: "Streamline property management, client relationships, and sales processes with integrated Zoho solutions.",
    challenges: ["Managing multiple property listings", "Client communication and follow-ups", "Document management and contracts"],
    results: "40% increase in lead conversion"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce & Retail",
    description: "Optimize inventory management, customer service, and multi-channel sales operations.",
    challenges: ["Multi-channel inventory management", "Order processing delays", "Marketing automation needs"],
    results: "30% reduction in stockouts"
  },
  {
    icon: Activity,
    title: "Healthcare & Medical",
    description: "Enhance patient care, appointment scheduling, and medical record management.",
    challenges: ["Patient appointment scheduling", "Medical records management", "Compliance requirements"],
    results: "25% increase in efficiency"
  },
  {
    icon: GraduationCap,
    title: "Education & Training",
    description: "Manage student enrollment, course delivery, and administrative processes efficiently.",
    challenges: ["Student enrollment management", "Course content delivery", "Progress tracking"],
    results: "Improved student engagement"
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Optimize production planning, supply chain management, and quality control processes.",
    challenges: ["Production planning complexity", "Supply chain visibility", "Quality control tracking"],
    results: "20% improvement in efficiency"
  },
  {
    icon: Landmark,
    title: "Financial Services",
    description: "Enhance client management, compliance tracking, and financial reporting capabilities.",
    challenges: ["Client relationship management", "Regulatory compliance", "Document security"],
    results: "Enhanced client satisfaction"
  },
  {
    icon: Truck,
    title: "Logistics",
    description: "Streamline fleet management, route optimization, and delivery tracking systems.",
    challenges: ["Fleet management complexity", "Route optimization needs", "Delivery tracking issues"],
    results: "15% reduction in fuel costs"
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    description: "Optimize project management, client billing, and resource allocation processes.",
    challenges: ["Project time tracking", "Client billing accuracy", "Resource allocation"],
    results: "30% better project margins"
  }
];

const IndustriesSection = () => {
  return (
    <section id="industries" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Industries We Serve</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
            Tailored Solutions for <span className="text-gradient-gold">Every Industry</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Each industry has unique challenges. Our expert team delivers customized Zoho solutions that address your specific business needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 flex flex-col h-full"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <item.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed flex-grow">
                {item.description}
              </p>
              
              <div className="space-y-4 pt-4 border-t border-border">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Key Challenges:</div>
                <ul className="space-y-2">
                  {item.challenges.map((challenge) => (
                    <li key={challenge} className="flex items-start gap-2 text-xs">
                      <Check size={14} className="text-primary mt-0.5 shrink-0" />
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-3 bg-primary/5 rounded-lg p-3">
                  <div className="text-[10px] font-bold uppercase text-primary mb-1">Impact:</div>
                  <div className="text-xs font-bold text-foreground">{item.results}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
