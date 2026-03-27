import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "About", href: "#about" },
  { label: "Why HaPrix", href: "#why-haprix" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  const activeSection = useScrollSpy(navLinks.map(l => l.href));

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/" + href);
    } else {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container flex items-center justify-between h-20">
        <a
          href="/"
          onClick={(e) => { e.preventDefault(); navigate("/"); window.scrollTo(0, 0); }}
          className="flex items-center gap-3 text-xl font-heading font-bold text-gradient-gold"
        >
          <img src={logo} alt="HaPrix Logo" className="h-10 w-10 object-contain" />
          HaPrix
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => {
            const isActive = activeSection === l.href.slice(1);
            return (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleNavClick(e, l.href)}
                className={cn(
                  "text-sm transition-all duration-300 font-medium relative py-1",
                  isActive 
                    ? "text-primary border-b-2 border-primary" 
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                {l.label}
              </a>
            );
          })}
          <Button variant="hero" size="sm" asChild>
            <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>Get Started</a>
          </Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border pb-4">
          <div className="container flex flex-col gap-3">
            {navLinks.map((l) => {
              const isActive = activeSection === l.href.slice(1);
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => handleNavClick(e, l.href)}
                  className={cn(
                    "text-sm py-3 transition-colors px-4 rounded-lg",
                    isActive 
                      ? "text-primary bg-primary/10 font-semibold" 
                      : "text-muted-foreground hover:text-primary"
                  )}
                >
                  {l.label}
                </a>
              );
            })}
            <Button variant="hero" size="sm" asChild>
              <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>Get Started</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
