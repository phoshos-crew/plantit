import React, {useState} from 'react'
import userActions from "../../actions/user-actions";
import {connect} from "react-redux";
import {Link, useHistory} from "react-router-dom"
import {Button} from "react-bootstrap";

const RegisterPage = ({register, user}) => {
    const [newUser, setNewUser] = useState({
        role: "GENERAL_USER",
        usersFollowed: [],
        groupMemberships: [],
        comments: [],
        posts: [],
        plantsOwned: []
    })
    const [passwordCheck, setPasswordCheck] = useState("")
    const history = useHistory()

    const validate = () => passwordCheck === newUser.password

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
                               onChange={(e) => setNewUser({...newUser, firstName: e.target.value})}
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
                               onChange={(e) => setNewUser({...newUser, lastName: e.target.value})}
                               id="lastNameInput"
                               placeholder="Kumar"/>
                    </div>
                </div>

                <div className="mb-3 row">
                    <label
                        className="col-sm-2 col-form-label">
                        Email
                    </label>

                    <div className="col-sm-10">
                        <input className="form-control"
                               type="email"
                               onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                               id="email"
                               placeholder="email@email.com"/>
                    </div>
                </div>

                <div className="mb-3 row">
                    <label
                        className="col-sm-2 col-form-label">
                        Phone
                    </label>

                    <div className="col-sm-10">
                        <input className="form-control"
                               type="tel"
                               pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                               onChange={(e) => setNewUser({...newUser, phone: e.target.value})}
                               id="phone"
                               placeholder="555-555-5555"/>
                    </div>
                </div>

                <div className="mb-3 row">
                    <label
                        className="col-sm-2 col-form-label">
                        Username
                    </label>

                    <div className="col-sm-10">
                        <input className="form-control"
                               onChange={(e) => setNewUser({...newUser, username: e.target.value})}
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
                               onChange={(e) => setNewUser({...newUser, password: e.target.value})}
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
                               onChange={(e) => setPasswordCheck(e.target.value)}
                               className="form-control"
                               placeholder="pass@123!?"/>
                    </div>
                </div>


                <div className="mb-3 row">
                    <div className="col-sm-2">
                    </div>

                    <div className="d-grid gap-2 mx-auto col-sm-10">
                        <Button className="btn btn-primary btn-block"
                              // to="/register"
                              role="button"
                              onClick={
                                  () => {
                                      console.log(newUser)
                                      if (validate() === true) {

                                          register({newUser})
                                              .catch(error =>
                                                alert("Username already exists! Please register with another username.")
                                              )
                                              .then(actualUser => {
                                                  if (actualUser) {
                                                      history.push("/profile")
                                                  }
                                              })
                                      } else {
                                          alert("Passwords do not match!")
                                      }
                                  }
                              }>
                            Sign Up
                        </Button>
                    </div>
                </div>

                <div className="mb-3 row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-10">
                        <Link to="/login">
                            Login
                        </Link>

                        <Link to="/" className="float-right" onClick={() => history.goBack()}>
                            Cancel
                        </Link>
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
    register: (newUser) => userActions.register(dispatch, newUser)
})

export default connect(stpm, dtpm)(RegisterPage)