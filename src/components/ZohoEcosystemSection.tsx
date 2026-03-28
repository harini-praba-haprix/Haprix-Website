import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import zohoLogo from "@/assets/zoho-logo.png";
import { Card3D } from "@/components/AnimationEffects";
import {
  Users, BookOpen, Palette, Code2, Mail, Headphones,
  BarChart3, Package, FileText, Megaphone, ClipboardList, Globe, LayoutGrid,
  Users2, Wallet, UserPlus, MessageSquare, Target, MessageCircle, Share2,
  HardDrive, FileSignature, Video, Lock, ShieldCheck, ChevronDown, ChevronUp
} from "lucide-react";

interface ZohoProduct {
  icon: any;
  name: string;
  desc: string;
  color: string;
  isMajor?: boolean;
  whatWeDo: string;
}

const zohoProducts: ZohoProduct[] = [
  { 
    icon: LayoutGrid, 
    name: "Zoho One", 
    desc: "The unified operating system for your entire business ecosystem", 
    color: "text-primary",
    isMajor: true,
    whatWeDo: "End-to-end deployment, license architectural guidance, and cross-departmental unified workflow orchestration."
  },
  { 
    icon: Users, 
    name: "Zoho CRM", 
    desc: "Advanced customer relationship management & sales automation", 
    color: "text-red-400",
    isMajor: true,
    whatWeDo: "Advanced lead scoring, blueprint automation, and seamless integration with your existing marketing stack."
  },
  { 
    icon: Code2, 
    name: "Zoho Creator", 
    desc: "Low-code application development for custom business logic", 
    color: "text-blue-400",
    isMajor: true,
    whatWeDo: "Bespoke database architecture, Deluge script automation, and custom portal development for external users."
  },
  { 
    icon: BookOpen, 
    name: "Zoho Books", 
    desc: "Comprehensive cloud accounting & financial management", 
    color: "text-green-400",
    isMajor: true,
    whatWeDo: "Multi-currency setup, automated reconciliation, and bespoke financial reporting for tax compliance."
  },
  { 
    icon: Headphones, 
    name: "Zoho Desk", 
    desc: "Omnichannel customer support & integrated helpdesk", 
    color: "text-purple-400",
    isMajor: true,
    whatWeDo: "SLA configuration, AI-powered ticket routing, and comprehensive self-service portal development."
  },
  { 
    icon: ClipboardList, 
    name: "Zoho Projects", 
    desc: "Strategic project management & team collaboration", 
    color: "text-pink-400",
    isMajor: true,
    whatWeDo: "Gantt chart optimization, resource utilization tracking, and project-based financial monitoring."
  },
  { 
    icon: BarChart3, 
    name: "Zoho Analytics", 
    desc: "Deep business intelligence & strategic data visualization", 
    color: "text-cyan-400",
    isMajor: true,
    whatWeDo: "Custom SQL querying, cross-functional dashboard creation, and predictive business modeling."
  },
  { 
    icon: Users2, 
    name: "Zoho People", 
    desc: "Organize, automate, and simplify your entire HR process", 
    color: "text-red-500",
    isMajor: true,
    whatWeDo: "Employee lifecycle automation, performance management setup, and localized HR compliance configuration."
  },
  { 
    icon: Package, 
    name: "Zoho Inventory", 
    desc: "End-to-end inventory & multi-channel order management", 
    color: "text-orange-400",
    whatWeDo: "Multi-warehouse setup, barcode integration, and real-time stock synchronization across Shopify, Amazon, etc."
  },
  { 
    icon: Megaphone, 
    name: "Zoho Campaigns", 
    desc: "Strategic email marketing & advanced automation", 
    color: "text-yellow-400",
    whatWeDo: "Drip campaign design, A/B testing implementation, and CRM-synchronized marketing automation."
  },
  { 
    icon: Wallet, 
    name: "Zoho Expense", 
    desc: "Effortless travel and business expense reporting platform", 
    color: "text-blue-500",
    whatWeDo: "Travel policy enforcement, automated expense approval workflows, and direct integration with Zoho Books."
  },
  { 
    icon: UserPlus, 
    name: "Zoho Recruit", 
    desc: "End-to-end applicant tracking and talent acquisition", 
    color: "text-indigo-400",
    whatWeDo: "Candidate portal customization, automated interview scheduling, and integrated background check workflows."
  },
  { 
    icon: MessageSquare, 
    name: "Zoho SalesIQ", 
    desc: "Visitor tracking and live chat for sales conversion", 
    color: "text-cyan-500",
    whatWeDo: "Zobot (AI Chatbot) development, visitor scoring metrics, and real-time CRM lead generation."
  },
  { 
    icon: Target, 
    name: "Zoho Bigin", 
    desc: "Pipeline-centric CRM for scaling small business teams", 
    color: "text-amber-500",
    whatWeDo: "Small-team pipeline optimization, mobile-first CRM setup, and simplified lead management flows."
  },
  { 
    icon: MessageCircle, 
    name: "Zoho Cliq", 
    desc: "Simplified team communication and global collaboration", 
    color: "text-sky-500",
    whatWeDo: "Bot development for internal updates, channel orchestration, and Cliq-to-CRM real-time alerts."
  },
  { 
    icon: Share2, 
    name: "Zoho Social", 
    desc: "Comprehensive social media management and scheduling", 
    color: "text-rose-400",
    whatWeDo: "Multi-brand social management, automated publishing schedules, and detailed engagement analytics."
  },
  { 
    icon: HardDrive, 
    name: "Zoho WorkDrive", 
    desc: "Secure content collaboration and file management for teams", 
    color: "text-emerald-500",
    whatWeDo: "Large-scale file migration, folder permission hierarchy setup, and external collaboration security."
  },
  { 
    icon: FileText, 
    name: "Zoho Forms", 
    desc: "Engineered form builder for complex data collection", 
    color: "text-emerald-400",
    whatWeDo: "Dynamic field logic, PDF template generation, and secure data routing back to CRM or Sheets."
  },
  { 
    icon: Mail, 
    name: "Zoho Mail", 
    desc: "Secure, encrypted business email hosting for teams", 
    color: "text-sky-400",
    whatWeDo: "Enterprise email migration (from G-Suite/Outlook), custom domain setup, and admin control suite configuration."
  },
  { 
    icon: Globe, 
    name: "Zoho Sites", 
    desc: "Professional website builder for growing businesses", 
    color: "text-amber-400",
    whatWeDo: "End-to-end website design, SSL configuration, and seamless integration with Zoho SalesIQ and Forms."
  },
  { 
    icon: FileSignature, 
    name: "Zoho Sign", 
    desc: "Enterprise-grade digital signatures for all teams", 
    color: "text-purple-500",
    whatWeDo: "Automated document signing workflows, API-based signature triggers, and secure document vault integration."
  },
  { 
    icon: Video, 
    name: "Zoho Meeting", 
    desc: "Secure video conferencing and webinar platform", 
    color: "text-blue-600",
    whatWeDo: "Webinar platform setup, automated participant tracking, and integration with Zoho CRM for lead capture."
  },
  { 
    icon: Lock, 
    name: "Zoho Vault", 
    desc: "Secure password management for global business teams", 
    color: "text-orange-500",
    whatWeDo: "Privileged access management policies, secure password sharing across teams, and audit trail configuration."
  },
  { 
    icon: ShieldCheck, 
    name: "Zoho Assist", 
    desc: "Remote support and unattended access software", 
    color: "text-red-600",
    whatWeDo: "Unattended access setup for large fleets, remote support workflow optimization, and session reporting."
  },
  { 
    icon: Palette, 
    name: "Zoho Flow", 
    desc: "Orchestration platform to connect your business suite", 
    color: "text-violet-400",
    whatWeDo: "Complex cross-app automation (Multi-step flows), custom webhook handling, and logic error monitoring."
  },
];

const ZohoEcosystemSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const displayedProducts = isExpanded 
    ? zohoProducts 
    : zohoProducts.filter(p => p.isMajor);

  return (
    <section id="zoho-ecosystem" className="py-24 bg-surface-elevated">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src={zohoLogo} alt="Zoho" className="h-28 md:h-32 object-contain" loading="lazy" />
          </div>
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Zoho Ecosystem</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
            Powered by <span className="text-gradient-gold">Zoho</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-base leading-relaxed">
            We are experts across the entire Zoho product suite. From CRM to custom apps,
            we implement, customize, and integrate Zoho products to fit your business perfectly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto items-stretch">
          <AnimatePresence mode="popLayout">
            {displayedProducts.map((product, i) => (
              <motion.div
                key={product.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <Card3D className="h-full">
                  <div className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 text-center h-full flex flex-col justify-between items-center gap-4 hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.1)]">
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors shrink-0">
                        <product.icon size={32} className={product.color} />
                      </div>
                      <div>
                        <h3 className="text-lg font-heading font-bold tracking-tight mb-2">{product.name}</h3>
                        <p className="text-xs text-muted-foreground leading-relaxed antialiased">
                          {product.desc}
                        </p>
                      </div>
                    </div>
                    
                    {isExpanded && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 pt-4 border-t border-border w-full text-left"
                      >
                        <p className="text-[10px] font-bold text-primary uppercase tracking-tighter mb-1">What we do:</p>
                        <p className="text-[11px] leading-relaxed text-muted-foreground italic">
                          {product.whatWeDo}
                        </p>
                      </motion.div>
                    )}
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 text-center"
        >
          <button
            onClick={() => {
              if (isExpanded) {
                const el = document.getElementById("zoho-ecosystem");
                if (el) {
                  const y = el.getBoundingClientRect().top + window.scrollY - 80;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }
              setIsExpanded(!isExpanded);
            }}
            className="group flex items-center gap-2 mx-auto text-primary font-bold hover:text-primary-foreground transition-all duration-300 px-6 py-3 rounded-full border border-primary/20 hover:border-primary hover:bg-primary/10"
          >
            {isExpanded ? (
              <>
                Show Less <ChevronUp size={20} className="group-hover:-translate-y-1 transition-transform" />
              </>
            ) : (
              <>
                Show More Zoho Products <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" />
              </>
            )}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ZohoEcosystemSection;
