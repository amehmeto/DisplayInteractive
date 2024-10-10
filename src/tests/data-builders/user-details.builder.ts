import { faker } from '@faker-js/faker'
import { UserDetails } from '../../domain/user/user-details.model.ts'
import { buildAlbum } from './album.builder.ts'

export function buildUserDetails({
  id = faker.number.int(),
  name = faker.person.firstName() + ' ' + faker.person.lastName(),
  username = faker.internet.userName(),
  email = faker.internet.email(),
  albums = [buildAlbum({}), buildAlbum({}), buildAlbum({})],
}: Partial<UserDetails>): UserDetails {
  return {
    id,
    name,
    email,
    username,
    albums,
  }
}
