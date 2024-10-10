import { faker } from '@faker-js/faker'
import { Album } from '../../domain/album/album.model.ts'

export function buildAlbum({
  id = faker.number.int(),
  userId = faker.number.int(),
  title = faker.lorem.words(),
}: Partial<Album>): Album {
  return {
    id,
    userId,
    title,
  }
}
