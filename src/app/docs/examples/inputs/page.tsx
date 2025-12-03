import { Input } from "@/components/ui";

export default function InputsExample() {
  return (
    <main className="p-8 max-w-xl mx-auto space-y-8">
      <h2 className="text-2xl font-semibold">Inputs</h2>

      <Input
        label="Email"
        placeholder="you@example.com"
        helper="We never share your email."
      />
      <Input label="Password" type="password" error="Password too short" />

      <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
        {`<Input label="Email" placeholder="you@example.com" helper="We never share your email." />
<Input label="Password" type="password" error="Password too short" />`}
      </pre>
    </main>
  );
}
