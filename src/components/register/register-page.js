import React, {useState} from 'react'
import userActions from "../../actions/user-actions";
import {connect} from "react-redux";
import {useHistory} from "react-router-dom"

const RegisterPage = ({register, user}) => {
    const [newUser, setNewUser] = useState({})
    const history = useHistory()

    return (
        <div>
            <div className="container">
                <h1>Sign Up</h1>

                <div className="mb-3 row">
                    <label
                        className="col-sm-2 col-form-label">
                        First Name
                    </label>

                    <div className="col-sm-10">
                        <input className="form-control"
                               onChange={(e) => setNewUser({...user, firstName: e.target.value})}
                               id="firstNameInput"
                               placeholder="Sravani"/>
                    </div>
                </div>

                <div className="mb-3 row">
                    <label
                        className="col-sm-2 col-form-label">
                        Last Name
                    </label>

                    <div className="col-sm-10">
                        <input className="form-control"
                               onChange={(e) => setNewUser({...user, lastName: e.target.value})}
                               id="lastNameInput"
                               placeholder="Kumar"/>
                    </div>
                </div>

                <div className="mb-3 row">
                    <label
                        className="col-sm-2 col-form-label">
                        Username
                    </label>

                    <div className="col-sm-10">
                        <input className="form-control"
                               onChange={(e) => setNewUser({...user, username: e.target.value})}
                               id="usernameInput"
                               placeholder="skumar"/>
                    </div>
                </div>

                <div className="mb-3 row">
                    <label
                        className="col-sm-2 col-form-label">
                        Password
                    </label>

                    <div className="col-sm-10">
                        <input type="password"
                               onChange={(e) => setNewUser({...user, password: e.target.value})}
                               id="passwordInput"
                               className="form-control"
                               placeholder="pass@123!?"/>
                    </div>

                </div>

                <div className="mb-3 row">
                    <label
                        className="col-sm-2 col-form-label">
                        Verify Password
                    </label>

                    <div className="col-sm-10">
                        <input type="password"
                               id="verifyPasswordInput"
                               onChange={(e) => setNewUser({...user, firstName: e.target.value})}
                               className="form-control"
                               placeholder="pass@123!?"/>
                    </div>
                </div>


                <div className="mb-3 row">
                    <div className="col-sm-2">
                    </div>

                    <div className="d-grid gap-2 mx-auto col-sm-10">
                        <a className="btn btn-primary btn-block"
                           href="../profile"
                           role="button">
                            Sign Up
                        </a>
                    </div>
                </div>

                <div className="mb-3 row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-10">
                        <a href="../login">
                            Login
                        </a>

                        <a href=".." className="float-right">
                            Cancel
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

const stpm = (state) => ({
    user: state.userReducer.currentUser
})

const dtpm = (dispatch) => ({
    register: (newUser) => userActions.register(newUser)
})

export default connect(stpm, dtpm)(RegisterPage)