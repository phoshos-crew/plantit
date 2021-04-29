import postsService from '../services/posts-service'

export const FIND_POSTS_FOR_USER = "FIND_POSTS_FOR_USER"
export const CREATE_POST = "CREATE_POST"

export const findPostsForUser = (dispatch, userId) =>
    postsService.findPostsForUser(userId)
        .then(posts => dispatch({
            type: FIND_POSTS_FOR_USER,
            poster: userId,
            posts: posts
        }))

export const createPost = (dispatch, post) =>
    postsService.createPost(post)
        .then(post => dispatch({
            type: CREATE_POST,
            poster: post.originalPoster._id,
            post: post
        }))

const postsActions = {
    findPostsForUser,
    createPost
}

export default postsActions