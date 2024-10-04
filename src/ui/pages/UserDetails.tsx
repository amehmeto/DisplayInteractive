import { useParams } from 'react-router-dom'

export function UserDetails() {
  const { id } = useParams()

  return <h1>User Details</h1>
}
