import React, {useState} from 'react'
import {Button} from "react-bootstrap";

const Comment = (
    {
        comment,
        updateComment,
        deleteComment
    }) => {
    const [editingComment, setEditingComment] = useState(comment)
    return (
        <>
            <h1>{comment.originalPoster.username}</h1>
            <p>{comment.commentBody}</p>
        </>)
}

export default Comment