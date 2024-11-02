import Link from 'next/link'
import { getUser } from '@/lib/auth'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default async function Header() {
  const user = await getUser()

  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Yalt5
        </Link>
        {user ? (
          <div className="flex items-center space-x-4">
            <span className="text-foreground">{user.name}</span>
            <Avatar>
              <AvatarImage src={user.image} alt={user.name} />
              <AvatarFallback>{user.name[0]}</AvatarFallback>
            </Avatar>
            <Button variant="ghost" asChild>
              <Link href="/api/auth/signout">Sign Out</Link>
            </Button>
          </div>
        ) : (
          <div className="space-x-2">
            <Button asChild variant="ghost">
              <Link href="/signin">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}