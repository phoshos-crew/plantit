import React, {useEffect, useState} from 'react'
import {Accordion, Alert, Card, Button, Image} from "react-bootstrap";
import commentActions from "../../actions/comments-actions";
import {connect} from "react-redux";
import Comment from "./comment-component";

const Post = (
    {
        post,
        currentUser,
        commentsByPost,
        findCommentsForPost,
        createComment
    }) => {
    const [commentBody, setCommentBody] = useState();

    useEffect(() => {
        findCommentsForPost(post._id)
    }, [post])

    return (
        <Accordion>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        {`${post.originalPoster.username} uploaded a new picture of a plant!`}
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <>
                        <Card.Img as={Image} src={post.imageUrl} style={{"maxHeight": "25%", width: "25%"}} thumbnail/>
                        <Card.Body>
                            <>
                                {
                                    commentsByPost
                                    && commentsByPost[post._id]
                                    && commentsByPost[post._id].map(comment =>
                                        <Comment comment={comment}/>
                                    )
                                }
                                <h1>Leave a comment:</h1>
                                <textarea
                                    value={commentBody}
                                    onChange={(e) => setCommentBody(e.target.value)}/>
                                <Button onClick={
                                    () => {
                                        createComment(post._id, {
                                            commentBody: commentBody,
                                            originalPoster: currentUser._id})
                                        setCommentBody("")
                                    }}>Submit</Button>
                            </>
                        </Card.Body>
                    </>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}

const stpm = (state) => ({
    commentsByPost: state.commentsReducer.comments_by_post
})

const dtpm = (dispatch) => {
    return {
        createComment: (postId, comment) => commentActions.createComment(dispatch, postId, comment),
        findCommentsForPost: (postId) => commentActions.findCommentsForPost(dispatch, postId)
    }
}

export default connect(stpm, dtpm)(Post)