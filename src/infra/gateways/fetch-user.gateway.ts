import { UserGateway } from '../../domain/ports/userGateway.ts'
import { User } from '../../domain/user/user.model.ts'
import { UserDetails } from '../../domain/user/user-details.model.ts'
import { FetchGateway } from './fetch.gateway.ts'

export class FetchUserGateway extends FetchGateway implements UserGateway {
  async getAll(): Promise<User[]> {
    const users = await this.get('users')

    return Promise.all(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      users.map(async (user: any) => {
        const todos = await this.getTodos(user.id)
        const albums = await this.getTodos(user.id)

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          website: user.website,
          company: user.company.name,
          nbTodos: todos.length,
          nbAlbums: albums.length,
        }
      }),
    )
  }

  private async getTodos(userId: string) {
    return this.get(`todos?userId=${userId}`)
  }

  async getUserDetailsById(userId: string): Promise<UserDetails> {
    const user = await this.getUserById(userId)
    const albums = await this.getUserAlbums(userId)

    return {
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      albums: albums.map((album: any) => ({
        id: album.id,
        title: album.title,
      })),
    }
  }

  private getUserAlbums(userId: string) {
    return this.get(`albums?userId=${userId}`)
  }

  private getUserById(userId: string) {
    return this.get(`users/${userId}`)
  }
}
