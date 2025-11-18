import { Code2, Palette, Rocket, Users, Zap, Shield } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/GlassCard";

export default function Services() {
  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Building modern, scalable web applications with cutting-edge technologies and best practices. From simple landing pages to complex enterprise solutions.",
      features: ["React & Next.js", "TypeScript", "RESTful APIs", "Database Design"],
      color: "from-primary to-purple-500",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive user interfaces that delight users and drive engagement. Every pixel crafted with care and attention to detail.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      color: "from-accent to-cyan-500",
    },
    {
      icon: Rocket,
      title: "Performance Optimization",
      description: "Optimizing applications for maximum speed and efficiency without compromising functionality. Ensuring exceptional user experiences across all devices.",
      features: ["Core Web Vitals", "Bundle Optimization", "Lazy Loading", "CDN Integration"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Users,
      title: "Consulting & Strategy",
      description: "Providing expert guidance on technology decisions, architecture planning, and digital transformation strategies tailored to your business needs.",
      features: ["Tech Stack Selection", "Architecture Review", "Code Audits", "Team Mentoring"],
      color: "from-pink-500 to-orange-500",
    },
    {
      icon: Zap,
      title: "Rapid Prototyping",
      description: "Quickly bringing ideas to life with functional prototypes. Perfect for validating concepts and securing stakeholder buy-in before full development.",
      features: ["MVP Development", "Quick Iterations", "User Testing", "Feedback Integration"],
      color: "from-orange-500 to-yellow-500",
    },
    {
      icon: Shield,
      title: "Maintenance & Support",
      description: "Ongoing maintenance and support to keep your applications running smoothly. Regular updates, bug fixes, and feature enhancements.",
      features: ["Bug Fixes", "Security Updates", "Feature Updates", "24/7 Monitoring"],
      color: "from-yellow-500 to-green-500",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "Understanding your goals, challenges, and vision through in-depth consultation",
    },
    {
      step: "02",
      title: "Planning",
      description: "Creating detailed roadmaps, wireframes, and technical specifications",
    },
    {
      step: "03",
      title: "Design",
      description: "Crafting beautiful interfaces and seamless user experiences",
    },
    {
      step: "04",
      title: "Development",
      description: "Building robust, scalable solutions with clean, maintainable code",
    },
    {
      step: "05",
      title: "Testing",
      description: "Rigorous quality assurance to ensure flawless functionality",
    },
    {
      step: "06",
      title: "Launch",
      description: "Smooth deployment and ongoing support for continued success",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-16">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24 md:mb-32">
        <div className="text-center animate-fade-in">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 zoom-in">
            Services <span className="gradient-text text-glow">&amp; Expertise</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-services-hero-description">
            Comprehensive solutions tailored to your needs, from concept to deployment and beyond
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24 md:mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <GlassCard
              key={service.title}
              className="animate-fade-in-up group flex flex-col"
              style={{ animationDelay: `${index * 100}ms` } as any}
              testId={`card-service-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300 self-start`}>
                <service.icon className="h-8 w-8 text-white" data-testid={`icon-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`} />
              </div>

              <h3 className="font-display text-2xl font-bold mb-3" data-testid={`text-service-title-${service.title.toLowerCase().replace(/\s+/g, '-')}`}>{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed flex-1" data-testid={`text-service-description-${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                {service.description}
              </p>

              <div className="space-y-2">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24 md:mb-32">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-process-description-intro">
            A proven approach that delivers exceptional results every time
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-purple-500 rounded-full hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {process.map((item, index) => (
              <div
                key={item.step}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` } as any}
              >
                <GlassCard className="relative" testId={`card-process-${index}`}>
                  <div className="absolute -top-6 left-6 w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center shadow-glow-md">
                    <span className="text-lg font-bold text-white">{item.step}</span>
                  </div>
                  <div className="pt-8">
                    <h3 className="font-display text-xl font-bold mb-2" data-testid={`text-process-title-${index}`}>{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed" data-testid={`text-process-description-${index}`}>
                      {item.description}
                    </p>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 lg:px-8">
        <GlassCard glow className="text-center animate-fade-in" testId="card-cta">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto" data-testid="text-services-cta-description">
            Let's discuss your project and explore how we can work together to achieve your goals.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="shadow-glow-md hover:shadow-glow-lg transition-all duration-300"
              data-testid="button-contact"
            >
              Get in Touch
            </Button>
          </Link>
        </GlassCard>
      </section>
    </div>
  );
}
