import React from 'react'
import {Link} from "react-router-dom";
import LoginPage from "./login/login-page";

const Home = () => {
    return(
        <div>
            <h1>Home</h1>
            <Link to="/search">
                Search
            </Link>
            <br/>
            <Link to="/login">
                Login
            </Link>
        </div>
    )
}

export default Home