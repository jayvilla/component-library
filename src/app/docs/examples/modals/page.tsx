"use client";

import { useState } from "react";
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui";
import { Button } from "@/components/ui";

export default function ModalExample() {
  const [open, setOpen] = useState(false);

  return (
    <main className="p-8 max-w-xl mx-auto space-y-8">
      <h2 className="text-2xl font-semibold">Modal / Dialog</h2>

      <Button onClick={() => setOpen(true)}>Open Modal</Button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogHeader>
          <DialogTitle>Confirm Action</DialogTitle>
        </DialogHeader>

        <p>Are you sure you want to proceed?</p>

        <DialogFooter>
          <Button variant="ghost" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setOpen(false)}>Confirm</Button>
        </DialogFooter>
      </Dialog>

      <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
        {`const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Open Modal</Button>

<Dialog open={open} onClose={() => setOpen(false)}>
  <DialogHeader>
    <DialogTitle>Confirm Action</DialogTitle>
  </DialogHeader>
  <p>Are you sure?</p>
  <DialogFooter>
    <Button variant="ghost">Cancel</Button>
    <Button>Confirm</Button>
  </DialogFooter>
</Dialog>`}
      </pre>
    </main>
  );
}
