import { User } from '../../domain/user/user.model.ts'
import { faker } from '@faker-js/faker'

export function buildUser({
  id = faker.number.int(),
  name = faker.person.firstName() + ' ' + faker.person.lastName(),
  email = faker.internet.email(),
  website = faker.internet.url(),
  company = faker.company.name(),
  nbTodos = faker.number.int(),
  nbAlbums = faker.number.int(),
}: Partial<User>): User {
  return {
    id,
    name,
    email,
    website,
    company,
    nbTodos,
    nbAlbums,
  }
}
