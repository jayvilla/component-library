"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function TabsExample() {
  return (
    <main className="p-8 max-w-xl mx-auto space-y-10">
      <h2 className="text-2xl font-semibold">Tabs</h2>

      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>

        <TabsContent value="account">Manage your account settings.</TabsContent>

        <TabsContent value="password">Update your password here.</TabsContent>

        <TabsContent value="billing">Billing info goes here.</TabsContent>
      </Tabs>

      <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
        {`<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
    <TabsTrigger value="billing">Billing</TabsTrigger>
  </TabsList>
  
  <TabsContent value="account">...</TabsContent>
  <TabsContent value="password">...</TabsContent>
  <TabsContent value="billing">...</TabsContent>
</Tabs>`}
      </pre>
    </main>
  );
}
