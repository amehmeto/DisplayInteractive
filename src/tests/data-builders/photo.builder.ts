import { faker } from '@faker-js/faker'
import { Photo } from '../../domain/album/photo.model.ts'

export function buildPhoto({
  id = faker.number.int(),
  albumId = faker.number.int(),
  title = faker.lorem.words(),
  url = faker.internet.url(),
  thumbnailUrl = faker.internet.url(),
}: Partial<Photo>): Photo {
  return {
    id,
    albumId,
    title,
    url,
    thumbnailUrl,
  }
}
