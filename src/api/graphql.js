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
  uri:
    process.env.API_URL ||
    'https://pos-backend-apollo-server.herokuapp.com/graphql'
})

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

export default client
