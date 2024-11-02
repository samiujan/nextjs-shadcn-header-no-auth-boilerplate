import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/ui/icons"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8 flex items-center">
        <Icons.home className="mr-2" />
        Welcome to Yalt5
      </h1>
      <div className="space-x-4">
        <Button asChild>
          <Link href="/signup">Sign Up</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/signin">Sign In</Link>
        </Button>
      </div>
    </main>
  )
}