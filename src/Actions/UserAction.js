// import axios from 'axios'

// export const login = (user) => async (dispatch) => {
//   try {
//     // const { data } = await axios.post(
//     //   'http://localhost:8080/api/v1/users/signin',
//     //   user
//     // )
//     dispatch({ type: 'USER_LOGIN_SUCCESS', payload: {} })
//     localStorage.setItem('userInfo', JSON.stringify({}))
//   } catch (error) {
//     // dispatch({ type: 'USER_LOGIN_FAIL', payload: error.response?.data.msg })
//   }
// }

// export const SignupUser = (user) => async (dispatch) => {
//   try {
//     const { data } = await axios.post(
//       'http://localhost:8080/api/v1/users/signup',
//       user
//     )
//     localStorage.setItem('userInfo', JSON.stringify(data))
//     dispatch({ type: 'USER_SIGNUP_SUCCESS', payload: data })
//     document.location.href = '/'
//   } catch (error) {}
// }
