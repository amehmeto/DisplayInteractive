import { UserGateway } from '../../domain/ports/userGateway.ts'
import { User } from '../../domain/user/user.model.ts'
import { UserDetails } from '../../domain/user/user-details.model.ts'
import { buildUser } from '../../tests/data-builders/user.builder.ts'
import { buildUserDetails } from '../../tests/data-builders/user-details.builder.ts'
import { buildAlbum } from '../../tests/data-builders/album.builder.ts'

export class FakeUserGateway implements UserGateway {
  users: Map<number, User> = new Map(
    [
      buildUser({
        name: 'John Doe',
      }),
      buildUser({
        name: 'Jane Smith',
      }),
      buildUser({}),
      buildUser({}),
      buildUser({}),
    ].map((user) => [user.id, user]),
  )

  userDetails: Map<number, UserDetails> = new Map(
    Array.from(this.users.values()).map((user) => [
      Math.random(),
      buildUserDetails({
        name: user.name,
        email: user.email,
        albums: [
          buildAlbum({
            userId: user.id,
          }),
          buildAlbum({
            userId: user.id,
          }),
          buildAlbum({
            userId: user.id,
          }),
        ],
      }),
    ]),
  )

  getAll(): Promise<User[]> {
    return Promise.resolve(Array.from(this.users.values()))
  }

  getUserDetailsById(userId: string): Promise<UserDetails> {
    const userDetails = this.userDetails.get(+userId)
    if (!userDetails) throw new Error('User Details not found')
    return Promise.resolve(userDetails)
  }
}
