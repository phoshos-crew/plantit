import postsService from '../services/posts-service'

export const FIND_POSTS_FOR_USER = "FIND_POSTS_FOR_USER"

export const findPostsForUser = (dispatch, userId) =>
    postsService.findPostsForUser(userId)
        .then(posts => dispatch({
            type: FIND_POSTS_FOR_USER,
            poster: userId,
            posts: posts
        }))

const postsActions = {
    findPostsForUser
}

export default postsActions