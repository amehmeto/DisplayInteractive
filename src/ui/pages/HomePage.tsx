import { useEffect, useState } from 'react'
import { User } from '../../domain/user/user.model.ts'
import { dependencies } from '../../dependencies.ts'
import { UserCard } from '../components/UserCard.tsx'
import { Spinner } from '@chakra-ui/react'

export function HomePage() {
  const [users, setUsers] = useState<User[]>()

  useEffect(() => {
    dependencies.userGateway.getAll().then((users) => setUsers(users))
  }, [])

  if (!users) return <Spinner size="xl" />

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
