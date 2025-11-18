import { useState } from "react";
import { Mail, MapPin, Clock, Send } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import GlassCard from "@/components/GlassCard";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "hello@pratyush.dev",
      color: "from-primary to-purple-500",
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Remote, Worldwide",
      color: "from-accent to-cyan-500",
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
            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
        <GlassCard className="animate-fade-in-up" testId="card-contact-form">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 text-center">
            Send Me a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="backdrop-blur-md bg-background/50 border-border/50 focus:border-primary/50 transition-colors"
                  data-testid="input-name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="backdrop-blur-md bg-background/50 border-border/50 focus:border-primary/50 transition-colors"
                  data-testid="input-email"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject" className="text-sm font-medium">
                Subject
              </Label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                required
                className="backdrop-blur-md bg-background/50 border-border/50 focus:border-primary/50 transition-colors"
                data-testid="input-subject"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
                rows={6}
                className="backdrop-blur-md bg-background/50 border-border/50 focus:border-primary/50 transition-colors resize-none"
                data-testid="input-message"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={contactMutation.isPending}
              className="w-full shadow-glow-md hover:shadow-glow-lg transition-all duration-300"
              data-testid="button-submit"
            >
              {contactMutation.isPending ? (
                <>
                  <span className="mr-2">Sending...</span>
                  <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                </>
              ) : (
                <>
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </GlassCard>
      </section>
    </div>
  );
}
