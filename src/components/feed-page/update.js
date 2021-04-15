import React from 'react'
import {Alert} from "react-bootstrap";

const Update = ({text}) => {
    return (
        <Alert variant="info">
            {/*<Alert.Heading>{text}</Alert.Heading>*/}
            <h4 className="mb-0">{text}</h4>
        </Alert>
    )
}

const UpdateSelector = ({userName, action}) => {
    return (
        <>
            {
                action === "NEW_PLANT" &&
                <>
                    <Update text={`${userName} got a new plant!`}/>
                </>
            }
            {
                action === "NEW_PICTURE" &&
                <>
                    <Update text={`${userName} uploaded a new picture of a plant!`}/>
                </>
            }
        </>
    )
}

export default UpdateSelector