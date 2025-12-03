"use client";

import { Button, useToast } from "@/components/ui";

export default function ButtonsExample() {
  const { push } = useToast();

  return (
    <main className="p-8 max-w-xl mx-auto space-y-8">
      <h2 className="text-2xl font-semibold">Buttons</h2>

      <div className="flex flex-wrap gap-4">
        <Button>Default</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button loading>Loading</Button>
      </div>

      <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
        {`<Button>Default</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>
<Button loading>Loading</Button>`}
      </pre>
    </main>
  );
}
