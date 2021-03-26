import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Col} from "react-bootstrap";

const ResultCard = ({ name, to }) => {

    return (
        <Col xs={12} sm={6} md={4} lg={3} xl={2}>
            <div className="card mt-4">
                <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png"
                     className="card-img-top"
                     alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                        the
                        card's
                        content.</p>
                    <img src={``}/>
                        <Link to={to} className="btn btn-primary">{name}</Link>
                </div>
            </div>
        </Col>
    )
}

export default ResultCard