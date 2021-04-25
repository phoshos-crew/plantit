import userService from '../services/user-service'

export const LOGIN = "LOGIN"
export const LOGOUT = "LOGOUT"
export const PROFILE = "PROFILE"

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
    dispatch({
        type: LOGOUT
    })

const userActions = {
    logout,
    login,
    profile
}

export default userActions