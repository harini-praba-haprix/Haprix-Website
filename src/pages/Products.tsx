import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollButton from "@/components/ScrollButton";
import { Card3D } from "@/components/AnimationEffects";
import { Button } from "@/components/ui/button";
import {
  Target, Mail, Landmark, Users, Scale, Headphones,
  BarChart3, ClipboardList, Code2, ArrowRight, CheckCircle2
} from "lucide-react";

// The rewritten and enhanced product data
const productCategories = [
  {
    id: "sales-marketing",
    name: "Sales & Marketing",
    description: "Strategic pipeline automation and full-cycle marketing orchestration.",
    icon: Target,
    color: "text-red-400",
    bg: "bg-red-500/10",
    border: "border-red-500/20",
    products: [
      {
        name: "Zoho CRM",
        desc: "Advanced Customer Relationship Management architecture.",
        features: ["Intelligent Lead Management", "Automated Sales Pipeline", "Predictive Analytics"]
      },
      {
        name: "Zoho Campaigns",
        desc: "Precision-targeted email marketing and audience segmentation.",
        features: ["Dynamic Email Templates", "A/B Testing Scenarios", "Engagement Targeting"]
      },
      {
        name: "Zoho Social",
        desc: "Unified social media presence management and monitoring.",
        features: ["Automated Post Scheduling", "Performance Analytics", "Cross-Team Collaboration"]
      },
      {
        name: "Zoho Survey",
        desc: "Comprehensive customer feedback and experience collection.",
        features: ["Bespoke Custom Surveys", "Real-time Sentiment Analysis", "CRM Integration"]
      }
    ]
  },
  {
    id: "email-collaboration",
    name: "Email & Collaboration",
    description: "Enterprise-grade communication hubs and secure collaboration environments.",
    icon: Mail,
    color: "text-sky-400",
    bg: "bg-sky-500/10",
    border: "border-sky-500/20",
    products: [
      {
        name: "Zoho Mail",
        desc: "Secure, ad-free business email hosting for global teams.",
        features: ["Custom Domain Configuration", "Mobile-First Access", "S/MIME Security"]
      },
      {
        name: "Zoho WorkDrive",
        desc: "Centralized cloud file storage with strict access controls.",
        features: ["Secure File Sharing", "Historical Version Control", "Live Document Collaboration"]
      },
      {
        name: "Zoho Connect",
        desc: "The internal social network for engaged organizational cultures.",
        features: ["Departmental Team Chat", "Focused Topic Groups", "Company Activity Feeds"]
      },
      {
        name: "Zoho Meeting",
        desc: "Encrypted video conferencing and scalable webinar platform.",
        features: ["High-Fidelity Screen Sharing", "Cloud Session Recording", "Interactive Webinars"]
      }
    ]
  },
  {
    id: "finance",
    name: "Finance",
    description: "End-to-end financial operations and accounting solutions.",
    icon: Landmark,
    color: "text-green-500",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    products: [
      {
        name: "Zoho Books",
        desc: "Comprehensive cloud-based accounting and ledger management.",
        features: ["Automated Invoicing workflows", "Smart Expense Tracking", "Tax-Compliant Reports"]
      },
      {
        name: "Zoho Invoice",
        desc: "Professional billing and rapid payment collection systems.",
        features: ["Brand-Customized Templates", "Global Payment Gateways", "Follow-up Automation"]
      },
      {
        name: "Zoho Expense",
        desc: "Streamlined corporate expense reporting and policy enforcement.",
        features: ["AI Form Receipt Scanning", "Multi-Tier Approval Workflows", "Accounting Integration"]
      },
      {
        name: "Zoho Subscriptions",
        desc: "Recurring billing and dynamic lifecycle management.",
        features: ["Tiered Subscription Plans", "Automated Dunning Management", "Churn Analytics"]
      }
    ]
  },
  {
    id: "human-resources",
    name: "Human Resources",
    description: "Core HR systems built for employee engagement and talent acquisition.",
    icon: Users,
    color: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
    products: [
      {
        name: "Zoho People",
        desc: "Centralized Human Resources Management System (HRMS).",
        features: ["Unified Employee Database", "Geofenced Attendance", "360° Performance Appraisals"]
      },
      {
        name: "Zoho Recruit",
        desc: "End-to-end Applicant Tracking System (ATS) for scaling teams.",
        features: ["Multi-board Job Posting", "AI Resume Parsing", "Automated Interview Scheduling"]
      },
      {
        name: "Zoho Payroll",
        desc: "Compliant payroll processing and automated compensation.",
        features: ["Precision Salary Calculation", "Regional Tax Compliance", "Statutory Reports"]
      },
      {
        name: "Zoho Survey (HR)",
        desc: "Dedicated internal feedback infrastructure.",
        features: ["Pulse Engagement Surveys", "Structured Exit Interviews", "Culture Analytics"]
      }
    ]
  },
  {
    id: "legal",
    name: "Legal Operations",
    description: "Secure data governance, contract lifecycles, and compliance management.",
    icon: Scale,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    products: [
      {
        name: "Zoho Contracts",
        desc: "Comprehensive Contract Lifecycle Management (CLM).",
        features: ["Centralized Template Library", "Integrated E-signatures", "Multi-Stage Approval Workflow"]
      },
      {
        name: "Zoho Sign",
        desc: "Enterprise-grade, legally binding digital signature solution.",
        features: ["Legally Binding Frameworks", "Sequential Multi-party Signing", "Unhackable Audit Trails"]
      },
      {
        name: "Zoho Vault",
        desc: "Privileged access and secure password management.",
        features: ["Zero-Knowledge Secure Storage", "Role-Based Team Sharing", "Granular Access Control"]
      }
    ]
  },
  {
    id: "customer-support",
    name: "Customer Support",
    description: "Omnichannel helpdesk and proactive customer success platforms.",
    icon: Headphones,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    products: [
      {
        name: "Zoho Desk",
        desc: "Context-aware help desk and ticketing software.",
        features: ["Omnichannel Ticket Management", "Self-Service Knowledge Base", "SLA Automation"]
      },
      {
        name: "Zoho SalesIQ",
        desc: "Proactive live chat and behavioral website tracking.",
        features: ["Real-time Engagement Chat", "Granular Visitor Analytics", "Predictive Lead Scoring"]
      },
      {
        name: "Zoho Assist",
        desc: "Secure remote support and unattended access software.",
        features: ["Instant Screen Sharing", "Secure File Transfer", "Audit Session Recording"]
      }
    ]
  },
  {
    id: "bi-analytics",
    name: "BI & Analytics",
    description: "Advanced intelligence tools to democratize your data processing.",
    icon: BarChart3,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    products: [
      {
        name: "Zoho Analytics",
        desc: "Self-service business intelligence platform for deep insights.",
        features: ["Dynamic Data Visualization", "Complex Custom Reports", "Cross-functional Dashboards"]
      },
      {
        name: "Zoho Reports",
        desc: "Accessible reporting infrastructure for everyday team use.",
        features: ["Intuitive Drag-drop Designer", "Automated Scheduled Reports", "Secure Collaboration"]
      }
    ]
  },
  {
    id: "project-management",
    name: "Project Management",
    description: "Resource optimization and collaborative execution frameworks.",
    icon: ClipboardList,
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
    products: [
      {
        name: "Zoho Projects",
        desc: "Comprehensive project planning and tracking software.",
        features: ["Interactive Gantt Charts", "Granular Time Tracking", "Task Collaboration"]
      },
      {
        name: "Zoho Sprints",
        desc: "Agile project management for iterative development teams.",
        features: ["Interactive Scrum Boards", "Sprint Burndown Charts", "Sprint Retrospectives"]
      },
      {
        name: "Zoho BookTime",
        desc: "Dedicated time tracking and project-based billing.",
        features: ["Automated Time Sheets", "Client Project Tracking", "Direct Invoice Billing"]
      }
    ]
  },
  {
    id: "developer-platform",
    name: "Developer Platform",
    description: "Low-code frameworks and robust integration middleware.",
    icon: Code2,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    products: [
      {
        name: "Zoho Creator",
        desc: "Pioneering low-code environment for bespoke app development.",
        features: ["Drag-and-drop Visual Builder", "Complex Workflow Automation", "Third-party Integration"]
      },
      {
        name: "Zoho Flow",
        desc: "Enterprise orchestration platform to connect your apps.",
        features: ["Pre-built App Connectors", "Visual Workflow Builder", "Webhooks & API Management"]
      },
      {
        name: "Zoho Deluge",
        desc: "Zoho's proprietary cloud scripting language for custom logic.",
        features: ["Bespoke Custom Functions", "Cross-App API Integration", "Deep System Automation"]
      }
    ]
  }
];

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-border">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

        <div className="container relative z-10 text-center max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Product Portfolio
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            Complete Zoho Ecosystem at Your <span className="text-gradient-gold">Fingertips</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            Discover comprehensive business solutions across all categories. From sales automation to project management, we help you leverage the complete Zoho suite for your digital transformation.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button size="lg" variant="hero" onClick={() => {
              document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
            }}>
              Explore Solutions
            </Button>
            <Button size="lg" variant="hero-outline" asChild>
              <a href="/implementation">
                View Implementation Services <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Main Categories Section */}
      <section id="portfolio" className="py-24">
        <div className="container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
              Zoho Products by <span className="text-gradient-gold">Category</span>
            </h2>
            <p className="text-muted-foreground">
              Explore our comprehensive range of Zoho solutions, organized by business function to help you find exactly the digital infrastructure you need.
            </p>
          </div>

          <div className="space-y-24">
            {productCategories.map((category, index) => (
              <motion.div
                key={category.id}
                id={category.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="scroll-mt-24"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4 border-b border-border pb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${category.bg} ${category.border} border`}>
                      <category.icon className={`w-7 h-7 ${category.color}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-heading font-bold">{category.name}</h3>
                      <p className="text-muted-foreground mt-1">{category.description}</p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {category.products.map((product, pIndex) => (
                    <Card3D key={product.name} delay={pIndex * 0.1}>
                      <div className="bg-card border border-border rounded-xl p-6 h-full flex flex-col hover:border-primary/40 transition-colors group">
                        <h4 className="text-xl font-bold mb-2 font-heading group-hover:text-primary transition-colors">{product.name}</h4>
                        <p className="text-sm text-muted-foreground mb-6 h-10">{product.desc}</p>

                        <div className="mt-auto pt-4 border-t border-border/50">
                          <ul className="space-y-3">
                            {product.features.map((feature) => (
                              <li key={feature} className="flex items-start gap-2 text-sm text-foreground/80">
                                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                <span className="leading-snug">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </Card3D>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
      <ScrollButton />
    </div>
  );
};

export default Products;
