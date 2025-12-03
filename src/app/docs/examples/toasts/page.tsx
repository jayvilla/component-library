"use client";

import { Button } from "@/components/ui";
import { useToast } from "@/components/ui";

export default function ToastsExample() {
  const { push } = useToast();

  return (
    <main className="p-8 max-w-xl mx-auto space-y-8">
      <h2 className="text-2xl font-semibold">Toast</h2>

      <div className="flex flex-wrap gap-4">
        <Button onClick={() => push({ title: "Default Toast" })}>
          Default
        </Button>

        <Button
          onClick={() =>
            push({
              title: "Success",
              description: "Saved successfully!",
              variant: "success",
            })
          }
          variant="outline"
        >
          Success
        </Button>

        <Button
          onClick={() =>
            push({
              title: "Error",
              description: "Something went wrong.",
              variant: "error",
            })
          }
          variant="destructive"
        >
          Error
        </Button>
      </div>

      <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
        {`const { push } = useToast();

push({
  title: "Success",
  description: "Saved!",
  variant: "success",
})`}
      </pre>
    </main>
  );
}
