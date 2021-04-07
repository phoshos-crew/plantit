import React, {useState, useEffect} from 'react'
import cropsService from '../services/crops-service'
import {Col} from "react-bootstrap";

const Plant = ({cropId}) => {
    const [crop, setCrop] = useState({attributes: false})
    useEffect(() => {
        cropsService.findCropById(cropId)
            .then(crop => setCrop(crop.data))
    }, [])
    return(
        <>
            {
                crop.attributes &&
                <>
                    <Col xs={12} sm={6} md={4} lg={3} xl={2}>
                        <div className="card mt-4">
                            <img src={crop.attributes.main_image_path}
                                 className="card-img-top"
                                 alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{crop.attributes.name}</h5>
                                <p className="card-text">
                                    {crop.attributes.description}
                                </p>
                            </div>
                        </div>
                    </Col>
                </>
            }
        </>
    )
}

export default Plant