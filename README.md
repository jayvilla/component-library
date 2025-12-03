# 🎨 Component Library — Tailwind + Next.js UI System

A modern, reusable component library built with **Next.js 14**, **Tailwind CSS v4**, and a clean design-token system.  
Inspired by libraries like **ShadCN/UI**, **Radix Primitives**, and **Chakra UI**, this project provides a flexible set of components you can use across any app.

---

## 🚀 Features

- **Modern Tailwind v4 design system**
- **Dark + Light mode support**
- **Reusable UI primitives** (Buttons, Inputs, Cards, etc.)
- **Accessible components** (Tabs, Tooltip, Dialog)
- **Toast system with variants + stacking**
- **Dropdown with floating-ui positioning**
- **Fully documented example pages**
- Clean folder structure
- Built on Next.js App Router

---

## 🧱 Tech Stack

- **Next.js 14 (App Router)**
- **React 18**
- **Tailwind CSS v4**
- **floating-ui** (Popover & Tooltip positioning)
- **TypeScript**
- **clsx + tailwind-merge** (class merging)
- **Design tokens** via CSS variables

---

## 📁 Project Structure

```bash
src/
  app/
    layout.tsx
    globals.css
    docs/
      layout.tsx
      sidebar.tsx
      page.tsx
      examples/
        buttons/
        inputs/
        cards/
        tabs/
        modals/
        dropdowns/
        tooltips/
        toasts/
  components/
    ui/
      button.tsx
      input.tsx
      card.tsx
      tabs.tsx
      dialog.tsx
      dropdown.tsx
      tooltip.tsx
      toast/
        toast.tsx
        toast-provider.tsx
  lib/
    utils.ts
```

## 🛠 Installation

Clone the repository:

```bash
git clone <your-repo-url>
cd component-library
```

### Install dependencies using pnpm:

```bash
pnpm install
```

### Start the Next.js development server:

```bash
pnpm dev
```

### Your component documentation will be available at:

```base
http://localhost:3000/docs
```

### Example pages for individual components

```bash
/docs/examples/buttons
/docs/examples/inputs
/docs/examples/cards
/docs/examples/tabs
/docs/examples/modals
/docs/examples/dropdowns
/docs/examples/tooltips
/docs/examples/toasts
```
