import React from "react";
import {Nav} from "react-bootstrap";
import { withRouter } from "react-router";
import './dashboard.css'

const Side = (props) => {

    return (
        <>
            <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
                 activeKey="/home"
                 onSelect={selectedKey => alert(`selected ${selectedKey}`)}>
                <Nav.Item>
                    <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" href="/admin/posts">Posts</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" href="/admin/comments">Comments</Nav.Link>
                </Nav.Item>
            </Nav>

        </>
    );
};
const Sidebar = withRouter(Side);
export default Sidebar