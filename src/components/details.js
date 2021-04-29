import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import cropsService from '../services/crops-service'
import userActions from "../actions/user-actions";
import {Button} from "react-bootstrap";
import {connect} from "react-redux";

const Details = (
    {
        currentUser,
        getCurrentUser
    }) => {

    const [crop, setCrop] = useState({})
    const {cropId} = useParams()

    useEffect(() => {
        cropsService.findCropById(cropId)
            .then(crop => setCrop(crop.data))
        getCurrentUser()
    }, [cropId])

    return(
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
                    {
                        currentUser
                        && !currentUser.plantsOwned.includes(cropId)
                        && <Button>Add Plant</Button>
                    }
                </>
            }
        </div>
    )
}

const stpm = (state) => ({
    currentUser: state.userReducer.currentUser
})

const dtpm = (dispatch) => {
    return {
        getCurrentUser: () => userActions.profile(dispatch)
    }
}

export default connect(stpm, dtpm)(Details)