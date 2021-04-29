import React from "react";
import {Nav} from "react-bootstrap";
import { withRouter } from "react-router";
import './dashboard.css'

const Side = () => {

    return (
        <>
            <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
                 activeKey="/">
                <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/admin/posts">Posts</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/admin/comments">Comments</Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    );
};
const Sidebar = withRouter(Side);
export default Sidebar