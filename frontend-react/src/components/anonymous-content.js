import React, {useEffect, useState} from 'react'
import cropService from '../services/crops-service'
import ResultGrid from "./grid/grid";

// Generate some random veggies.
const AnonymousContent = () => {

    const listOfCrops = ["banana", "potato", "corn", "cucumber", "ice-plant", "coffee-plant", "ghost-plant"]
    const random = Math.floor(Math.random() * listOfCrops.length);
    const [results, setResults] = useState([])
    const [randomCrop, setRandomCrop] = useState("")

    useEffect(() => {
        setRandomCrop(listOfCrops[random])

        cropService.findCropByName(randomCrop)
            .then(results => setResults(results.data))
    }, [randomCrop])
    return(
        <>
            <h1>Anon Content</h1>
            <ul className="list-group">
                {
                    results.map(crop =>
                        <ResultGrid
                            name={crop.attributes.name}
                            key={crop.id}
                            to={`/details/${crop.id}`}
                        />
                    )
                }
            </ul>
        </>
    )
}

export default AnonymousContent