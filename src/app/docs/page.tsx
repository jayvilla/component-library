import Link from "next/link";

export default function DocsPage() {
  const items = [
    { name: "Buttons", href: "/docs/examples/buttons" },
    { name: "Inputs", href: "/docs/examples/inputs" },
    { name: "Cards", href: "/docs/examples/cards" },
    { name: "Tabs", href: "/docs/examples/tabs" },
    { name: "Toasts", href: "/docs/examples/toasts" },
    { name: "Modals", href: "/docs/examples/modals" },
    { name: "Dropdowns", href: "/docs/examples/dropdowns" },
    { name: "Tooltips", href: "/docs/examples/tooltips" },
  ];

  return (
    <main className="p-8 max-w-3xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold">Component Library Documentation</h1>
      <p className="text-muted-foreground">
        Browse the available UI components and copy usage examples.
      </p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((item) => (
          <li
            key={item.href}
            className="rounded-lg border border-foreground/10 p-4 hover:bg-muted transition"
          >
            <Link href={item.href}>
              <span className="font-medium">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
