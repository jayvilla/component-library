"use client";

import {
  useFloating,
  offset,
  flip,
  shift,
  autoUpdate,
} from "@floating-ui/react";
import { cn } from "@/lib/utils";
import { useState, useRef, useEffect, ReactNode, HTMLAttributes } from "react";

interface DropdownProps {
  trigger: ReactNode;
  children: ReactNode;
}

export function Dropdown({ trigger, children }: DropdownProps) {
  const [open, setOpen] = useState(false);

  const { refs, floatingStyles } = useFloating({
    placement: "bottom-start",
    middleware: [offset(6), flip(), shift()],
    whileElementsMounted: autoUpdate,
  });

  const triggerRef = refs.setReference;
  const contentRef = refs.setFloating;

  // Close when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        !refs.reference.current?.contains(e.target as Node) &&
        !refs.floating.current?.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [refs.reference, refs.floating]);

  return (
    <div className="relative inline-block">
      <div onClick={() => setOpen(!open)} ref={triggerRef}>
        {trigger}
      </div>

      {open && (
        <div
          ref={contentRef}
          style={floatingStyles}
          className="z-50 mt-2 min-w-[180px] rounded-md border border-foreground/10 bg-background shadow-medium animate-fade-in"
        >
          {children}
        </div>
      )}
    </div>
  );
}

export function DropdownItem({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "px-3 py-2 text-sm cursor-pointer hover:bg-muted transition-colors",
        className
      )}
      {...props}
    />
  );
}
