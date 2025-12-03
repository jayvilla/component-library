import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export interface ToastProps {
  id: string;
  title?: string;
  description?: string;
  variant?: "default" | "success" | "error" | "warning" | "info";
}

export function Toast({
  title,
  description,
  variant = "default",
}: ToastProps & HTMLAttributes<HTMLDivElement>) {
  const variantClasses = {
    default: "bg-foreground text-background",
    success: "bg-green-600 text-white",
    error: "bg-red-600 text-white",
    warning: "bg-yellow-600 text-white",
    info: "bg-blue-600 text-white",
  };

  return (
    <div
      className={cn(
        "rounded-md p-4 shadow-medium animate-fade-in",
        variantClasses[variant]
      )}
    >
      {title && <p className="font-semibold">{title}</p>}
      {description && <p className="text-sm opacity-90 mt-1">{description}</p>}
    </div>
  );
}
