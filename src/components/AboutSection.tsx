import { motion } from "framer-motion";
import { Target, Rocket, Heart, Lightbulb, Award, BookOpen } from "lucide-react";

const values = [
  { icon: Lightbulb, title: "Innovation", desc: "We continuously explore new technologies to deliver smarter and more efficient solutions." },
  { icon: Heart, title: "Integrity", desc: "We build trust by maintaining transparency, honesty, and accountability in everything we do." },
  { icon: Target, title: "Customer Success", desc: "Our priority is to create solutions that deliver real value and measurable impact for our clients." },
  { icon: Award, title: "Excellence", desc: "We strive to deliver high-quality systems and services that exceed expectations." },
  { icon: BookOpen, title: "Continuous Learning", desc: "We constantly evolve with technology to stay ahead in the fast-changing digital landscape." },
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
        <span className="text-primary text-sm font-semibold tracking-widest uppercase">About Us</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
          Who We <span className="text-gradient-gold">Are</span>
        </h2>
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
            To become a trusted technology partner that empowers businesses with intelligent automation
            and AI-driven solutions, helping organizations operate more efficiently and make smarter
            decisions in the digital era.
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
            To design and deliver innovative business systems that streamline operations, automate workflows,
            and enhance productivity through modern technologies such as automation, cloud platforms, and
            artificial intelligence.
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

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-5xl mx-auto">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="text-center p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-all"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <v.icon size={20} className="text-primary" />
            </div>
            <h4 className="text-sm font-heading font-semibold mb-2">{v.title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
