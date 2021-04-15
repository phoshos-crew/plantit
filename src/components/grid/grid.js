import React from 'react';
import ResultCard from "./card";
import {Row} from "react-bootstrap";


const ResultGrid = (
    {
        results
    }) => {
    return (
        <Row>
            {
                results.map((result) =>
                    <ResultCard
                        name={result.attributes.name}
                        key={result.id}
                        to={`/details/${result.id}`}
                    />
                )
            }
        </Row>
    )
}

export default ResultGrid