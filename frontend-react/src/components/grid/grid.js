import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ResultCard from "./card";
import {Row} from "react-bootstrap";
// import {Container, Row} from "react-bootstrap";


const ResultGrid = (
    {
        results
    }) => {
    return (
        <div className="my-2">
            <div className="text-right">
                <div className={"row text-left"}>
                    <div className={"col-6"}>
                        <h4>Recent Documents</h4>
                    </div>
                    <div className={"col-3 d-none d-md-inline"}>
                        <h4>Owned by me</h4>
                    </div>
                </div>
            </div>
            <Row>
                {
                    results.map((result, index) =>
                        <ResultCard
                            result={result}
                            key={index}
                        />
                    )
                }
            </Row>
        </div>
    )
}

export default ResultGrid