import userService from '../services/user-service'

export const LOGIN = "LOGIN"
export const LOGOUT = "LOGOUT"
export const FIND_USER_BY_ID = "FIND_USER_BY_ID"

export const login = (dispatch, credentials) =>
    userService.login(credentials)
        .then(userInfo => dispatch({
            type: LOGIN,
            currentUser: userInfo
        }))

export const logout = (dispatch) =>
    dispatch({
        type: LOGOUT
    })

export const findUserById = (dispatch, userId) =>
    userService.findUserById(userId)
    .then(userInfo => dispatch({
        type: FIND_USER_BY_ID,
        profileUser: userInfo
    }))

const userActions = {
    logout,
    login,
    findUserById
}

export default userActions