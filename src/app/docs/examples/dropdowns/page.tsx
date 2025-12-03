"use client";

import { Dropdown, DropdownItem } from "@/components/ui/dropdown";
import { Button } from "@/components/ui";

export default function DropdownExample() {
  return (
    <main className="p-8 max-w-xl mx-auto space-y-8">
      <h2 className="text-2xl font-semibold">Dropdown</h2>

      <Dropdown trigger={<Button variant="outline">Open Dropdown</Button>}>
        <DropdownItem>Profile</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem className="text-red-600">Logout</DropdownItem>
      </Dropdown>

      <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
        {`<Dropdown trigger={<Button>Menu</Button>}>
  <DropdownItem>Profile</DropdownItem>
  <DropdownItem>Settings</DropdownItem>
  <DropdownItem className="text-red-600">Logout</DropdownItem>
</Dropdown>`}
      </pre>
    </main>
  );
}
