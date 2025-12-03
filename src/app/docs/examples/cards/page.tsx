import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui";

export default function CardsExample() {
  return (
    <main className="p-8 max-w-xl mx-auto space-y-8">
      <h2 className="text-2xl font-semibold">Cards</h2>

      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Quick description goes here.</CardDescription>
        </CardHeader>

        <CardContent>
          <p>This is the content inside the card.</p>
        </CardContent>

        <CardFooter>
          <p className="text-sm text-muted-foreground">Footer content</p>
        </CardFooter>
      </Card>

      <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
        {`<Card>
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
      <CardDescription>Quick description goes here.</CardDescription>
    </CardHeader>
    <CardContent>...</CardContent>
    <CardFooter>...</CardFooter>
  </Card>`}
      </pre>
    </main>
  );
}
