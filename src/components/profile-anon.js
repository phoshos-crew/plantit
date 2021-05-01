import React, {useEffect} from 'react'
import {Link, useParams} from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import userActions from '../actions/user-actions'
import {connect} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Col, Container, Row} from "react-bootstrap";

const ProfileAnon = (
    {
        profileUser,
        getUserById
    }) => {

    const {userId} = useParams()

    useEffect(() => {
        getUserById(userId)
    }, [userId])

    return (
        <Container>
            {
                profileUser &&
                <>
                    <Row>
                        <Col lg={7} md={7} sm={8} xs={6} className={"mt-3"}>
                            <h2>{profileUser.firstName} {profileUser.lastName}'s Profile</h2>
                        </Col>
                        <Col lg={5} md={5} sm={4} xs={6}>
                            <Link to="/">
                                <FontAwesomeIcon icon={"home"} size={"2x"} pull={"right"} className={"mt-3"}
                                                 color={"orangered"}/>
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4} lg={12} className={"mt-4 ml-1"}>
                            <h4>Groups {profileUser.firstName} {profileUser.lastName} Follows</h4>
                        </Col>
                    </Row>
                    <Row className={"mt-2 ml-1"}>
                        <Card style={{width: '18rem'}}>
                            <Card.Body bg={"light"} text={"dark"}>
                                <Card.Title className={"text-muted"}>ThePlantSociety</Card.Title>
                                <Button variant="secondary">Go</Button>
                            </Card.Body>
                        </Card>
                        <br/>
                        <Card style={{width: '18rem'}}>
                            <Card.Body bg={"light"} text={"dark"}>
                                <Card.Title className={"text-muted"}>FinestFlora</Card.Title>
                                <Button variant="secondary">Go</Button>
                            </Card.Body>
                        </Card>
                        <br/>
                        <Card style={{width: '18rem'}}>
                            <Card.Body bg={"light"} text={"dark"}>
                                <Card.Title className={"text-muted"}>PlantPerfect</Card.Title>
                                <Button variant="secondary">Go</Button>
                            </Card.Body>
                        </Card>
                    </Row>
                </>
            }
        </Container>
    )
}

const stpm = (state) => (
    {
        profileUser: state.userReducer.profileUser,
    }
)

const dtpm = (dispatch) => {
    return {
        getUserById: (userId) => userActions.findUserById(dispatch, userId)
    }
}

export default connect(stpm, dtpm)(ProfileAnon)