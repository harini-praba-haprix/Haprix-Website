import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollButton from "@/components/ScrollButton";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Settings, Cpu, Link as LinkIcon, Activity, Key, Search, PenTool, Rocket, HeadphonesIcon } from "lucide-react";
import { Card3D } from "@/components/AnimationEffects";

const coreServices = [
  {
    title: "Advanced CRM Architecture",
    description: "Complete CRM setup, profound customization, and workflow optimization engineered for sales excellence.",
    icon: Activity,
    features: [
      "Intelligent Lead & Contact Governance",
      "Dynamic Sales Pipeline Architecture",
      "Bespoke Data Structures & Layouts",
      "Zero-Touch Flow Automation",
      "Seamless Omnichannel Inbox",
      "Predictive Sales Intelligence"
    ],
    deliverables: [
      "Turnkey CRM Ecosystem",
      "Immersive User Enablement Sessions",
      "Comprehensive Architectural Blueprints",
      "30-Day Hypercare Support Period"
    ]
  },
  {
    title: "Zoho One Master Integration",
    description: "End-to-end business suite deployment for absolute synchronization across all organizational departments.",
    icon: Settings,
    features: [
      "Unified Suite Orchestration",
      "Real-Time Bi-Directional Sync",
      "Role-Based Access Topologies",
      "Cross-Departmental Workflows",
      "Executive Unified Dashboarding",
      "Enterprise Security Configuration"
    ],
    deliverables: [
      "Integrated Zoho One Environment",
      "System Integration Topography Docs",
      "Administrator Training Masterclass",
      "Ongoing Optimization Roadmap"
    ]
  },
  {
    title: "Cognitive Process Automation",
    description: "Eradicate manual friction with highly intelligent workflows and meticulous process optimization.",
    icon: Cpu,
    features: [
      "Complex Logic Workflow Design",
      "Event-Driven Email Automation",
      "Multi-Tier Approval Architectures",
      "Algorithmic Task Management",
      "Dynamic Document Generation",
      "Real-time Notification Frameworks"
    ],
    deliverables: [
      "Autonomous Workflow Systems",
      "Logic Flow Documentation",
      "Team Enablement Materials",
      "Performance Monitoring Suite"
    ]
  },
  {
    title: "Bespoke System Integrations",
    description: "Bridge Zoho with your essential third-party applications for a singular, unified business neural network.",
    icon: LinkIcon,
    features: [
      "Deep API Connectivity",
      "Zero-Loss Data Migration",
      "Real-time Data Synchronization",
      "Custom Micro-Service Connectors",
      "Legacy System Revitalization",
      "Rigorous Payload Testing"
    ],
    deliverables: [
      "Unified System Architecture",
      "Technical API Documentation",
      "Integration Health Monitors",
      "Maintenance & Upgrade Guidelines"
    ]
  }
];

const additionalServices = [
  { name: "Corporate Zoho Certification", desc: "Comprehensive training programs for your team to become internal power users and maximize utilization." },
  { name: "SLA-Driven Maintenance", desc: "24/7 dedicated support and regular optimization to keep your infrastructure running flawlessly." },
  { name: "Executive BI & Dashboarding", desc: "Customized analytics configurations to track complex KPIs and empower data-driven executive decisions." },
  { name: "Enterprise Data Governance", desc: "Ensure your complete Zoho integration meets the strictest industry security and compliance standards." },
  { name: "Global Multi-Region Deployment", desc: "Configure complex localization topologies for businesses operating fluidly across multiple countries." },
  { name: "Continuous System Auditing", desc: "Regular architectural audits and code un-tangling to maintain peak processing performance." }
];

const processSteps = [
  {
    phase: "Phase 1: Deep Architectural Audit",
    icon: Search,
    desc: "We analyze your current structural processes, identify critical pain points, and define a precise project scope.",
  },
  {
    phase: "Phase 2: Strategic Blueprinting",
    icon: PenTool,
    desc: "We engineer a customized, scalable implementation plan uniquely tailored to your long-term business trajectory.",
  },
  {
    phase: "Phase 3: Agile Engineering",
    icon: Settings,
    desc: "Our architects configure, heavily customize, and integrate your Zoho applications following industry best practices.",
  },
  {
    phase: "Phase 4: Rigorous UAT & Enablement",
    icon: Key,
    desc: "We execute meticulous stress testing and provide comprehensive user training to guarantee seamless adoption.",
  },
  {
    phase: "Phase 5: Managed Go-Live",
    icon: Rocket,
    desc: "We launch your new operating system supported by an intensive post-launch hypercare optimization period.",
  }
];

const Implementation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-border">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
        
        <div className="container relative z-10 text-center max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase mb-6"
          >
            Engineering Excellence
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            Zoho Implementation <span className="text-gradient-gold">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            Comprehensive, architect-grade Zoho solutions deliberately designed to automate bottlenecks, streamline complex operations, and drastically accelerate your business growth.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center"
          >
            <Button size="lg" variant="hero" onClick={() => {
              document.getElementById('core-services')?.scrollIntoView({ behavior: 'smooth' })
            }}>
              Explore Our Services
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Core Services Section */}
      <section id="core-services" className="py-24">
        <div className="container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
              Our Core <span className="text-gradient-gold">Architectures</span>
            </h2>
            <p className="text-muted-foreground">
              Expert, high-level implementation services precision-tailored to fundamentally transform how your business operates.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {coreServices.map((service, index) => (
              <Card3D key={service.title} delay={index * 0.1} className="h-full">
                <div className="p-8 md:p-10 rounded-2xl bg-card border border-border h-full flex flex-col hover:border-primary/40 transition-all group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold font-heading">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-8 text-base leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-8 mt-auto">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-4 border-b border-border pb-2">Key Engineering</h4>
                      <ul className="space-y-3">
                        {service.features.map(feature => (
                          <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span className="leading-snug">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-4 border-b border-border pb-2">Deliverables</h4>
                      <ul className="space-y-3">
                        {service.deliverables.map(item => (
                          <li key={item} className="flex items-start gap-2 text-sm text-foreground/90 font-medium">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span className="leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-surface-elevated border-y border-border">
        <div className="container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
              Comprehensive <span className="text-gradient-gold">Support Ecosystem</span>
            </h2>
            <p className="text-muted-foreground">
              Complete, unwavering support for your Zoho journey from initial deployment directly through to ongoing global optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div 
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-background border border-border flex flex-col gap-3 hover:-translate-y-1 transition-transform"
              >
                <h4 className="text-lg font-bold font-heading text-primary">{service.name}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24">
        <div className="container relative">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
              Our Implementation <span className="text-gradient-gold">Methodology</span>
            </h2>
            <p className="text-muted-foreground">
              A deeply proven, battle-tested blueprint that ensures flawlessly successful enterprise Zoho implementations every single time.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Connecting line */}
            <div className="absolute left-[27px] top-6 bottom-6 w-0.5 bg-border hidden md:block" />
            
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <motion.div 
                  key={step.phase}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex flex-col md:flex-row gap-6 md:gap-10 items-start group"
                >
                  <div className="bg-background border-2 border-primary rounded-full w-14 h-14 flex items-center justify-center shrink-0 z-10 shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)] group-hover:scale-110 transition-transform">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="bg-card border border-border p-6 rounded-xl flex-1 hover:border-primary/30 transition-colors">
                    <div className="text-xs font-bold text-primary tracking-widest uppercase mb-2">Step 0{index + 1}</div>
                    <h3 className="text-xl font-bold font-heading mb-3">{step.phase}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollButton />
    </div>
  );
};

export default Implementation;
