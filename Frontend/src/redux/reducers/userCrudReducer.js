import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
} from '../types'

const initialState = {
  users: [],
  isFetching: false,
  error: null,
}

const userCrudReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        users: action.payload,
      }
    case FETCH_USERS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default userCrudReducer
