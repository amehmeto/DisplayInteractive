import { useEffect, useState } from 'react'
import './App.css'
import { UserCard } from './components/UserCard.tsx'
import { User } from './domain/user/user.model.ts'
import { dependencies } from './dependencies.ts'

function App() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    dependencies.userGateway
      .getAll()
      .then(async (response) => {
        console.log(response)
        return response
      })
      .then((users) => setUsers(users))
  }, [])

  return (
    <>
      <h1>Display Interactive Dashboard</h1>
      <br />
      <h2>Users list:</h2>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </>
  )
}

export default App
