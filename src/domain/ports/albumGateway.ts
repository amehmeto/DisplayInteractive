import { Album } from '../album/album.model.ts'
import { Photo } from '../album/photo.model.ts'

export interface AlbumGateway {
  getAlbumById(albumId: string): Promise<Album>
  getPhotosByAlbumId(albumId: string): Promise<Photo[]>
}
