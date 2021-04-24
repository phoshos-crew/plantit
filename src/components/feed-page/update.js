import React from 'react'
import {Accordion, Alert, Card, Button} from "react-bootstrap";

const Post = ({post}) => {
    return (
        <Accordion>
            <Alert variant="info">
                {/*<Alert.Heading>{text}</Alert.Heading>*/}
                {JSON.stringify(post)}
                {/*<h4 className="mb-0">{text}</h4>*/}
            </Alert>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        {`${post.originalPoster.username} uploaded a new picture of a plant!`}
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Img src={post.imageUrl}/>
                    <Card.Body>{``}</Card.Body>
                </Accordion.Collapse>
            </Card>

        </Accordion>
    )
}

// const UpdateSelector = ({userName, action}) => {
//     return (
//         <>
//             {
//                 action === "NEW_PLANT" &&
//                 <>
//                     <Update text={`${userName} got a new plant!`}/>
//                 </>
//             }
//             {
//                 action === "NEW_PICTURE" &&
//                 <>
//                 </>
//             }
//         </>
//     )
//}

export default Post