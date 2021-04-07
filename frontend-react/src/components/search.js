import React, {useState, useEffect} from 'react'
import cropService from '../services/crops-service'
import {useParams, useHistory} from "react-router-dom";
import ResultGrid from "./grid/grid";

const Search = () => {

    const {cropName} = useParams()
    const [searchTitle, setSearchTitle] = useState("")
    const [results, setResults] = useState([])
    const history = useHistory()

    useEffect(() => {
        setSearchTitle(cropName)
        if(cropName) {
            cropService.findCropByName(cropName)
                .then(results => setResults(results.data))
        }
    }, [cropName])
    return(
        <div>
            <h2>Find some plants!</h2>
            <input
                onChange={(event) => {
                    setSearchTitle(event.target.value)
                }}
                className="form-control"
                value={searchTitle}/>
            <button
                onClick={() => {history.push(`/search/${searchTitle}`)}}
                className="btn btn-primary btn-block">
                Search
            </button>
            <ResultGrid results={results}/>
        </div>
    )
}

export default Search