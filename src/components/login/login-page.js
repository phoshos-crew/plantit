import React, {useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import userActions from "../../actions/user-actions";
import {connect} from "react-redux";
import {useHistory} from "react-router-dom"

import {useHistory} from 'react-router-dom'

const LoginPage = (
    {
        login,
        logout,
        user
    }) => {

    const [credentials, setCredentials] = useState({})
    const history = useHistory()

/*    const history = useHistory()
    const login = () => {
        history.push("/profile")
    }*/

    return(
        <div>
            <div className="container">
                <h1>
                    Login
                </h1>

                <div className="mb-3 row">
                    <label
                        className="col-sm-2 col-form-label float-end">
                        Username
                    </label>

                    <div className="col-sm-10">
                        <input className="form-control"
                               id="username"
                               // value={credentials.username}
                               onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                        />
                    </div>

                </div>

                <div className="mb-3 row">
                    <label
                        className="col-sm-2 col-form-label">
                        Password
                    </label>

                    <div className="col-sm-10">
                        <input type="password"
                               className="form-control"
                               id="password"
                               // value={credentials.password}
                               onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                        />
                    </div>

                </div>

                <div className="mb-3 row">
                    <div className="col-sm-2">

                    </div>

                    <div className="d-grid gap-2 mx-auto col-sm-10">
                        <a className="btn btn-primary btn-block"
                           onClick={
                               () => login({credentials})
                                   .catch(error => {
                                       alert("Incorrect username and password combination!")
                                   })
                                   .then(existingUser => {
                                       if(existingUser) {
                                           history.push("/profile")
                                       }
                                   })
                           }
                           /*onClick = {login}*/
                           role="button">
                            Sign in
                        </a>
                    </div>
                </div>


                <div className="mb-3 row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-10">
                        <a href="#">
                            Forgot Password?
                        </a>

                        <a href="../register" className="float-right">
                            Sign Up
                        </a>
                    </div>
                </div>

                <div className="mb-3 row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-10">
                        <a href="..">
                            Cancel
                        </a>
                    </div>
                </div>
                {JSON.stringify(user)}
            </div>
        </div>
    )
}

const stpm = (state) => ({
    user: state.userReducer.currentUser
})

const dtpm = (dispatch) => {
    return {
        login: (credentials) => userActions.login(dispatch, credentials),
        logout: () => userActions.logout(dispatch)
    }
}


export default connect(stpm, dtpm)(LoginPage)