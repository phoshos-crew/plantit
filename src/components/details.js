import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import cropsService from '../services/crops-service'
import userActions from "../actions/user-actions";
import {Button} from "react-bootstrap";
import {connect} from "react-redux";
import Card from "react-bootstrap/Card";

const Details = (
    {
        currentUser,
        getCurrentUser,
        findAllCropUsers,
        cropUsers,
        addPlant
    }) => {

    const [crop, setCrop] = useState({})
    // const [cropUsers, setCropUsers] = useState([])
    const {cropId} = useParams()

    useEffect(() => {
        cropsService.findCropById(cropId)
            .then(crop => setCrop(crop.data))
        getCurrentUser()
        findAllCropUsers(cropId)
    }, [cropId])

    return (
        <div>
            {
                crop.attributes &&
                <>
                    <h1>{crop.attributes.name}</h1>
                    <img src={crop.attributes.main_image_path}/>
                    <h2>Description</h2>
                    <p>
                        {crop.attributes.description}
                    </p>
                    <ul>
                        <li>Sun Requirements: {crop.attributes.sun_requirements}</li>
                        <li>Sowing Method: {crop.attributes.sowing_method}</li>
                        <li>Spread: {crop.attributes.spread}</li>
                        <li>Row Spacing: {crop.attributes.row_spacing}</li>
                    </ul>
                    {
                        currentUser
                        && !Object.values(currentUser.plantsOwned).flat().includes(cropId)
                        && <Button
                            onClick={() => {
                                addPlant(currentUser._id,
                                    {plantId: cropId})
                            }}
                        >
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
        </div>
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