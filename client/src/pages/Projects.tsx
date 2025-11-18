import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/GlassCard";

export default function Projects() {
  return (
    <div className="min-h-screen pt-32 pb-16 overflow-hidden">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <div className="text-center animate-fade-in">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 zoom-in">
            My <span className="gradient-text text-glow">Projects</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-delay-2" data-testid="text-projects-hero-description">
            Showcasing my latest work in web development and design. Each project is a testament to my passion for crafting elegant and efficient solutions.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 lg:px-8">
        <GlassCard
          className="animate-fade-in-up group card-tilt shadow-lg hover:shadow-xl transition-all duration-500"
          glow
          testId="card-project-vibe-coding"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md bg-primary/10 border border-primary/20 mb-6 shadow-sm">
                <span className="text-sm font-medium text-primary">Featured Project</span>
              </div>

              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground" data-testid="text-project-title">
                Firebase Realtime Database Fetcher and Editor
              </h2>

              <p className="text-lg text-muted-foreground mb-6 leading-relaxed" data-testid="text-project-description">
                A comprehensive web application for managing Firebase Realtime Database with an intuitive interface. Features include real-time data fetching, editing capabilities, and secure authentication. Built to streamline database operations with a beautiful, modern UI.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {["React", "TypeScript", "Firebase", "TailwindCSS", "Realtime Database"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-sm font-medium rounded-full backdrop-blur-md bg-secondary/10 text-secondary border border-secondary/20 shadow-xs transition-transform hover:scale-105 duration-300"
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
                    className="ripple shadow-glow-md hover:shadow-glow-lg hover:scale-105 transition-all duration-300 border border-primary/20 bg-primary/5 backdrop-blur-md text-primary hover:bg-primary/10"
                    data-testid="button-view-live"
                  >
                    <ExternalLink className="mr-2 h-5 w-5 text-primary" />
                    View Live
                  </Button>
                </a>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative group/image">
                <div className="absolute -inset-2 gradient-border rounded-2xl blur-xl opacity-50 group-hover/image:opacity-100 transition-all duration-500 will-change-opacity" />
                <div className="relative rounded-2xl overflow-hidden border-2 border-primary/20 shadow-glow-lg group-hover/image:shadow-glow-xl transition-all duration-300">
                  <img
                    src="sample1.png"
                    alt="Firebase Realtime Database Fetcher and Editor"
                    className="w-full h-auto object-cover group-hover/image:scale-105 transition-transform duration-500 will-change-transform"
                    data-testid="img-project"
                  />
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </section>

      <section className="max-w-4xl mx-auto px-6 lg:px-8 mt-24">
        <GlassCard className="text-center py-12 px-8 shadow-lg hover:shadow-xl transition-all duration-500 backdrop-blur-lg border border-primary/10" testId="card-cta">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Interested in Similar Work?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed animate-fade-in-delay-1">
            Let's collaborate and create something amazing together. I'm always eager to take on new challenges and bring innovative ideas to life.
          </p>
          <a href="/contact" className="inline-block">
            <Button
              size="lg"
              className="shadow-glow-md hover:shadow-glow-lg transition-all duration-300 border-2 border-accent hover:bg-accent/10 text-accent hover:text-accent-foreground"
              data-testid="button-contact"
            >
              Get in Touch
            </Button>
          </a>
        </GlassCard>
      </section>

      <section className="mt-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-foreground animate-fade-in-up">
            What I Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: "Frontend Development", description: "Crafting beautiful and interactive user interfaces with modern web technologies.", icon: "code" },
              { title: "Backend Development", description: "Building robust and scalable server-side applications.", icon: "server" },
              { title: "UI/UX Design", description: "Designing intuitive and user-centered experiences that delight users.", icon: "layout" },
              { title: "Database Management", description: "Efficiently managing and optimizing databases for optimal performance.", icon: "database" },
              { title: "API Integration", description: "Seamlessly integrating third-party APIs to enhance application functionality.", icon: "plug" },
              { title: "Performance Optimization", description: "Ensuring applications run smoothly and efficiently for a superior user experience.", icon: "gauge" },
            ].map((item, index) => (
              <GlassCard
                key={index}
                className="text-center p-8 h-full flex flex-col justify-center items-center shadow-md hover:shadow-lg transition-all duration-500"
                testId={`card-what-i-do-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {/* Placeholder for icons, replace with actual icon components */}
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 border-2 border-primary/20">
                  <span className="text-primary text-2xl">🚀</span>
                </div>
                <h3 className="font-display text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <footer className="mt-32 pt-16 pb-8 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Logo" className="h-10 w-auto filter invert-[0.9] sepia-[0.2] saturate-[1.5] hue-rotate-180" />
              <p className="text-muted-foreground text-lg font-medium">© 2024 Your Name. All rights reserved.</p>
            </div>
            <div className="flex gap-6">
              <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-lg font-medium">Home</a>
              <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-lg font-medium">Projects</a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-lg font-medium">Contact</a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-lg font-medium">About</a>
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.415 2.813 8.147 6.707 9.443.5.093.684-.215.684-.476 0-.231-.007-.847-.012-1.653-2.722.592-3.308-1.317-3.308-1.317-.445-1.133-1.088-1.434-1.088-1.434-.892-.608-.437-.624-.437-.624 1.073.076 1.644.775 1.644.775 0.962.775 2.531.498 3.158.383.092-.595.374-1.045.685-1.297-2.399-.276-4.917-1.198-4.917-5.342.0-1.184.426-2.15.933-2.91.093-.07.426-1.463.086-2.872 0 0-.804-.257-2.639.995-.766-.213-1.594-.319-2.426-.323-.83.004-1.658.11-2.418.323-1.835-1.251-2.637-.995-2.637-.995-.34 1.409-.126 2.809-.09 2.872.507.76.933 1.728.933 2.912 0 4.144-2.519 5.067-4.926 5.342-.385.07-.725.207-1.01.366-.292.16-.558.375-.77.622-.215.248-.41.573-.56.905-.15.33-.24.697-.24 1.096 0 .775.005 1.488.014 1.745.02.853-.438 1.563-.847 1.992-.634.772-1.323 1.013-2.416 1.094-.777.06-1.426.177-1.973.338-.547.16-1.044.38-1.46.66-.416.28-.772.637-1.06 1.06-.287.423-.518.913-.67 1.428-.15.516-.234 1.094-.234 1.692 0 3.018 1.272 4.535 2.751.835.774 1.872 1.24 3.018 1.24 1.146 0 2.183-.467 3.018-1.24.837-.773 1.875-1.24 3.018-1.24 1.146 0 2.184.467 3.018 1.24.837.773 1.875 1.24 3.018 1.24.588 0 1.152-.135 1.657-.381.505-.246.96-.572 1.317-.995-.086-1.409-.126-2.809-.09-2.872 0 0-.804-.257-2.639.995-0.766-.213-1.594-.319-2.426-.323-0.83.004-1.658.11-2.418.323-1.835-1.251-2.637-.995-2.637-.995-.34 1.409-.126 2.809-.09 2.872.507.76.933 1.728.933 2.912 0 4.144-2.519 5.067-4.926 5.342.385.07.725.207 1.01.366.292.16.558.375.77.622.215.248.41.573.56.905.15.33.24.697.24 1.096 0 1.745-.005 1.488-.014 1.745-.02.853-.438 1.563-.847 1.992-.634.772-1.323 1.013-2.416 1.094-.777.06-1.426.177-1.973.338-.547.16-1.044.38-1.46.66-.416.28-.772.637-1.06 1.06-.287.423-.518.913-.67 1.428-.15.516-.234 1.094-.234 1.692 0 3.018 1.272 4.535 2.751-.835.774-1.872 1.24-3.018 1.24-1.146 0-2.183-.467-3.018-1.24-.837-.773-1.875-1.24-3.018-1.24-1.146 0-2.184.467-3.018 1.24-.837.773-1.875 1.24-3.018 1.24-0.588 0-1.152-.135-1.657-.381-.505-.246-.96-.572-1.317-.995.086-1.409.126-2.809.09-2.872z" clipRule="evenodd" /></svg>
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-12 20h-2v-10h2v10zm-3-11c-.853 0-1.557-.67-1.557-1.5s.704-1.5 1.557-1.5c.853 0 1.557.67 1.557 1.5s-.704 1.5-1.557 1.5zm14.5 8.5h-2v-4c0-1.297-.543-2-1.5-2-.957 0-1.5.703-1.5 2v4h-2v-10h2v1.772c.719-1.167 1.98-2.272 3.5-2.272 2.358 0 3.5 1.484 3.5 4v5.5z" /></svg>
              </a>
              <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M23.443 4.125c-1.407 1.183-2.958 1.933-4.628 2.286 1.67-1.003 2.959-2.596 3.557-4.466-1.569.93-2.965 1.6-4.824 1.962-.976-1.046-2.358-1.704-3.893-1.704-2.946 0-5.335 2.39-5.335 5.335 0 .418.047.826.138 1.217-4.453-.224-8.39-2.357-10.99-5.594-.457 0.791-.718 1.712-.718 2.702 0 1.852 0.945 3.475 2.376 4.428-.877-.028-1.706-.269-2.43-.673v.078c0 2.586 1.837 4.747 4.277 5.238-.451.123-.927.189-1.414.189-.346 0-.68-.035-1.007-.097.686 2.142 2.675 3.696 5.04 3.755-1.84 1.444-4.16 2.307-6.674 2.307-.434 0-.862-.025-1.287-.076 2.457 1.574 5.378 2.485 8.558 2.485 10.266 0 15.874-8.5 15.874-15.874 0-.242-.005-.483-.014-.722.719-.515 1.347-1.163 1.853-1.892z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}