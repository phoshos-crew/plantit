import React, {useState} from 'react'
import {Link} from "react-router-dom";
import AnonymousContent from "./anonymous-content";
import Search from "./search";
import {Col, Container, Row} from "react-bootstrap";

const Home = () => {

    return(
        <Container>
            <Row className={"mt-4"}>
                <Col>
                    <h1>Home</h1>
                </Col>
                <Link to={`/feed`}>
                    Feed
                </Link>
            </Row>
            <Row className={"justify-content-center mt-4"}>
                <Col>
                        <AnonymousContent/>
                </Col>
            </Row>
        </Container>
    )
}

export default Home