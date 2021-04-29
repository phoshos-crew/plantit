import userService from '../services/user-service'

export const LOGIN = "LOGIN"
export const LOGOUT = "LOGOUT"
export const PROFILE = "PROFILE"
export const FIND_USER_BY_ID = "FIND_USER_BY_ID"
export const REGISTER = "REGISTER"


export const profile = (dispatch) => {
    userService.profile()
        .then(userInfo => dispatch({
            type: PROFILE,
            currentUser: userInfo
        }))
}

export const login = (dispatch, credentials) =>
    userService.login(credentials)
        .then(userInfo => dispatch({
            type: LOGIN,
            currentUser: userInfo
        }))

export const logout = (dispatch) =>
    userService.logout()
        .then(response => dispatch({
            type: LOGOUT
        }))

export const register = (dispatch, newUser) =>
    userService.register(newUser)
        .then(actualUser => dispatch({
            type: REGISTER,
            currentUser: actualUser
        }))

export const findUserById = (dispatch, userId) =>
    userService.findUserById(userId)
    .then(userInfo => dispatch({
        type: FIND_USER_BY_ID,
        profileUser: userInfo
    }))



const userActions = {
    logout,
    login,
    findUserById,
    profile,
    register
}

export default userActions