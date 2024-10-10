import { useEffect, useState } from 'react'
import { User } from '../../domain/user/user.model.ts'
import { useDependencies } from '../../dependencies.ts'
import { UserCard } from '../components/UserCard.tsx'
import { Spinner } from '@chakra-ui/react'

export function HomePage() {
  const [users, setUsers] = useState<User[]>()
  const { userGateway } = useDependencies()

  useEffect(() => {
    userGateway.getAll().then((_users) => setUsers(_users))
  }, [userGateway])

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
