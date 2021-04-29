import React, {useEffect, useLayoutEffect, useState} from 'react'
import cropService from '../services/crops-service'
import PlantGrid from "./grid/grid";

// Generate some random veggies.
const AnonymousContent = () => {

    const listOfCrops = ["banana", "potato", "corn", "cucumber", "ice-plant", "coffee-plant", "ghost-plant"]
    const random = Math.floor(Math.random() * listOfCrops.length);
    const [crops, setCrops] = useState([])
    const [randomCrop, setRandomCrop] = useState("")

    useLayoutEffect(() => {
        setRandomCrop(listOfCrops[random])

        cropService.findCropByName(randomCrop)
            .then(results => setCrops(results.data))
    }, [randomCrop])
    return(
        <>
            <h1>Anon Content</h1>
            <PlantGrid crops={crops}/>
        </>
    )
}

export default AnonymousContent