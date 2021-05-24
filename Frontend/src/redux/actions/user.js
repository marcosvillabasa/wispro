import axios from 'axios'
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_LOGOUT,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from '../types'
const { REACT_APP_BACKEND_URL } = process.env

export const login = (email, password) => async dispatch => {
  dispatch({
    type: USER_LOGIN_REQUEST,
  })
  let config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  axios
    .post(`http://localhost:4000/login`, { email, password }, config)
    .then(resp => {
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: {
          id: resp.data.user._id,
          nombre: resp.data.user.nombre,
          apellido: resp.data.user.apellido,
          dni: resp.data.user.dni,
          domicilio: resp.data.user.domicilio,
          token: resp.data.token,
        },
      })
      localStorage.setItem('user', JSON.stringify(resp.data))
    })
    .catch(err => {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload: 'Error al loguearse',
      })
    })
}

