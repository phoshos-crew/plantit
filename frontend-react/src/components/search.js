import React, {useState, useEffect} from 'react'
import cropService from '../services/crops-service'
import {Link, useParams, useHistory} from "react-router-dom";

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
            <h1>Search</h1>
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
        </div>
    )
}

export default Search