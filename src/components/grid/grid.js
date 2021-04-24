import React from 'react';
import PlantCard from "./card";
import {Row} from "react-bootstrap";


const PlantGrid = ({ crops }) => {
    return (
        <Row>
            {
                crops.map(crop =>
                    <PlantCard
                        name={crop.attributes.name}
                        key={crop.id}
                        details={`/details/${crop.id}`}
                        img={crop.attributes.main_image_path}
                        desc={crop.attributes.description}
                    />
                )
            }
        </Row>
    )
}

export default PlantGrid