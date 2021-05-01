import React, {useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link, useParams} from "react-router-dom";
import Card from "react-bootstrap/Card";
import {Button} from "react-bootstrap";
// import


const GroupPage = (
    {
        // group,
        // findGroupById,
    }) => {

    // const {groupId} = useParams()
    // useEffect(() => {}, [groupId])

    return (
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col"}></div>
                <div className={"col-10"}>
                    {/*<h1>Welcome to {group.groupName}</h1>*/}
                    <h3 className={"text-center"}>Welcome to Splendid Succulents!</h3>
                    <div className="row">
                        <img src="https://media.istockphoto.com/photos/miniature-succulent-plants-picture-id510059940" height={"100px"} width={"100px"} />
                        <br/>
                    </div>
                    <div className="row">
                        <p className={"lead"}><strong>
                            Succulents are so easy to care for!
                        </strong></p>
                        {/*<p>{group.groupDesc}</p>*/}
                    </div>
                    <div className="row">
                        <h5>Members:</h5>
                        {/*<div className="col-2">*/}
                        {/*    <FontAwesomeIcon icon={"circle"}/>*/}
                        {/*</div>*/}
                        {/*{*/}
                        {/*    group.groupMembers &&*/}
                        {/*    <div className="row">*/}
                        {/*        {*/}
                        {/*            group.groupMembers.map(user =>*/}
                        {/*                <>*/}
                        {/*                    <Card style={{width: '18rem'}}>*/}
                        {/*                        <Card.Body>*/}
                        {/*                            <Card.Title>{user.username}</Card.Title>*/}
                        {/*                            <Link to={`/profile/${user._id}`}>*/}
                        {/*                                <Button variant="primary">Go</Button>*/}
                        {/*                            </Link>*/}
                        {/*                        </Card.Body>*/}
                        {/*                    </Card>*/}
                        {/*                    <br/>*/}
                        {/*                </>*/}
                        {/*            )*/}
                        {/*        }*/}
                        {/*    </div>*/}
                        {/*}*/}
                        {/*{*/}
                        {/*    !group.groupMembers &&*/}
                        {/*    <h5>*/}
                        {/*        No one yet!*/}
                        {/*    </h5>*/}
                        {/*}*/}
                    </div>
                </div>
                <div className={"col"}></div>
            </div>
        </div>
    )
}

export default GroupPage
// const stpm = (state) => {
//     group: state.groupReducer.currentGroup
// }
//
// const dtpm = (dispatch) => {
//     findGroupById: (groupId) => groupService.findGroupById(groupId)
//         .then(group => dispatch({
//             type: "FIND_GROUP_BY_ID",
//             group: group}))
// }


// export default connect(stpm, dtpm)(GroupPage)