import type { Metadata } from "next";
import "./globals.css";
import { ToastProvider } from "@/components/ui";

// 🔥 Updated Metadata for your UI Component Library
export const metadata: Metadata = {
  title: "Component Library — Tailwind UI System",
  description:
    "A modern, reusable, Tailwind-based component library built with Next.js 14, featuring buttons, inputs, modals, tooltips, tabs, dropdowns, toast system, and more.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Component Library",
    description:
      "A clean and modern Tailwind UI component library with Buttons, Inputs, Cards, Modals, Tabs, Dropdowns, Tooltips, Toasts and more.",
    url: "https://localhost:3000",
    siteName: "Component Library",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Component Library Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
