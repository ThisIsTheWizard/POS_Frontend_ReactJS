const Reducers = (state, action) => {
  const { type, payload } = action

  switch (type) {
    default:
      return state

    case 'LOADING':
      return {
        ...state,
        isLoading: payload
      }

    case 'AUTH_USER':
      return {
        ...state,
        authUser: payload
      }

    case 'IS_LOGGED_IN':
      return {
        ...state,
        isLoggedIn: payload
      }
  }
}

export default Reducers
