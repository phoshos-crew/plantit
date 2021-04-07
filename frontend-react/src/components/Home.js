import React from 'react'
import {Link} from "react-router-dom";

const Home = () => {
    return(
        <div>
            <h1>Home</h1>
            <Link to="/search">
                Search
            </Link>
            <Link to="/feed">
                Feed
            </Link>
        </div>
    )
}

export default Home