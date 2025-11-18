import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/GlassCard";

export default function Projects() {
  return (
    <div className="min-h-screen pt-32 pb-16">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <div className="text-center animate-fade-in">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Featured <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Project</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-projects-hero-description">
            Showcasing my latest work in web development and design
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 lg:px-8">
        <GlassCard
          className="animate-fade-in-up group"
          glow
          testId="card-project-vibe-coding"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md bg-primary/10 border border-primary/20 mb-6">
                <span className="text-sm font-medium text-primary">Featured Project</span>
              </div>

              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4" data-testid="text-project-title">
                Firebase Realtime Database Fetcher and Editor
              </h2>

              <p className="text-lg text-muted-foreground mb-6 leading-relaxed" data-testid="text-project-description">
                A comprehensive web application for managing Firebase Realtime Database with an intuitive interface. Features include real-time data fetching, editing capabilities, and secure authentication. Built to streamline database operations with a beautiful, modern UI.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {["React", "TypeScript", "Firebase", "TailwindCSS", "Realtime Database"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-sm font-medium rounded-full backdrop-blur-md bg-primary/10 text-primary border border-primary/20"
                    data-testid={`badge-tech-${tech.toLowerCase().replace(/\./g, '-')}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a href="https://q-firebase-cn8y.onrender.com" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="shadow-glow-md hover:shadow-glow-lg transition-all duration-300"
                    data-testid="button-view-live"
                  >
                    <ExternalLink className="mr-2 h-5 w-5" />
                    View Live
                  </Button>
                </a>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative group/image">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary via-accent to-purple-500 rounded-2xl blur-xl opacity-50 group-hover/image:opacity-75 transition duration-300" />
                <div className="relative rounded-2xl overflow-hidden border-2 border-primary/20 shadow-glow-lg">
                  <img
                    src="/attached_assets/screenshot-1763478771499.png"
                    alt="Firebase Realtime Database Fetcher and Editor"
                    className="w-full h-auto"
                    data-testid="img-project"
                    onError={(e) => {
                      e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect width='800' height='600' fill='%23a855f7'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='32' fill='white'%3EFirebase RTDB%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </section>

      <section className="max-w-4xl mx-auto px-6 lg:px-8 mt-16">
        <GlassCard className="text-center animate-fade-in" testId="card-cta">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
            Interested in Similar Work?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Let's collaborate and create something amazing together.
          </p>
          <a href="/contact">
            <Button
              size="lg"
              className="shadow-glow-md hover:shadow-glow-lg transition-all duration-300"
              data-testid="button-contact"
            >
              Get in Touch
            </Button>
          </a>
        </GlassCard>
      </section>
    </div>
  );
}