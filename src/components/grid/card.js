import React, {useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import {Col, Card, CardDeck, Button} from "react-bootstrap";
import "../styles.css"


const PlantCard = ({ name, details, img, desc, maxHeight }) => {

    // https://stackoverflow.com/questions/61358400/how-to-collapse-part-of-the-text-inside-a-card-in-react-bootstrap
    const MAX_POSSIBLE_HEIGHT = 500;
    const [expanded, setExpanded] = useState(false);

    return (
        <Col xs={12} sm={12} md={6} lg={4} xl={4}>
            <CardDeck>
                <Card className={"mt-4"}>
                    <Card.Header as={"h5"}>{name}</Card.Header>
                    <Card.Img src={img} variant={"top"} className={"img"}/>
                    <Card.Body>
                        <Card.Text>
                            <div className={"inner"} style={{ maxHeight : expanded ? MAX_POSSIBLE_HEIGHT : maxHeight }}>
                                {desc}
                            </div>
                            <Link to={details}>
                                <Button variant={"outline-success"} className={"mt-2"}>
                                    Read More...
                                </Button>
                            </Link>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
        </Col>
    )
}

export default PlantCard