import { Dependencies } from './domain/ports/dependencies.ts'
import { FetchUserGateway } from './infra/gateways/fetch-user.gateway.ts'
import { FetchAlbumGateway } from './infra/gateways/fetch-album.gateway.ts'

export const dependencies: Dependencies = {
  userGateway: new FetchUserGateway(),
  albumGateway: new FetchAlbumGateway(),
}
