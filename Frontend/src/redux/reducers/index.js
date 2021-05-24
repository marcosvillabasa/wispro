import {combineReducers} from 'redux'
import userLoginReducer from './userReducer'
import userCrudReducer from './userCrudReducer'

export default combineReducers({
    login: userLoginReducer,
    users: userCrudReducer,
})