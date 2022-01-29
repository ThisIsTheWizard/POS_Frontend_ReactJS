const Reducers = (state, action) => {
  const { type, payload } = action

  switch (type) {
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

    default:
      return state
  }
}

export default Reducers
