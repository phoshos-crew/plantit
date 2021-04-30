import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import {Link, Route} from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import userActions from '../actions/user-actions'
import {connect} from "react-redux";

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
        <div class="container-fluid">
            {
                profileUser
                && <>
                    <Link to="/">
                        <i className="fas fa-2x fa-home float-right"/>
                    </Link>
                    <div class="row">

                        <div class="col-4 d-none d-md-table-cell">
                            <h4>{profileUser.firstName} {profileUser.lastName}'s Profile</h4>
                        </div>
                    </div>
                    <br/>

                    <div className="col-4">
                        <h4>Groups {profileUser.firstName} {profileUser.lastName} Follows</h4>
                    </div>
                    <div className="row">
                        <Card style={{width: '18rem'}}>
                            <Card.Body>
                                <Card.Title>ThePlantSociety</Card.Title>
                                <Button variant="primary">Go</Button>
                            </Card.Body>
                        </Card>
                        <br/>
                        <Card style={{width: '18rem'}}>
                            <Card.Body>
                                <Card.Title>FinestFlora</Card.Title>
                                <Button variant="primary">Go</Button>
                            </Card.Body>
                        </Card>
                        <br/>
                        <Card style={{width: '18rem'}}>
                            <Card.Body>
                                <Card.Title>PlantPerfect</Card.Title>
                                <Button variant="primary">Go</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </>
            }
        </div>

    )
}

const stpm = (state) => (
{
    profileUser: state.userReducer.profileUser,
}
)

const dtpm = (dispatch) =>
{
    return {
        getUserById: (userId) => userActions.findUserById(dispatch, userId)
    }
}

export default connect(stpm, dtpm)(ProfileAnon)