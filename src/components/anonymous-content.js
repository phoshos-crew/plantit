import React, {useEffect, useLayoutEffect, useState} from 'react'
import cropService from '../services/crops-service'
import PlantGrid from "./grid/grid";

const AnonymousContent = () => {

    const listOfCrops = ["banana", "potato", "corn", "cucumber", "ice-plant", "coffee-plant", "ghost-plant"]
    const random = Math.floor(Math.random() * listOfCrops.length);
    const [crops, setCrops] = useState([])
    const [randomCrop, setRandomCrop] = useState("")

    useLayoutEffect(() => {
        setRandomCrop(listOfCrops[random])
    }, [])

    useEffect(() => {
        cropService.findCropByName(randomCrop)
            .then(results => setCrops(results.data))
    }, [randomCrop])

    return(
        <>
            <h3>Welcome!</h3>
            <PlantGrid crops={crops}/>
        </>
    )
}

export default AnonymousContent