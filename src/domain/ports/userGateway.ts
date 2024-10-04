import { User } from '../user/user.model.ts'

export interface UserGateway {
  getAll(): Promise<User[]>
}
