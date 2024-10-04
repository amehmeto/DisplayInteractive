import { User } from '../user/user.model.ts'
import { UserDetails } from '../user/user-details.model.ts'

export interface UserGateway {
  getAll(): Promise<User[]>
  getUserDetailsById(id: string): Promise<UserDetails>
}
