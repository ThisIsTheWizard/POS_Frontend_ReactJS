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

export const REGISTER_MUTATION = gql`
  mutation ($inputData: UserRegisterInputType!) {
    createAnUser(inputData: $inputData) {
      name
    }
  }
`

export const LOGIN_QUERY = gql`
  query ($queryData: UserLoginInputType!) {
    loginAccessToken(queryData: $queryData) {
      name
      loginAccessToken
    }
  }
`

export const AUTH_USER_QUERY = gql`
  query {
    authUser {
      name
      email
      createdAt
      updatedAt
    }
  }
`

export const useAuthUserQuery = () => useLazyQuery(AUTH_USER_QUERY)
