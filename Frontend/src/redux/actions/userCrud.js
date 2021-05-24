import axios from 'axios'
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
} from '../types'

export const getUsers = () => async (dispatch, getState) => {
  dispatch({ type: FETCH_USERS_REQUEST })
  // const isAuth = getState().userLogin.userLogin;
  let config = {
    headers: {
      'Content-Type': 'application/json',
      // token: isAuth ? isAuth.token : null,
    },
  }

  try {
    const { data } = await axios.get(`http://localhost:4000/users`, config)
    const arrAux = data.users.map((user, i) => {
      return { id: i, ...user }
    })
    dispatch({
      type: FETCH_USERS_SUCCESS,
      payload: arrAux,
    })
  } catch (error) {
    dispatch({
      type: FETCH_USERS_ERROR,
      error: error.toString(),
    })
  }
}

