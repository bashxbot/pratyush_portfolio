import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub", testId: "link-github" },
    { icon: Linkedin, href: "#", label: "LinkedIn", testId: "link-linkedin" },
    { icon: Twitter, href: "#", label: "Twitter", testId: "link-twitter" },
    { icon: Mail, href: "mailto:hello@pratyush.dev", label: "Email", testId: "link-email" },
  ];

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="relative mt-32 py-12 md:py-16 backdrop-blur-xl bg-card/30 border-t border-border/50">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Pratyush
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Crafting exceptional digital experiences with cutting-edge technology and modern design aesthetics.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Quick Links
            </h4>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  data-testid={`footer-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="group"
                  aria-label={social.label}
                  data-testid={social.testId}
                >
                  <div className="p-2 rounded-xl backdrop-blur-md bg-card/50 border border-border/50 hover:border-primary/50 hover:shadow-glow-sm transition-all duration-300 group-hover:scale-110">
                    <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/30">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Pratyush. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
