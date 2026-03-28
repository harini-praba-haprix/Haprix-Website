import { Link, useLocation } from "react-router-dom";
import logoIcon from "@/assets/logo_icon.png";
import { cn } from "@/lib/utils";

const Footer = () => {
  const location = useLocation();
  const isPrivacy = location.pathname === "/privacy";
  const isTerms = location.pathname === "/terms";

  return (
    <footer className="py-12 border-t border-border">
    <div className="container">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <img src={logoIcon} alt="HaPrix Logo" className="h-10 w-auto object-contain" />
            <span className="text-xl font-bold text-gradient-gold tracking-tight">HaPrix</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Architecting the infrastructure of intelligent business with over 10+ years of digital transformation experience.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-sm font-heading font-semibold mb-3">Services</h4>
          <ul className="space-y-2">
            {["Business Automation", "CRM & Sales Systems", "Custom Applications", "AI Solutions"].map((s) => (
              <li key={s}>
                <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">{s}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-sm font-heading font-semibold mb-3">Company</h4>
          <ul className="space-y-2">
            {[
              { label: "About Us", href: "#about" },
              { label: "Why HaPrix", href: "#why-haprix" },
              { label: "Contact", href: "#contact" },
            ].map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-heading font-semibold mb-3">Contact Details</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Phone: <a href="tel:+917358662199" className="hover:text-primary transition-colors">+91 7358662199</a></li>
            <li>Email: <a href="mailto:harini@haprixai.com" className="font-medium text-gradient-gold hover:opacity-80 transition-opacity underline-offset-4 hover:underline">harini@haprixai.com</a></li>
            <li>Chennai - 603210, India</li>
          </ul>
        </div>
      </div>

      <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} HaPrix. All rights reserved.
        </span>
        <div className="flex gap-6">
          <Link 
            to="/privacy" 
            onClick={() => window.scrollTo(0, 0)} 
            className={cn(
              "text-sm transition-colors",
              isPrivacy ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"
            )}
          >
            Privacy
          </Link>
          <Link 
            to="/terms" 
            onClick={() => window.scrollTo(0, 0)} 
            className={cn(
              "text-sm transition-colors",
              isTerms ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"
            )}
          >
            Terms
          </Link>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
