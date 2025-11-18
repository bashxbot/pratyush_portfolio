import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/GlassCard";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Web Apps", "Design", "Mobile"];

  const projects = [
    {
      title: "AI Analytics Dashboard",
      description: "Comprehensive analytics platform with real-time data visualization, machine learning insights, and predictive modeling capabilities.",
      category: "Web Apps",
      tech: ["React", "TypeScript", "D3.js", "TailwindCSS"],
      gradient: "from-primary/30 to-purple-500/30",
      link: "#",
      github: "#",
    },
    {
      title: "E-Commerce Platform",
      description: "Full-featured online shopping platform with advanced search, personalized recommendations, and seamless checkout experience.",
      category: "Web Apps",
      tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
      gradient: "from-accent/30 to-cyan-500/30",
      link: "#",
      github: "#",
    },
    {
      title: "Creative Portfolio Site",
      description: "Immersive portfolio website showcasing creative work with stunning animations and interactive 3D elements.",
      category: "Design",
      tech: ["React", "Three.js", "Framer Motion", "GSAP"],
      gradient: "from-purple-500/30 to-pink-500/30",
      link: "#",
      github: "#",
    },
    {
      title: "Fitness Tracking App",
      description: "Mobile-first fitness application with workout tracking, nutrition planning, and progress analytics.",
      category: "Mobile",
      tech: ["React Native", "Firebase", "Redux", "Chart.js"],
      gradient: "from-pink-500/30 to-orange-500/30",
      link: "#",
      github: "#",
    },
    {
      title: "SaaS Dashboard",
      description: "Modern SaaS platform for team collaboration with real-time updates, task management, and analytics.",
      category: "Web Apps",
      tech: ["Vue.js", "Express", "MongoDB", "Socket.io"],
      gradient: "from-orange-500/30 to-yellow-500/30",
      link: "#",
      github: "#",
    },
    {
      title: "Brand Identity System",
      description: "Complete brand identity design including logo, color palette, typography, and design guidelines.",
      category: "Design",
      tech: ["Figma", "Adobe Suite", "Design Systems"],
      gradient: "from-yellow-500/30 to-green-500/30",
      link: "#",
      github: "#",
    },
  ];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="min-h-screen pt-32 pb-16">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Featured <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A curated collection of projects showcasing my expertise in development, design, and creative problem-solving
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <div className="flex flex-wrap justify-center gap-3 animate-fade-in-up">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 transition-all duration-300 ${
                activeFilter === filter
                  ? "shadow-glow-md"
                  : "backdrop-blur-md bg-background/50 hover:bg-background/80 border-primary/30 hover:border-primary/50"
              }`}
              data-testid={`button-filter-${filter.toLowerCase().replace(" ", "-")}`}
            >
              {filter}
            </Button>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <GlassCard
              key={project.title}
              className="animate-fade-in-up group flex flex-col"
              style={{ animationDelay: `${index * 100}ms` } as any}
              testId={`card-project-${index}`}
            >
              <div className={`w-full h-56 rounded-2xl bg-gradient-to-br ${project.gradient} mb-6 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300 relative`}>
                <div className="text-8xl font-bold text-white/10">{project.title.charAt(0)}</div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-3">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="icon"
                      variant="outline"
                      className="backdrop-blur-md bg-white/90 hover:bg-white border-white/50"
                      data-testid={`button-view-${index}`}
                    >
                      <ExternalLink className="h-5 w-5 text-foreground" />
                    </Button>
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="icon"
                      variant="outline"
                      className="backdrop-blur-md bg-white/90 hover:bg-white border-white/50"
                      data-testid={`button-github-${index}`}
                    >
                      <Github className="h-5 w-5 text-foreground" />
                    </Button>
                  </a>
                </div>
              </div>

              <div className="flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full backdrop-blur-md bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>
    </div>
  );
}
