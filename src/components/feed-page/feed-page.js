import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import Plant from "./plant";
import {Container, Row} from 'react-bootstrap'
import Update from "./update";
import postsActions from "../../actions/posts-actions";
import userActions from "../../actions/user-actions";

const FeedPage = (
    {
        currentUser,
        plants,
        posts,
        findPostsForUser,
        getCurrentUser
    }) => {
    useEffect(() => {
        getCurrentUser()
        if(currentUser) {
            currentUser.usersFollowed.forEach(userId => findPostsForUser(userId))
        }
    }, [currentUser])

    return (
        <Container>
            <h1>Feed</h1>
            {
                Object.values(posts).flat().map((post, index) =>
                    <Row key={index}>
                        <Update post={post}/>
                    </Row>
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
        getCurrentUser: () => userActions.profile(dispatch)
    }
}

export default connect(stpm, dtpm)(FeedPage)