import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import userActions from '../actions/user-actions'
import {connect} from "react-redux";
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Profile = (
    {
        currentUser,
        getCurrentUser,
        profileUser,
        getUserById,

    }) => {


    const [newUser, setNewUser] = useState()

    useEffect(() => {
        getCurrentUser()
    }, [])

    return (
        <Container>
            {
                currentUser &&
                <>
                    <Row>
                        <Col lg={8} md={7} sm={8} xs={6} className={"mt-3"}>
                            <h2>Profile</h2>
                        </Col>
                        <Col lg={4} md={5} sm={4} xs={6}>
                            <Link to="/">
                                <FontAwesomeIcon icon={"home"} size={"2x"} pull={"right"} className={"mt-3"}
                                                 color={"orangered"}/>
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4} className={"mt-4 "}>
                            <h4>Personal Information</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8} className={"mt-2"}>
                            <Card className={"mb-3"} border={"dark"}>
                                <Card.Body>
                                    <Row>
                                        <Col sm={3}>
                                            <h6 className="mb-0">First Name</h6>
                                        </Col>
                                        <Col sm={9} className={"text-secondary"}>
                                            {currentUser.firstName}
                                        </Col>
                                    </Row>
                                    <hr/>
                                    <Row>
                                        <Col sm={3}>
                                            <h6 className="mb-0">Last Name</h6>
                                        </Col>
                                        <Col sm={9} className={"text-secondary"}>
                                            {currentUser.lastName}
                                        </Col>
                                    </Row>
                                    <hr/>
                                    <Row>
                                        <Col sm={3}>
                                            <h6 className="mb-0">Email</h6>
                                        </Col>
                                        <Col sm={9} className={"text-secondary"}>
                                            {currentUser.email}
                                        </Col>
                                    </Row>
                                    <hr/>
                                    <Row>
                                        <Col sm={3}>
                                            <h6 className="mb-0">Phone</h6>
                                        </Col>
                                        <Col sm={3} className={"text-secondary"}>
                                            {currentUser.phone}
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col sm={12} className={"ml-1"}>
                            <h4>Users {currentUser.firstName} {currentUser.lastName} Follows</h4>
                        </Col>
                    </Row>
                    {
                        currentUser &&
                        <Row className={"mt-2 ml-1"}>
                            {
                                currentUser.usersFollowed.map(user =>
                                    <>
                                        <Card style={{width: '18rem'}} bg={"light"} text={"dark"}>
                                            <Card.Body>
                                                <Card.Title className={"text-muted"}>{user}</Card.Title>
                                                <Link to={`/profile/${user}`}>
                                                    <Button variant="secondary">Go</Button>
                                                </Link>
                                            </Card.Body>
                                        </Card>
                                        <br/>
                                    </>
                                )
                            }
                        </Row>
                    }
                    <br/>
                    <Row>
                        <Col sm={12} className={"mt-4 ml-1"}>
                            <h4>Groups {currentUser.firstName} {currentUser.lastName} Follows</h4>
                        </Col>
                    </Row>
                    <Row className={"mt-2 ml-1"}>
                        <Card style={{width: '18rem'}} bg={"light"} text={"dark"}>
                            <Card.Body>
                                <Card.Title className={"text-muted"}>ThePlantSociety</Card.Title>
                                <Button variant="secondary">Go</Button>
                            </Card.Body>
                        </Card>
                        <br/>
                        <Card style={{width: '18rem'}} bg={"light"} text={"dark"}>
                            <Card.Body>
                                <Card.Title className={"text-muted"}>FinestFlora</Card.Title>
                                <Button variant="secondary">Go</Button>
                            </Card.Body>
                        </Card>
                        <br/>
                        <Card style={{width: '18rem'}} bg={"light"} text={"dark"}>
                            <Card.Body>
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
        currentUser: state.userReducer.currentUser,
        profileUser: state.userReducer.profileUser,
    }
)

const dtpm = (dispatch) => {
    return {
        getCurrentUser: () => userActions.profile(dispatch),
        getUserById: (userId) => userActions.findUserById(dispatch, userId)
    }
}

export default connect(stpm, dtpm)(Profile)