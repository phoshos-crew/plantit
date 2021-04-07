import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import LoginPage from "./login/login-page";
import AnonymousContent from "./anonymous-content";
import Search from "./search";
import {Button, Col, Container, Row} from "react-bootstrap";

const Home = () => {

    const [isLoggedIn, setLoginState] = useState(false)

    // useEffect(() => {
    // }, [isLoggedIn])

    return(
        <Container>
            <Row className={"mt-4"}>
                <Col>
                    <h1>Home</h1>
                </Col>
                <Link to={`/login`}>
                    <Button size={"lg"} variant={"outline-primary"} className={"mr-2"}>
                        Login
                    </Button>
                </Link>
                <Link to={`/register`}>
                    <Button size={"lg"} variant={"outline-dark"}>
                        Sign Up
                    </Button>
                </Link>
                <Link to={`/register`}>
                    Feed
                </Link>
            </Row>
            <Row className={"justify-content-center"}>
                <Col lg={6} >
                    <Search/>
                </Col>
            </Row>
            <Row className={"justify-content-center mt-4"}>
                <Col>
                    {
                        !isLoggedIn &&
                        <AnonymousContent/>
                    }
                    {
                        isLoggedIn &&
                        <h1>Should show protected content here</h1>
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default Home