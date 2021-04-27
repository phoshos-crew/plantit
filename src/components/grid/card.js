import React from 'react';
import {Link} from 'react-router-dom';
import {Col} from "react-bootstrap";

const PlantCard = ({ name, details, img, desc }) => {

    return (
        <Col xs={12} sm={12} md={6} lg={4} xl={4}>
            <div className="card mt-4">
                    <>
                        <img src={img}
                             className="card-img-top"
                             alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{desc}</p>
                            <Link to={details} className="btn btn-primary">{name}</Link>
                        </div>
                    </>
            </div>
        </Col>
    )
}

export default PlantCard