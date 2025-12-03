"use client";

import { useFloating, offset, flip, shift } from "@floating-ui/react";
import { useState, useEffect, ReactNode, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface TooltipProps {
  label: string;
  children: ReactNode;
  delay?: number;
}

export function Tooltip({ label, children, delay = 300 }: TooltipProps) {
  const [open, setOpen] = useState(false);
  let timer: NodeJS.Timeout;

  const { refs, floatingStyles } = useFloating({
    placement: "top",
    middleware: [offset(8), flip(), shift()],
  });

  const show = () => {
    timer = setTimeout(() => setOpen(true), delay);
  };

  const hide = () => {
    clearTimeout(timer);
    setOpen(false);
  };

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={show}
      onMouseLeave={hide}
      ref={refs.setReference}
    >
      {children}

      {open && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          className="px-2 py-1 text-xs rounded bg-foreground text-background shadow-soft animate-fade-in"
        >
          {label}
        </div>
      )}
    </div>
  );
}
