import React, {useState, useEffect, useLayoutEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import cropsService from '../services/crops-service'
import userActions from "../actions/user-actions";
import {Button, Container, Image} from "react-bootstrap";
import {connect} from "react-redux";
import Card from "react-bootstrap/Card";
import './styles.css'

const Details = (
    {
        currentUser,
        getCurrentUser,
        findAllCropUsers,
        cropUsers,
        addPlant
    }) => {

    const [crop, setCrop] = useState({})
    const {cropId} = useParams()

    useLayoutEffect(() => {
        cropsService.findCropById(cropId)
            .then(crop => setCrop(crop.data))
        getCurrentUser()
        findAllCropUsers(cropId)
    }, [cropId])

    return (
        <Container>
            {
                crop.attributes &&
                <>
                    <h1>{crop.attributes.name}</h1>
                    <Image src={crop.attributes.main_image_path} className={'img'}/>
                    <h2>Description</h2>
                    <p>
                        {crop.attributes.description}
                    </p>
                    <ul>
                        <li key="1">Sun Requirements: {crop.attributes.sun_requirements}</li>
                        <li key="2">Sowing Method: {crop.attributes.sowing_method}</li>
                        <li key="3">Spread: {crop.attributes.spread}</li>
                        <li key="4">Row Spacing: {crop.attributes.row_spacing}</li>
                    </ul>
                    {
                        currentUser
                        && currentUser.plantsOwned.some(e => e.plantId == cropId)
                        &&
                        <Button onClick={() => { addPlant(currentUser._id, {plantId: cropId})}}>
                            Add Plant
                        </Button>
                    }
                    <h3 className="pt-3">Followed By:</h3>
                    {
                        cropUsers &&
                        <div className="row">
                            {
                                cropUsers.map(user =>
                                    <>
                                        <Card style={{width: '18rem'}}>
                                            <Card.Body>
                                                <Card.Title>{user.username}</Card.Title>
                                                <Link to={`/profile/${user._id}`}>
                                                    <Button variant="primary">Go</Button>
                                                </Link>
                                            </Card.Body>
                                        </Card>
                                        <br/>
                                    </>
                                )
                            }
                        </div>
                    }
                    {
                        !cropUsers &&
                        <h5>
                            No one yet!
                        </h5>
                    }
                </>
            }
        </Container>
    )
}

const stpm = (state) => ({
    currentUser: state.userReducer.currentUser,
    cropUsers: state.cropReducer.cropUsers
})

const dtpm = (dispatch) => {
    return {
        getCurrentUser: () => userActions.profile(dispatch),
        addPlant: (userId, plant) => userActions.addPlant(dispatch, userId, plant),
        findAllCropUsers: (cropId) => cropsService.findAllCropUsers(cropId).then(users => dispatch({
            type: "FIND_ALL_CROP_USERS",
            cropUsers: users
        }))
    }
}

export default connect(stpm, dtpm)(Details)