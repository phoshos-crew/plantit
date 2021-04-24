import React, {useState, useEffect} from 'react'
import cropsService from '../../services/crops-service'
import {Col} from "react-bootstrap";

const Plant = ({cropId}) => {
    const [crop, setCrop] = useState({attributes: false})
    useEffect(() => {
        cropsService.findCropById(cropId)
            .then(crop => setCrop(crop.data))
    }, [])
    return (
        <Col xs={12} sm={12} md={6} lg={4} xl={4}>
            <div className="card mt-4">
                {
                    crop.attributes &&
                    <>
                        <img src={crop.attributes.main_image_path}
                             className="card-img-top"
                             alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{crop.attributes.name}</h5>
                            <p className="card-text">
                                {crop.attributes.description}
                            </p>
                        </div>
                    </>
                }
            </div>
        </Col>
    )
}

export default Plant