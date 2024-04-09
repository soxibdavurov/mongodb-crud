import TopicsList from '@/components/TopicsList'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

export default async function Home() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/signIn')
  }

  return (
    <>
      <h1 className="text-3xl font-bold">WebDev Topics</h1>
      <p className="mb-4">MongoDB CRUD Example</p>
      <TopicsList />
    </>
  )
}
