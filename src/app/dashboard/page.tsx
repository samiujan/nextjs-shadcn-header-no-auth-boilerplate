import { redirect } from 'next/navigation'
import { getUser } from '@/lib/auth'
import { getDashboardData } from '@/lib/data'
import DashboardClient from './DashboardClient'

export default async function DashboardPage() {
  const user = await getUser()
  if (!user) {
    // Redirect to sign in page if user is not authenticated
    redirect('/signin')
  }
  
  const dashboardData = await getDashboardData(user.id)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Welcome, {user.name}</h1>
      <DashboardClient initialData={dashboardData} />
    </div>
  )
}