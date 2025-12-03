"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { name: "Getting Started", href: "/docs" },

  { name: "Buttons", href: "/docs/examples/buttons" },
  { name: "Inputs", href: "/docs/examples/inputs" },
  { name: "Cards", href: "/docs/examples/cards" },
  { name: "Tabs", href: "/docs/examples/tabs" },
  { name: "Modals", href: "/docs/examples/modals" },
  { name: "Dropdowns", href: "/docs/examples/dropdowns" },
  { name: "Tooltips", href: "/docs/examples/tooltips" },
  { name: "Toasts", href: "/docs/examples/toasts" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-56 hidden md:flex flex-col gap-2 border-r border-foreground/10 p-4 sticky top-0 h-screen bg-background">
      <h2 className="text-lg font-semibold mb-4">Components</h2>

      {links.map((item) => {
        const active = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "text-sm rounded-md px-3 py-2 hover:bg-muted transition",
              active && "bg-primary text-primary-foreground hover:bg-primary"
            )}
          >
            {item.name}
          </Link>
        );
      })}
    </aside>
  );
}
