import { NextResponse } from 'next/server'
import { getUser } from '@/lib/auth'
import { getDashboardData } from '@/lib/data'

export async function GET() {
  const user = await getUser()
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  
  const dashboardData = await getDashboardData(user.id)
  return NextResponse.json(dashboardData)
}