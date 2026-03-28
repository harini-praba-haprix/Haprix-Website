import { motion } from "framer-motion";
import { Target, Rocket, Heart, Lightbulb, Award, BookOpen } from "lucide-react";
import logo from "@/assets/logo_full.png";

const values = [
  { icon: Heart, title: "Client-Centric", desc: "We put our clients at the center of everything we do, ensuring their success is our success." },
  { icon: Target, title: "Results-Driven", desc: "Every solution we implement is designed to deliver measurable business outcomes and ROI." },
  { icon: Award, title: "Excellence", desc: "We maintain the highest standards in implementation, training, and ongoing support." },
  { icon: Rocket, title: "Timely Delivery", desc: "We respect your time and deliver projects on schedule without compromising quality." },
];

const AboutSection = () => (
  <section id="about" className="py-24">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-semibold tracking-widest uppercase">About HaPrix</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
          Our <span className="text-gradient-gold">Story</span>
        </h2>
        <p className="text-muted-foreground mt-6 max-w-3xl mx-auto text-lg leading-relaxed italic">
          "HaPrix was founded on a singular observation: most digital transformations fail not because of 
          software limitations, but due to architectural siloes and a lack of unified business logic."
        </p>
        <p className="text-muted-foreground mt-4 max-w-3xl mx-auto text-sm leading-relaxed">
          Bringing over 10+ years of deep consultative experience in systems optimization and architectural 
          Zoho implementations, we recognize that technology is only as powerful as the foundation it sits upon. 
          We founded HaPrix to provide the high-level engineering and strategic clarity that high-growth businesses 
          demand in an increasingly complex digital landscape.
        </p>
      </motion.div>

      {/* Vision & Mission */}
      <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-xl bg-card border border-border"
        >
          <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
            <Target size={22} className="text-primary" />
          </div>
          <h3 className="text-xl font-heading font-semibold mb-3">Our Vision</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            To become the premier architectural firm for digital business ecosystems, recognized for 
            transforming organizational chaos into streamlined, high-performance engines.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-xl bg-card border border-border"
        >
          <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
            <Rocket size={22} className="text-primary" />
          </div>
          <h3 className="text-xl font-heading font-semibold mb-3">Our Mission</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            To empower global organizations with the intelligent infrastructure they need to eliminate 
            friction, improve data visibility, and achieve sustainable, scalable growth.
          </p>
        </motion.div>
      </div>

      {/* Values */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h3 className="text-2xl font-heading font-bold">Our <span className="text-gradient-gold">Values</span></h3>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="text-center p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all group"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <v.icon size={24} className="text-primary" />
            </div>
            <h4 className="text-lg font-heading font-semibold mb-2">{v.title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
