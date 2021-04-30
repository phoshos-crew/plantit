import React, {useEffect, useLayoutEffect, useState} from "react";
import userActions from "../../actions/user-actions";
import {connect} from "react-redux";
import {Link, useHistory} from "react-router-dom"
import Search from "../search";
import {Button, Nav, Navbar, NavDropdown, NavItem} from "react-bootstrap";
import userService from "../../services/user-service"

const TopBar = ({logout, user}) => {
    const history = useHistory()
    const [curUser, setCurUser] = useState(user)
    // console.log("outside", user)

    useLayoutEffect(() => {
        userService.profile()
            // .then(response => console.log("response", response))
            // .catch(error => setCurUser({}))
            .then(retUser => setCurUser(retUser))
    }, [user])

    return(
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand href={curUser ? "/feed" : "/"}>PlantIt</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        {
                            curUser &&
                            <Navbar.Text className={"mx-3 nav-item"}>{`Hello ${curUser.firstName}!`}</Navbar.Text>
                        }
                    </Nav>
                    <form className="form-inline mx-auto">
                        <Search/>
                    </form>
                    <Nav>
                        {
                            !curUser &&
                            <>
                                <Nav.Link href={`/login`}>
                                    <Button variant={"outline-primary"} className={"mr-2"}>
                                        Login
                                    </Button>
                                </Nav.Link>
                                <Nav.Link href={`/register`}>
                                    <Button variant={"outline-dark"}>
                                        Sign Up
                                    </Button>
                                </Nav.Link>
                            </>
                        }
                        {
                            curUser && curUser.role === 'SITE_ADMIN' &&
                            <Link href={`/admin`}>
                                <Button variant={"danger"} className={"mr-4"}>
                                    Admin
                                </Button>
                            </Link>
                        }
                        {
                            curUser &&
                            <>
                                <Nav.Link href={`/profile`}>
                                    <Button variant={"outline-success"} className={"mr-2"}>
                                        Profile
                                    </Button>
                                </Nav.Link>
                                <Nav.Link href={`/`}>
                                    <Button variant={"outline-primary"}
                                            onClick={() => {
                                                logout()
                                                setCurUser(null)
                                                history.push("/")
                                            }}>
                                        Logout
                                    </Button>
                                </Nav.Link>
                            </>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {/*{console.log("inside", curUser)}*/}
            {/*<nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">*/}
            {/*    <a className="navbar-brand" href={curUser ? "/feed" : "/"}>PlantIt</a>*/}
            {/*    <button className="navbar-toggler" type="button" data-toggle="collapse"*/}
            {/*            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"*/}
            {/*            aria-expanded="false" aria-label="Toggle navigation">*/}
            {/*        <span className="navbar-toggler-icon"></span>*/}
            {/*    </button>*/}
            {/*    <div className="collapse navbar-collapse" id="navbarSupportedContent">*/}
            {/*        {*/}
            {/*            curUser &&*/}
            {/*            <span className={"mx-3 nav-item"}>{`Hello ${curUser.firstName}!`}</span>*/}
            {/*        }*/}
            {/*        <form className="form-inline mx-auto">*/}
            {/*            <Search/>*/}
            {/*        </form>*/}


            {/*    </div>*/}
            {/*</nav>*/}
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