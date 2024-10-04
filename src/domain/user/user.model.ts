export type User = {
  id: number
  name: string
  email: string
  website: string
  company: {
    name: string
  }
  todos: number
  albums: never[]
}
