import { client } from '../graphql'
import { gql, useLazyQuery } from '@apollo/client'

const TOKEN_NAME = 'loginAccessToken'

export const setLoginAccessToken = (token) => {
  return localStorage.setItem(TOKEN_NAME, token) || null
}

export const getLoginAccessToken = () => {
  return localStorage.getItem(TOKEN_NAME) || null
}

export const unsetLoginAccessToken = () => {
  return localStorage.removeItem(TOKEN_NAME) || null
}

export const handleAuthentication = ({
  state,
  setLoading,
  setIsLoggedIn,
  setAuthUser
}) => {
  if (state.loginAccessToken) {
    setLoading(true)

    client
      .query({ query: AUTH_USER_QUERY })
      .then((res) => {
        const { getAnUser: authUser } = res?.data
        console.log('res', res)
        if (authUser?.name) {
          setIsLoggedIn(true)
          setAuthUser(authUser)
        }
        setLoading(false)
      })
      .catch((err) => {
        console.log(err.message)
        setLoading(false)
      })
  }
}

export const REGISTER_MUTATION = gql`
  mutation ($inputData: UserCreateInputType) {
    createAnUser(inputData: $inputData) {
      name
    }
  }
`

export const LOGIN_MUTATION = gql`
  mutation ($inputData: UserLoginInputType) {
    loginAnUser(inputData: $inputData)
  }
`

export const AUTH_USER_QUERY = gql`
  query ($queryData: UserQueryInputType) {
    getAnUser(queryData: $queryData) {
      _id
      name
      email
      createdAt
      updatedAt
    }
  }
`

export const useAuthUserQuery = () => useLazyQuery(AUTH_USER_QUERY)
