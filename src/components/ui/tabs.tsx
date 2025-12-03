"use client";

import { cn } from "@/lib/utils";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  HTMLAttributes,
} from "react";

interface TabsContextType {
  value: string;
  setValue: (v: string) => void;
}
const TabsContext = createContext<TabsContextType | null>(null);

interface TabsProps {
  defaultValue: string;
  children: ReactNode;
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export function Tabs({
  defaultValue,
  children,
  orientation = "horizontal",
  className,
}: TabsProps) {
  const [value, setValue] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ value, setValue }}>
      <div className={cn("flex flex-col gap-3", className)}>{children}</div>
    </TabsContext.Provider>
  );
}

/* -------------------------------------- */
/* TABS LIST */
/* -------------------------------------- */

export function TabsList({
  className,
  orientation = "horizontal",
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  orientation?: "horizontal" | "vertical";
}) {
  return (
    <div
      className={cn(
        "flex",
        orientation === "vertical" ? "flex-col" : "flex-row",
        "relative border-b border-foreground/10",
        className
      )}
      {...props}
    />
  );
}

/* -------------------------------------- */
/* TAB TRIGGER */
/* -------------------------------------- */

interface TabsTriggerProps extends HTMLAttributes<HTMLButtonElement> {
  value: string;
}

export function TabsTrigger({ value, className, ...props }: TabsTriggerProps) {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error("TabsTrigger must be inside Tabs");

  const active = ctx.value === value;

  return (
    <button
      onClick={() => ctx.setValue(value)}
      className={cn(
        "px-3 py-2 text-sm font-medium relative",
        active ? "text-primary" : "text-muted-foreground",
        "hover:text-foreground transition-colors",
        className
      )}
      {...props}
    >
      {props.children}

      {active && (
        <span className="absolute left-0 bottom-0 h-[2px] w-full bg-primary animate-fade-in" />
      )}
    </button>
  );
}

/* -------------------------------------- */
/* TAB CONTENT */
/* -------------------------------------- */

interface TabsContentProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
}

export function TabsContent({ value, className, ...props }: TabsContentProps) {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error("TabsContent must be inside Tabs");

  if (ctx.value !== value) return null;

  return <div className={cn("pt-2 animate-fade-in", className)} {...props} />;
}
