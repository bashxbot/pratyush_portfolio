import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Apply dark theme immediately when loading screen mounts
    document.documentElement.classList.add("dark");

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background dark">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-purple-500/10 animate-pulse" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 text-center space-y-8 px-6">
        <div className="space-y-4">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-purple-500 blur-2xl opacity-50 animate-pulse" />
            <h1 className="relative font-display text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary via-accent to-purple-500 bg-clip-text text-transparent">
              P
            </h1>
          </div>
          <p className="text-muted-foreground text-lg font-medium">
            Loading experience...
          </p>
        </div>

        <div className="w-64 mx-auto">
          <div className="h-1 bg-border/30 rounded-full overflow-hidden backdrop-blur-sm">
            <div
              className="h-full bg-gradient-to-r from-primary via-accent to-purple-500 transition-all duration-300 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            >
              <div className="w-full h-full bg-white/30 animate-pulse" />
            </div>
          </div>
          <div className="mt-2 text-sm text-muted-foreground font-medium">
            {progress}%
          </div>
        </div>
      </div>
    </div>
  );
}