import { useEffect, useState } from 'react'
import { User } from '../../domain/user/user.model.ts'
import { dependencies } from '../../dependencies.ts'
import { UserCard } from '../components/UserCard.tsx'

export function Home() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    dependencies.userGateway.getAll().then((users) => setUsers(users))
  }, [])

  return (
    <>
      <h1>Display Interactive Test</h1>
      <br />
      <h2>Users list:</h2>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </>
  )
}
