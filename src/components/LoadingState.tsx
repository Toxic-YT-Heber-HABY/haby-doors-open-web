import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoadingStateProps {
  size?: "sm" | "md" | "lg";
  text?: string;
  fullScreen?: boolean;
  className?: string;
}

const LoadingState = ({ 
  size = "md", 
  text, 
  fullScreen = false,
  className 
}: LoadingStateProps) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12"
  };

  const containerClasses = cn(
    "flex flex-col items-center justify-center gap-4",
    fullScreen && "fixed inset-0 bg-background/80 backdrop-blur-sm z-50",
    !fullScreen && "p-8",
    className
  );

  return (
    <div className={containerClasses} role="status" aria-live="polite">
      <Loader2 
        className={cn(
          sizeClasses[size],
          "animate-spin text-haby-primary"
        )}
        aria-hidden="true"
      />
      {text && (
        <p className="text-sm text-muted-foreground font-medium">
          {text}
        </p>
      )}
      <span className="sr-only">Cargando...</span>
    </div>
  );
};

export default LoadingState;