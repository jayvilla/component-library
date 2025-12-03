"use client";

import { Tooltip } from "@/components/ui/tooltip";
import { Button } from "@/components/ui";

export default function TooltipExample() {
  return (
    <main className="p-8 max-w-xl mx-auto space-y-8">
      <h2 className="text-2xl font-semibold">Tooltip</h2>

      <Tooltip label="This is a tooltip">
        <Button variant="outline">Hover me</Button>
      </Tooltip>

      <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
        {`<Tooltip label="This is a tooltip">
  <Button variant="outline">Hover me</Button>
</Tooltip>`}
      </pre>
    </main>
  );
}
