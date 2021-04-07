import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import cropService from '../services/crops-service'

// Generate some random veggies.
const AnonymousContent = () => {

    const listOfCrops = ["banana", "potato", "corn", "cucumber", "ice-plant", "coffee-plant", "ghost-plant"]
    const random = Math.floor(Math.random() * listOfCrops.length);
    const randomCrop = listOfCrops[random];
    const [results, setResults] = useState([])

    useEffect(() => {
        cropService.findCropByName(randomCrop)
            .then(results => setResults(results.data))
    }, [randomCrop])
    return(
        <>
            <h1>Anon Content</h1>
            <ul className="list-group">
                {
                    results.map(crop =>
                        <li className="list-group-item" key={crop.id}>
                            <Link to={`/details/${crop.id}`}>
                                {crop.attributes.name}
                            </Link>
                        </li>
                    )
                }
            </ul>
        </>
    )
}

export default AnonymousContent