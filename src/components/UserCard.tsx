import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Link,
  Text,
} from '@chakra-ui/react'
import { User } from '../domain/user/user.model.ts'

export function UserCard({ user }: { user: User }) {
  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  return (
    <Card
      borderWidth="2px"
      borderColor="transparent"
      borderRadius="2xl"
      boxShadow="md"
      overflow="hidden"
      maxW="sm"
      mx="auto"
      my="6"
      bg="gray.50"
      cursor="pointer"
      _hover={{
        boxShadow: 'lg',
        transform: 'scale(1.02)',
        transition: '0.2s ease-in-out',
        border: '2px solid lightblue',
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
          <strong>Website:</strong>{' '}
          <Link href={'https://' + user.website} isExternal>
            {capitalizeFirstLetter(user.website)}
          </Link>
        </Text>
        <Text fontSize="sm" color="gray.600" mb="2">
          <strong>Company:</strong> {user.company}
        </Text>
        <Text fontSize="sm" color="gray.600" mb="2">
          <strong>Todos:</strong> {user.nbTodos}
        </Text>
        <Text fontSize="sm" color="gray.600" mb="2">
          <strong>Albums:</strong> {user.nbAlbums}
        </Text>
      </CardBody>
    </Card>
  )
}
