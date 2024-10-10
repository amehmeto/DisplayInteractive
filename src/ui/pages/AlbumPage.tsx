import { useEffect, useState } from 'react'
import { Link as RouterLink, useParams } from 'react-router-dom'
import {
  Box,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Spinner,
} from '@chakra-ui/react'
import { useDependencies } from '../../dependencies.ts'
import { Album } from '../../domain/album/album.model.ts'
import { Photo } from '../../domain/album/photo.model.ts'

export function AlbumPage() {
  const { id } = useParams()
  const [album, setAlbum] = useState<Album>()
  const [photos, setPhotos] = useState<Photo[]>()
  const { albumGateway } = useDependencies()

  useEffect(() => {
    if (!id) return

    albumGateway.getAlbumById(id).then((album) => setAlbum(album))
    albumGateway.getPhotosByAlbumId(id).then((photos) => setPhotos(photos))
  }, [id])

  if (!album || !photos) return <Spinner size="xl" />

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
        {album.title}
      </Heading>
      <SimpleGrid columns={[2, null, 3]} spacing="4" mb="6">
        {photos.map((photo) => (
          <Image key={photo.id} src={photo.thumbnailUrl} alt={photo.title} />
        ))}
      </SimpleGrid>
      <Link as={RouterLink} to={`/user/${album.userId}`} color="blue.500">
        Back to User Details
      </Link>
    </Box>
  )
}
