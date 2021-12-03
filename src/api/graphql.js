import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { getLoginAccessToken } from './auth/auth.helper'

const authLink = setContext((_, { headers }) => {
  const loginAccessToken = getLoginAccessToken()

  return {
    headers: {
      ...headers,
      authorization: loginAccessToken ? `Bearer ${loginAccessToken}` : ''
    }
  }
})

const httpLink = createHttpLink({
  uri: 'http://localhost:8000/offline/graphql'
})

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

export default client
