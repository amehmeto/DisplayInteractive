import { Album } from '../album/album.model.ts'

export type UserDetails = {
  id: number
  name: string
  username: string
  email: string
  albums: Album[]
}
