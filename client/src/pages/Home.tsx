import { useEffect, useRef, useState } from "react";
import { ArrowRight, Code, Palette, Zap, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/GlassCard";
import heroBackground from "@assets/generated_images/Futuristic_hero_background_gradient_88dd0bd1.png";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
          y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const skills = [
    {
      icon: Code,
      title: "Development",
      description: "Building scalable applications with modern frameworks and best practices",
      color: "from-primary to-purple-500",
    },
    {
      icon: Palette,
      title: "Design",
      description: "Creating stunning user experiences with attention to every detail",
      color: "from-accent to-cyan-500",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing for speed and efficiency without compromising quality",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const featuredProjects = [
    {
      title: "Firebase Realtime Database Fetcher and Editor",
      description: "A comprehensive web application for managing Firebase Realtime Database with an intuitive interface. Features real-time data fetching, editing capabilities, and secure authentication.",
      tech: ["React", "TypeScript", "Firebase", "TailwindCSS", "Realtime Database"],
      gradient: "from-primary/20 to-purple-500/20",
      link: "https://q-firebase-cn8y.onrender.com",
    },
  ];

  return (
    <div className="min-h-screen">
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url(${heroBackground})`,
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md bg-primary/10 border-2 border-primary/40 mb-8 mt-16 border-glow-animate" data-testid="badge-availability">
              <Sparkles className="h-4 w-4 text-primary animate-glow-pulse" />
              <span className="text-sm font-medium text-primary" data-testid="text-availability">Available for new projects</span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-glow-pulse">
                Creative Developer
              </span>
              <br />
              <span className="text-foreground">& Designer</span>
              <br />
              <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent animate-glow-pulse">
                and Expert Vibe Coder
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed" data-testid="text-hero-description">
              Transforming ideas into exceptional digital experiences with the help of AI tools, innovative design, and cutting-edge technology
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="group relative overflow-hidden px-8 py-6 text-lg shadow-glow-md hover:shadow-glow-lg transition-all duration-300"
                  data-testid="button-get-in-touch"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get in Touch
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </Link>
              <Link href="/projects">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-6 text-lg backdrop-blur-md bg-background/50 hover:bg-background/80 border-primary/30 hover:border-primary/50 transition-all duration-300"
                  data-testid="button-view-work"
                >
                  View My Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              What I Do
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-skills-description">
              Combining technical expertise with creative vision to deliver outstanding results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <GlassCard
                key={skill.title}
                className="group text-center card-tilt hover:shadow-glow-lg transition-all duration-300"
                testId={`card-skill-${skill.title.toLowerCase()}`}
              >
                <div className={`inline-flex p-6 rounded-3xl bg-gradient-to-br ${skill.color} mb-6 group-hover:scale-110 group-hover:shadow-glow-md animate-float transition-all duration-300`}>
                  <skill.icon className="h-12 w-12 text-white" data-testid={`icon-skill-${skill.title.toLowerCase()}`} />
                </div>
                <h3 className="font-display text-2xl font-bold mb-3" data-testid={`text-skill-title-${skill.title.toLowerCase()}`}>{skill.title}</h3>
                <p className="text-muted-foreground leading-relaxed" data-testid={`text-skill-description-${skill.title.toLowerCase()}`}>
                  {skill.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Featured Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-projects-description">
              A selection of recent projects that showcase my skills and passion
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 max-w-2xl mx-auto">
            {featuredProjects.map((project, index) => (
              <a
                key={project.title}
                href={project.link}
                target={project.link.startsWith('http') ? "_blank" : undefined}
                rel={project.link.startsWith('http') ? "noopener noreferrer" : undefined}
                className="block"
              >
                <GlassCard
                  className="group animate-fade-in-up overflow-hidden h-full hover:shadow-glow-lg transition-all duration-300 cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` } as any}
                  testId={`card-project-${index}`}
                >
                  <div className="w-full h-48 rounded-2xl mb-6 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    <img
                      src="/sample1.png"
                      alt={project.title}
                      className="w-full h-auto"
                      data-testid="img-featured-project"
                    />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-2" data-testid={`text-project-title-${index}`}>{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed" data-testid={`text-project-description-${index}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full backdrop-blur-md bg-primary/10 text-primary border border-primary/20"
                        data-testid={`badge-tech-${tech.toLowerCase().replace(/\./g, '-')}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </a>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/projects">
              <Button
                variant="outline"
                className="backdrop-blur-md bg-background/50 hover:bg-background/80 border-primary/30 hover:border-primary/50"
                data-testid="button-view-all-projects"
              >
                Get More Details
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 relative">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <GlassCard glow className="animate-fade-in" testId="card-cta">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Let's Create Something
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed" data-testid="text-cta-description">
              Ready to bring your vision to life? Let's discuss your project and create an exceptional digital experience.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="shadow-glow-md hover:shadow-glow-lg transition-all duration-300"
                data-testid="button-start-project"
              >
                Start a Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}