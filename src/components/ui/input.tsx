import { cn } from "@/lib/utils";
import { InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helper?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export function Input({
  label,
  error,
  helper,
  leftIcon,
  rightIcon,
  className,
  ...props
}: InputProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label className="text-sm font-medium">{label}</label>}

      <div
        className={cn(
          "flex items-center gap-2 rounded-md border bg-background px-3",
          "h-10 transition-colors",
          error
            ? "border-red-500"
            : "border-foreground/20 focus-within:border-primary",
          className
        )}
      >
        {leftIcon && <span className="text-foreground/60">{leftIcon}</span>}

        <input
          className={cn(
            "w-full bg-transparent outline-none text-sm placeholder:text-muted-foreground"
          )}
          {...props}
        />

        {rightIcon && <span className="text-foreground/60">{rightIcon}</span>}
      </div>

      {error && <p className="text-xs text-red-500">{error}</p>}
      {!error && helper && (
        <p className="text-xs text-muted-foreground">{helper}</p>
      )}
    </div>
  );
}
