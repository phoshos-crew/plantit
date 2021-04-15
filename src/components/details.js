import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import cropsService from '../services/crops-service'

const Details = () => {
    const [crop, setCrop] = useState({})
    const {cropId} = useParams()
    useEffect(() => {
        cropsService.findCropById(cropId)
            .then(crop => setCrop(crop.data))
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
                </>
            }
        </div>
    )
}

export default Details