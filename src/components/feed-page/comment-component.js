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
            <h3>{`${comment.originalPoster.username} on ${(new Date(comment.createdAt)).toDateString()}`}</h3>
            <p>{comment.body}</p>
        </>)
}

export default Comment