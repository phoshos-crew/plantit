import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const GroupPage = () => {
    return (
        <div>
            <h1>Succulent Care</h1>
            <div className="row">
                <img src="https://media.istockphoto.com/photos/miniature-succulent-plants-picture-id510059940" height={200} width={1000}/>
                <br/>
            </div>
            <div className="row">
                <p>
                    Succulents are so easy to care for!
                </p>
            </div>
            <div className="row">
                <h3>Members</h3>
                <div className="col-2">
                    <FontAwesomeIcon icon={"circle"}/>
                </div>
            </div>


        </div>
    )
}

export default GroupPage