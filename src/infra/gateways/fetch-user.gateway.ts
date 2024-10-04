import { UserGateway } from '../../domain/ports/userGateway.ts'
import { User } from '../../domain/user/user.model.ts'

export class FetchUserGateway implements UserGateway {
  private BASE_URL = 'https://jsonplaceholder.typicode.com/'

  async getAll(): Promise<User[]> {
    const rawUsers = await this.get('users')
    const users = await rawUsers.json()

    // eslint-disable-next-line
    return Promise.all(
      users.map(async (user: any) => {
        const rawTodos = await this.getTodos(user.id)
        const todos = await rawTodos.json()

        const rawAlbums = await this.getTodos(user.id)
        const albums = await rawAlbums.json()

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

  private async get(query: string) {
    return fetch(this.BASE_URL + query)
  }

  private async getTodos(userId: string) {
    return this.get(`todos?userId=${userId}`)
  }
}
