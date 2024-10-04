import { Card, CardBody, CardHeader, Heading, Text } from '@chakra-ui/react'
import { User } from '../domain/user/user.model.ts'

export function UserCard({ user }: { user: User }) {
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
