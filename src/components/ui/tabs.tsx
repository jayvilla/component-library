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
}: HTMLAttributes<HTMLDivElement> & { orientation?: "horizontal" | "vertical" }) {
  return (
    <div
      className={cn(
        "flex",
        orientation === "vertical" ? "flex-col" : "flex-row",
