import { Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/GlassCard";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "hello@pratyush.dev",
      color: "from-primary to-purple-500",
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "Within 24 hours",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-16">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <div className="text-center animate-fade-in">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Let's <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Connect</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-contact-hero-description">
            Have a project in mind? I'd love to hear about it. Reach out directly via email.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {contactInfo.map((info, index) => (
            <GlassCard
              key={info.title}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` } as any}
              testId={`card-info-${info.title.toLowerCase()}`}
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${info.color} mb-4`}>
                <info.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2" data-testid={`text-contact-info-title-${info.title.toLowerCase()}`}>{info.title}</h3>
              <p className="text-muted-foreground" data-testid={`text-contact-info-details-${info.title.toLowerCase()}`}>{info.details}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 lg:px-8">
        <GlassCard className="text-center animate-fade-in-up" glow testId="card-contact-cta">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">
            Ready to Start a Conversation?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            Send me an email and let's discuss how we can work together to bring your ideas to life.
          </p>
          <a href="mailto:hello@pratyush.dev">
            <Button
              size="lg"
              className="shadow-glow-md hover:shadow-glow-lg transition-all duration-300"
              data-testid="button-email"
            >
              Send Email
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </GlassCard>
      </section>
    </div>
  );
}