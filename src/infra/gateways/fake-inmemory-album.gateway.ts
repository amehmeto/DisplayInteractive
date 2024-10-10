import { AlbumGateway } from '../../domain/ports/albumGateway.ts'
import { Album } from '../../domain/album/album.model.ts'
import { Photo } from '../../domain/album/photo.model.ts'
import { buildAlbum } from '../../tests/data-builders/album.builder.ts'
import { buildPhoto } from '../../tests/data-builders/photo.builder.ts'

export class FakeAlbumGateway implements AlbumGateway {
  albums: Map<number, Album> = new Map(
    [buildAlbum({}), buildAlbum({}), buildAlbum({})].map((album) => [
      album.id,
      album,
    ]),
  )

  photos: Map<number, Photo> = new Map(
    Array.from(this.albums.values()).map((album) => [
      Math.random(),
      buildPhoto({
        albumId: album.id,
      }),
    ]),
  )

  getAlbumById(albumId: string): Promise<Album> {
    const userDetails = this.albums.get(+albumId)
    if (!userDetails) throw new Error('User Details not found')
    return Promise.resolve(userDetails)
  }

  getPhotosByAlbumId(albumId: string): Promise<Photo[]> {
    const photos = Array.from(this.photos.values()).filter(
      (photo) => photo.albumId === +albumId,
    )
    if (!photos) throw new Error('User Details not found')
    return Promise.resolve(photos)
  }
}
