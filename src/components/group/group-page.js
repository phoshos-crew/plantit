import React, {useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link, useParams} from "react-router-dom";
import Card from "react-bootstrap/Card";
import {Button} from "react-bootstrap";
import groupActions from "../../actions/groups-actions";
import {connect} from "react-redux";


const GroupPage = (
    {
        group,
        findGroupById,
    }) => {

    const {groupId} = useParams()
    useEffect(() => {
        findGroupById(groupId)
    }, [groupId])
    console.log("group", group)
    return (
        <div className={"container"}>

            <div className={"row"}>
                <div className={"col"}></div>
                <div className={"col-10"}>
                    <h3 className={"text-center"}>Welcome to {group.groupName}!!</h3>
                    <div className="row">
                        <img src={group.groupPicture} height={"200px"} width={"200px"}/>
                        <br/>
                    </div>
                    <div className="row">
                        <p className={"lead"}><strong>
                            {group.groupDesc}
                        </strong></p>

                    </div>

                    <h5>Members:</h5>
                    <br/>
                    {
                        group.groupMembers &&
                        <div className="row">
                            {
                                group.groupMembers.map(user =>
                                    <>
                                        <Card style={{width: '18rem'}}>
                                            <Card.Body>
                                                <Card.Title>{user.username}</Card.Title>
                                                <Link to={`/profile/${user._id}`}>
                                                    <Button variant="primary">Go</Button>
                                                </Link>
                                            </Card.Body>
                                        </Card>
                                        <br/>
                                    </>
                                )
                            }
                        </div>
                    }
                    {
                        !group.groupMembers &&
                        <h5>
                            No one yet!
                        </h5>
                    }

                </div>
                <div className={"col"}></div>
            </div>
        </div>
    )
}

const stpm = (state) => ({
    group: state.groupReducer.foundGroup
})

const dtpm = (dispatch) => ({
    findGroupById: (groupId) => groupActions.findGroupById(dispatch, groupId)
})

export default connect(stpm, dtpm)(GroupPage)