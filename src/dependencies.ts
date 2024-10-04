import { Dependencies } from './domain/ports/dependencies.ts'
import { FetchUserGateway } from './infra/gateways/fetch-user.gateway.ts'

export const dependencies: Dependencies = {
  userGateway: new FetchUserGateway(),
}
