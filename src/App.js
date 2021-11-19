import { gql, useQuery } from '@apollo/client'
import './App.css'

const GET_MULTILPLE_USERS = gql`
  query {
    users {
      _id
      name
      email
    }
  }
`

const App = () => {
  const { loading, error, data } = useQuery(GET_MULTILPLE_USERS)
  const users = () => {
    if (loading) {
      return 'Loading...'
    } else if (error) {
      return error.message
    } else if (data) {
      return data.users.map((d) => <div key={d._id}>{d.name}</div>)
    }
  }
  return (
    <div>
      <div>{users()}</div>
    </div>
  )
}

export default App
