export async function getDashboardData(userId: string) {
    // This is a placeholder. In a real app, you'd fetch this data from your database
    return {
      totalProjects: Math.floor(Math.random() * 20) + 1,
      completedTasks: Math.floor(Math.random() * 50) + 1,
      upcomingDeadlines: Math.floor(Math.random() * 10) + 1,
    }
  }