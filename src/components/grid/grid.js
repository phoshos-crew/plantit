import React from 'react';
import PlantCard from "./card";
import {Row} from "react-bootstrap";


const PlantGrid = ({crops}) => {

    let placeholder = ''
    let description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id diam maecenas ultricies mi eget mauris. Tincidunt praesent semper feugiat nibh.'

    return (
        <Row>
            {
                crops.map(crop => {
                        {
                            crop.attributes.main_image_path.includes("s3")
                                ? placeholder = crop.attributes.main_image_path
                                : placeholder = 'https://bit.ly/2QBCWw2'
                        }
                        return (
                            <PlantCard
                                name={crop.attributes.name}
                                key={crop.id}
                                details={`/details/${crop.id}`}
                                img={placeholder}
                                desc={crop.attributes.description == null ? description : crop.attributes.description}
                                maxHeight={100}
                            />
                        )

                    }
                )
            }
        </Row>
    )
}

export default PlantGrid