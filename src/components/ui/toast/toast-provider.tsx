"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Toast, ToastProps } from "./toast";

interface ToastContextType {
  push: (toast: Omit<ToastProps, "id">) => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be inside ToastProvider");
  return ctx;
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const push = (toast: Omit<ToastProps, "id">) => {
    const id = crypto.randomUUID();
    const newToast = { ...toast, id };

    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  };

  return (
    <ToastContext.Provider value={{ push }}>
      {children}

      {/* Toast stack */}
      <div className="fixed right-4 bottom-4 space-y-3 z-[999]">
        {toasts.map((t) => (
          <Toast key={t.id} {...t} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}
