import { FetchGateway } from './fetch.gateway.ts'
import { AlbumGateway } from '../../domain/ports/albumGateway.ts'
import { Album } from '../../domain/album/album.model.ts'
import { Photo } from '../../domain/album/photo.model.ts'

export class FetchAlbumGateway extends FetchGateway implements AlbumGateway {
  getAlbumById(albumId: string): Promise<Album> {
    return this.get(`albums/${albumId}`)
  }
  getPhotosByAlbumId(albumId: string): Promise<Photo[]> {
    return this.get(`photos?albumId=${albumId}`)
  }
}
