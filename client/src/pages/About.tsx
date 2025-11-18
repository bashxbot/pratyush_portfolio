import { Award, Target, Heart, Lightbulb } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import profileImage from "@assets/generated_images/Professional_profile_placeholder_photo_954f5aa3.png";

export default function About() {
  const timeline = [
    {
      year: "2024",
      title: "Senior Developer & Design Lead",
      description: "Leading innovative projects and mentoring creative teams",
    },
    {
      year: "2022",
      title: "Full-Stack Developer",
      description: "Built scalable applications for diverse clients worldwide",
    },
    {
      year: "2020",
      title: "Frontend Specialist",
      description: "Focused on creating exceptional user experiences",
    },
    {
      year: "2018",
      title: "Started Creative Journey",
      description: "Began exploring the intersection of code and design",
    },
  ];

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering the highest quality in every project",
      color: "from-primary to-purple-500",
    },
    {
      icon: Target,
      title: "Focus",
      description: "Dedicated attention to detail and user-centered design",
      color: "from-accent to-cyan-500",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Genuine love for creating meaningful digital experiences",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always exploring new technologies and creative solutions",
      color: "from-pink-500 to-orange-500",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-16">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24 md:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-in order-2 lg:order-1">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Pratyush</span>
            </h1>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p data-testid="text-about-intro-1">
                I'm a creative developer and designer passionate about crafting exceptional digital experiences that blend aesthetic beauty with functional excellence.
              </p>
              <p data-testid="text-about-intro-2">
                With a unique combination of technical expertise and creative vision, I transform complex ideas into elegant solutions that users love. My approach emphasizes attention to detail, modern design principles, and cutting-edge technology.
              </p>
              <p data-testid="text-about-intro-3">
                Whether it's building scalable web applications, designing immersive user interfaces, or optimizing performance, I'm dedicated to pushing boundaries and exceeding expectations.
              </p>
            </div>
          </div>

          <div className="animate-fade-in-up order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-50 group-hover:opacity-75 transition duration-300" />
              <div className="relative rounded-full overflow-hidden border-4 border-primary/20 shadow-glow-lg">
                <img
                  src={profileImage}
                  alt="Pratyush"
                  className="w-full aspect-square object-cover"
                  data-testid="img-profile"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24 md:mb-32">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-journey-description">
            A timeline of growth, learning, and creative evolution
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-purple-500 transform -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`relative animate-fade-in-up ${
                  index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
                }`}
                style={{ animationDelay: `${index * 100}ms` } as any}
              >
                <GlassCard className="inline-block max-w-lg" testId={`card-timeline-${index}`}>
                  <div className="absolute top-1/2 -translate-y-1/2 hidden md:block">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent shadow-glow-md ${
                      index % 2 === 0 ? "-right-8" : "-left-8"
                    }`} />
                  </div>
                  <div className="text-sm font-bold text-primary mb-2" data-testid={`text-timeline-year-${index}`}>{item.year}</div>
                  <h3 className="font-display text-xl font-bold mb-2" data-testid={`text-timeline-title-${index}`}>{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed" data-testid={`text-timeline-description-${index}`}>{item.description}</p>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Core Values
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-values-description">
            The principles that guide my work and creative process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <GlassCard
              key={value.title}
              className="animate-fade-in-up group"
              style={{ animationDelay: `${index * 100}ms` } as any}
              testId={`card-value-${value.title.toLowerCase()}`}
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${value.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <value.icon className="h-8 w-8 text-white" data-testid={`icon-value-${value.title.toLowerCase()}`} />
              </div>
              <h3 className="font-display text-2xl font-bold mb-3" data-testid={`text-value-title-${value.title.toLowerCase()}`}>{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed" data-testid={`text-value-description-${value.title.toLowerCase()}`}>
                {value.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </section>
    </div>
  );
}
