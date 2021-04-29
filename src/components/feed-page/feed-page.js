import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import Plant from "./plant";
import {Container, Row} from 'react-bootstrap'
import Post from "./post-component";
import postsActions, {createPost} from "../../actions/posts-actions";
import userActions from "../../actions/user-actions";
import * as url from "url";
import Button from "react-bootstrap/Button";

const FeedPage = (
    {
        currentUser,
        plants,
        posts,
        findPostsForUser,
        createPost,
        getCurrentUser
    }) => {
    useEffect(() => {
        if(currentUser) {
            currentUser.usersFollowed.forEach(userId => findPostsForUser(userId))
            findPostsForUser(currentUser._id)
        } else {
            getCurrentUser()
        }
    }, [currentUser])

    const [imageUrl, setImgUrl] = useState("")

    return (
        <Container>
            <h1>Feed</h1>
            <h2>Post a picture</h2>
            <input type={url}
                   value={imageUrl}
                   onChange={(e) => setImgUrl(e.target.value)}/>
            <Button onClick={() => {
                createPost({
                    imageUrl: imageUrl,
                    originalPoster: currentUser._id,
                })
                setImgUrl("")
            }}>Submit</Button>
            <h2>Friends Recent Posts</h2>
            {
                Object.values(posts).flat().sort(
                    (a,b) => (a.createdAt > b.createdAt ? 1 : -1)
                ).filter((post) => {
                    const date = new Date(post.createdAt)
                    const now = new Date(Date.now())
                    const yesterday = now.setDate(now.getDate() - 1)
                    if(date > yesterday) {
                        return post
                    }
                })
                    .map((post, index) =>
                    currentUser.usersFollowed.includes(post.originalPoster._id) &&
                    <Row key={post._id}>
                        <Post post={post} currentUser={currentUser}/>
                    </Row>
                )
            }
            <h2>My posts</h2>
            {
                Object.values(posts).flat().map((post, index) => {
                        return currentUser._id === post.originalPoster._id &&
                        <Row key={post._id}>
                            <Post post={post} currentUser={currentUser}/>
                        </Row>
                }
                )
            }
            <Row>
                {
                    plants.map(crop =>
                        <Plant cropId={crop.id} key={crop.id}/>
                    )
                }
            </Row>
        </Container>
    )
}

const stpm = (state) => ({
    currentUser: state.userReducer.currentUser,
    plants: state.userReducer.plants,
    posts: state.postsReducer.posts_by_user
})

const dtpm = (dispatch) => {
    return {
        findPostsForUser: (userId) => postsActions.findPostsForUser(dispatch, userId),
        getCurrentUser: () => userActions.profile(dispatch),
        createPost: (post) => postsActions.createPost(dispatch, post)
    }
}

export default connect(stpm, dtpm)(FeedPage)