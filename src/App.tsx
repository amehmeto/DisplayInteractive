import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  Card,
  CardBody,
  CardHeader,
  ChakraProvider,
  Heading,
  Text,
} from '@chakra-ui/react'

type User = {
  id: number
  name: string
  email: string
  website: string
  company: {
    name: string
  }
  todos: number
  albums: never[]
}
function UserCard({ user }: { user: User }) {
  return (
    <Card
      borderWidth="0"
      borderRadius="2xl"
      boxShadow="md"
      overflow="hidden"
      maxW="sm"
      mx="auto"
      my="6"
      bg="gray.50"
      _hover={{
        boxShadow: 'lg',
        transform: 'scale(1.02)',
        transition: '0.2s ease-in-out',
      }}
    >
      <CardHeader
        bg="blue.400"
        py="4"
        px="5"
        borderTopRadius="lg"
        color="white"
      >
        <Heading size="md" textAlign="center">
          {user.name}
        </Heading>
      </CardHeader>
      <CardBody textAlign="left" p="6" bg="lightblue:100">
        <Text fontSize="sm" color="gray.600" mb="2">
          <strong>Email:</strong> {user.email}
        </Text>
        <Text fontSize="sm" color="gray.600" mb="2">
          <strong>Website:</strong> {user.website}
        </Text>
        <Text fontSize="sm" color="gray.600" mb="2">
          <strong>Company:</strong> {user.company.name}
        </Text>
        <Text fontSize="sm" color="gray.600">
          <strong>Todos:</strong> {user.todos}
        </Text>
      </CardBody>
    </Card>
  )
}

function App() {
  const [count, setCount] = useState(0)
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(async (response) => {
        const temp = await response.json()
        console.log(temp)
        return temp
      })
      .then((json) => setUsers(json))
  }, [])

  return (
    <ChakraProvider>
      <h1>Display Interactive Dashboard</h1>
      <h2>Liste des utilisateurs</h2>
      <ul>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </ul>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </ChakraProvider>
  )
}

export default App
