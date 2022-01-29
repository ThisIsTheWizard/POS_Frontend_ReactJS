import React, { useCallback, useEffect, useReducer } from 'react'
import {
  handleAuthentication,
  getLoginAccessToken
} from '../api/auth/auth.helper'

import AppContext from './Context'
import AppReducer from './Reducer'

// import { toast } from 'react-toastify'

const AppState = ({ children }) => {
  // States
  const [state, dispatch] = useReducer(AppReducer, {
    authUser: {},
    isLoggedIn: false,
    isLoading: false,
    loginAccessToken: getLoginAccessToken()
  })

  // Actions
  const setLoading = useCallback(
    (value) => {
      dispatch({
        type: 'LOADING',
        payload: value
      })
    },
    [dispatch]
  )
  const setAuthUser = useCallback(
    (value) => {
      dispatch({
        type: 'AUTH_USER',
        payload: value
      })
    },
    [dispatch]
  )
  const setIsLoggedIn = useCallback(
    (value) => {
      dispatch({
        type: 'IS_LOGGED_IN',
        payload: value
      })
    },
    [dispatch]
  )
  const actions = { setLoading, setIsLoggedIn, setAuthUser }

  const handleAuthenticationFromState = useCallback(() => {
    handleAuthentication({ state, setLoading, setIsLoggedIn, setAuthUser })
  }, [state, setLoading, setIsLoggedIn, setAuthUser])

  useEffect(() => {
    handleAuthenticationFromState()
    // eslint-disable-next-line
  }, [])

  return (
    <AppContext.Provider value={{ ...state, ...actions }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppState
