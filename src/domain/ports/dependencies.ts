import { UserGateway } from './userGateway.ts'
import { AlbumGateway } from './albumGateway.ts'

export type Dependencies = {
  userGateway: UserGateway
  albumGateway: AlbumGateway
}
