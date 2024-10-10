import { useEffect, useState } from 'react'
import { Link as RouterLink, useParams } from 'react-router-dom'
import { useDependencies } from '../../dependencies.ts'
import { UserDetails } from '../../domain/user/user-details.model.ts'
import {
  Box,
  Heading,
  Link,
  List,
  ListItem,
  Spinner,
  Text,
} from '@chakra-ui/react'

export function UserDetailsPage() {
  const { id } = useParams()
  const [user, setUser] = useState<UserDetails>()
  const { userGateway } = useDependencies()

  useEffect(() => {
    if (!id) return
    userGateway.getUserDetailsById(id).then((user) => setUser(user))
  }, [id])

  if (!user) return <Spinner size="xl" />

  return (
    <Box
      maxW="md"
      mx="auto"
      mt="6"
      p="6"
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
    >
      <Heading as="h1" size="xl" mb="4">
        User Details
      </Heading>
      <Text fontSize="lg" mb="2">
        <strong>Name:</strong> {user.name}
      </Text>
      <Text fontSize="lg" mb="2">
        <strong>Username:</strong> {user.username}
      </Text>
      <Text fontSize="lg" mb="4">
        <strong>Email:</strong> {user.email}
      </Text>
      <Heading as="h2" size="lg" mb="4">
        Albums
      </Heading>
      <List spacing={3} mb="6">
        {user.albums.map((album) => (
          <ListItem key={album.id}>
            <Link as={RouterLink} to={`/album/${album.id}`} color="teal.500">
              {album.title}
            </Link>
          </ListItem>
        ))}
      </List>
      <Link as={RouterLink} to="/" color="blue.500">
        Back to User List
      </Link>
    </Box>
  )
}
