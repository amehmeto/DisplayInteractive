import { UserGateway } from '../../domain/ports/userGateway.ts'
import { User } from '../../domain/user/user.model.ts'

export class FetchUserGateway implements UserGateway {
  async getAll(): Promise<User[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    return response.json()
  }
}
