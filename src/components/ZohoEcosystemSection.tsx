import { motion } from "framer-motion";
import zohoLogo from "@/assets/zoho-logo.png";
import {
  Users, BookOpen, Palette, Code2, Mail, Headphones,
  BarChart3, Package, FileText, Megaphone, ClipboardList, Globe
} from "lucide-react";

const zohoProducts = [
  { icon: Users, name: "Zoho CRM", desc: "Customer relationship management & sales automation", color: "text-red-400" },
  { icon: Code2, name: "Zoho Creator", desc: "Low-code custom application development platform", color: "text-blue-400" },
  { icon: BookOpen, name: "Zoho Books", desc: "Accounting & financial management", color: "text-green-400" },
  { icon: Package, name: "Zoho Inventory", desc: "Inventory & order management", color: "text-orange-400" },
  { icon: BarChart3, name: "Zoho Analytics", desc: "Business intelligence & data visualization", color: "text-cyan-400" },
  { icon: Headphones, name: "Zoho Desk", desc: "Customer support & helpdesk", color: "text-purple-400" },
  { icon: Megaphone, name: "Zoho Campaigns", desc: "Email marketing & automation", color: "text-yellow-400" },
  { icon: FileText, name: "Zoho Forms", desc: "Online form builder & data collection", color: "text-emerald-400" },
  { icon: ClipboardList, name: "Zoho Projects", desc: "Project management & collaboration", color: "text-pink-400" },
  { icon: Mail, name: "Zoho Mail", desc: "Secure business email hosting", color: "text-sky-400" },
  { icon: Globe, name: "Zoho Sites", desc: "Website builder for businesses", color: "text-amber-400" },
  { icon: Palette, name: "Zoho Flow", desc: "Integration platform to connect apps", color: "text-violet-400" },
];

const ZohoEcosystemSection = () => (
  <section id="zoho-ecosystem" className="py-24 bg-surface-elevated">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <img src={zohoLogo} alt="Zoho" className="h-10 object-contain" loading="lazy" width={512} height={512} />
        </div>
        <span className="text-primary text-sm font-semibold tracking-widest uppercase">Zoho Ecosystem</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
          Powered by <span className="text-gradient-gold">Zoho</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-sm leading-relaxed">
          We are experts across the entire Zoho product suite. From CRM to custom apps,
          we implement, customize, and integrate Zoho products to fit your business perfectly.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {zohoProducts.map((product, i) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 text-center"
          >
            <div className="w-11 h-11 rounded-lg bg-secondary flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/10 transition-colors">
              <product.icon size={22} className={product.color} />
            </div>
            <h3 className="text-sm font-heading font-semibold mb-1">{product.name}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{product.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ZohoEcosystemSection;
