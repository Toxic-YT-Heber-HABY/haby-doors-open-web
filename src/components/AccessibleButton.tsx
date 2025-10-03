import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface AccessibleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "ghost";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  loadingText?: string;
  children: React.ReactNode;
}

const AccessibleButton = forwardRef<HTMLButtonElement, AccessibleButtonProps>(
  ({ 
    variant = "primary", 
    size = "md", 
    loading = false,
    loadingText,
    className,
    disabled,
    children,
    ...props 
  }, ref) => {
    const baseClasses = "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-haby-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 touch-manipulation";
    
    const variantClasses = {
      primary: "bg-gradient-primary text-white shadow-primary hover:shadow-accent hover:-translate-y-0.5",
      secondary: "border-2 border-haby-primary text-haby-primary bg-white shadow-md hover:bg-haby-light hover:-translate-y-0.5",
      accent: "bg-gradient-accent text-white shadow-accent hover:brightness-110 hover:-translate-y-0.5",
      ghost: "text-haby-primary hover:bg-haby-light/50"
    };

    const sizeClasses = {
      sm: "px-4 py-2 text-sm min-h-[40px]",
      md: "px-6 py-3 text-base min-h-[48px]",
      lg: "px-8 py-4 text-lg min-h-[56px]"
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        disabled={disabled || loading}
        aria-busy={loading}
        {...props}
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
            <span>{loadingText || "Cargando..."}</span>
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

AccessibleButton.displayName = "AccessibleButton";

export default AccessibleButton;