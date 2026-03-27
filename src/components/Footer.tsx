const Footer = () => (
  <footer className="py-12 border-t border-border">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
      <span className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} ZohoPro. All rights reserved.
      </span>
      <div className="flex gap-6">
        {["Privacy", "Terms", "Sitemap"].map((l) => (
          <a key={l} href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            {l}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
