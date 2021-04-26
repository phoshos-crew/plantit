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
            <input className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(event) => {
                    setSearchTitle(event.target.value)
                }}
                // value={searchTitle}
            />
            <button className="btn btn-primary my-2 my-sm-0"
                    type="submit"
                    onClick={() => {history.push(`/search/${searchTitle}`)}}>
                Search
            </button>
            <ResultGrid results={results}/>
        </div>
    )
}

export default Search