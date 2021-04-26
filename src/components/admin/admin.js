import React, {useEffect, useState} from "react";
import {Container, Row, Col} from "react-bootstrap";
import {useParams, withRouter} from "react-router";
import Sidebar from "./sidebar";
import './dashboard.css'
import Table from "./table"

import postsService from "../../services/posts-service"

const Admin = () => {

    const {contentType} = useParams()
    const [content, setContent] = useState([])

    useEffect(() => {
        if (contentType === 'posts') {
            postsService.findAllPosts().then((posts) => {
                setContent(posts)
                // console.log("posts: " + JSON.stringify(posts))
            })
        }
    }, [contentType])

    return (
        <>
            <Container fluid>
                <Row>
                    <Col xs={2} lg={3} id="sidebar-wrapper">
                        <Sidebar/>
                    </Col>
                    <Col xs={10} lg={9}>
                        <Table contents={content} contentType={contentType}/>
                    </Col>
                </Row>
            </Container>
        </>

    )
}

// https://stackoverflow.com/questions/53539314/what-is-withrouter-for-in-react-router-dom
const AdminPage = withRouter(Admin)
export default AdminPage