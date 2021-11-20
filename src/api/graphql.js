import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
  uri: 'http://localhost:8000/offline/graphql'
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlcyI6WyJhcHBfYWRtaW4iXSwiZGF0YSI6eyJ1c2VySWQiOiJTWVNURU0iLCJzeXN0ZW0iOiJ2Mi11bC1zZXJ2aWNlLWRldi1jcmVhZGl0LXJhdGluZyJ9fQ.UdPOgl8nrWZTAvmsBHChOqbVpWpHFclN5PzV58gap1g'
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

export default client
