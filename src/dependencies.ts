import { Dependencies } from './domain/ports/dependencies.ts'
import { FetchUserGateway } from './infra/gateways/fetch-user.gateway.ts'
import { FetchAlbumGateway } from './infra/gateways/fetch-album.gateway.ts'
import { createContext, useContext } from 'react'

export const dependencies: Dependencies = {
  userGateway: new FetchUserGateway(),
  albumGateway: new FetchAlbumGateway(),
}

export const DependenciesContext = createContext<Dependencies>(dependencies)

export const useDependencies = () => useContext(DependenciesContext)
