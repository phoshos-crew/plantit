import React, {useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const LoginPage = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    return(
        <div>
            <div className="container">
                <h1>
                    Login
                </h1>
                {/*<FontAwesomeIcon icon="trash"/>*/}

                <div className="mb-3 row">
                    <label
                        className="col-sm-2 col-form-label float-end">
                        Username
                    </label>

                    <div className="col-sm-10">
                        <input className="form-control"
                               id="username"
                               value={username}
                               onChange={(e) => setUsername(e.target.value)}
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
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                </div>

                <div className="mb-3 row">
                    <div className="col-sm-2">

                    </div>

                    <div className="d-grid gap-2 mx-auto col-sm-10">
                        <a className="btn btn-primary btn-block"
                           href="../profile"
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
            </div>
        </div>
    )
}

export default LoginPage