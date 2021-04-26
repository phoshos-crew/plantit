import React, {useEffect, useState} from "react";
import userActions from "../../actions/user-actions";
import {connect} from "react-redux";
import {Link, useHistory} from "react-router-dom"
import Search from "../search";
import {Button, Row} from "react-bootstrap";
import userService from "../../services/user-service"

const TopBar = ({logout, user}) => {
    const history = useHistory()
    const [curUser, setCurUser] = useState(user)
    // console.log("outside", user)

    useEffect( () => {
        userService.profile()
            .catch(error => setCurUser({}))
            .then(retUser => setCurUser(retUser))
    }, [])

    return(
        <div>
            {/*{console.log("inside", curUser)}*/}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href={curUser ? "/feed" : "/"}>PlantIt</a>
                {/*{JSON.stringify(curUser)}*/}
                <form className="form-inline mx-auto">
                    <Search/>
                </form>
                {
                    !curUser &&
                    <>
                        <Link to={`/login`}>
                            <Button variant={"outline-primary"} className={"mr-2"}>
                                Login
                            </Button>
                        </Link>
                        <Link to={`/register`}>
                            <Button variant={"outline-dark"}>
                                Sign Up
                            </Button>
                        </Link>
                    </>
                }
                {
                    curUser &&
                    <Link to={`/`}>
                        <Button variant={"outline-primary"}
                                onClick={() => {
                                    logout()
                                    setCurUser({})
                                    history.push("/")
                                }}>
                            Logout
                        </Button>
                    </Link>
                }

            </nav>
        </div>
    )
}

const stpm = (state) => ({
    user: state.userReducer.currentUser
})

const dtpm = (dispatch) => {
    return {
        // login: (credentials) => userActions.login(dispatch, credentials),
        logout: () => userActions.logout(dispatch)
    }
}

export default connect(stpm, dtpm)(TopBar)