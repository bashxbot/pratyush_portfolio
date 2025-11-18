import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  testId?: string;
}

export default function GlassCard({ children, className, hover = true, glow = false, testId }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl backdrop-blur-xl bg-card/40 border border-border/50 p-6 md:p-8 shadow-glass transition-all duration-300",
        hover && "hover:-translate-y-1 hover:shadow-glow-sm",
        glow && "shadow-glow-sm",
        className
      )}
      data-testid={testId}
    >
      {children}
    </div>
  );
}
