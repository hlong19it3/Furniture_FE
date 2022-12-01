export const UserSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case 'USER_LOGIN_SUCCESS':
      return { ...state, userInfo: action.payload }
    case 'USER_LOGIN_FAIL':
      return { ...state, error: action.payload }
    default:
      return state
  }
}
