import * as settings from '../../constants'

const fetchPostsRequest = () => ({
    type: "FETCH_POSTS_REQUEST"
})

const fetchPostsSuccess = (json) => ({
    type: "FETCH_POSTS_SUCCESS",
    response: json
})

const fetchPostsFailure = (ex) => ({
    type: "FETCH_POSTS_FAILURE",
    message: ex,
})


export const fetchPosts = (args) => (dispatch, getState) => {

    dispatch(fetchPostsRequest());

    return fetch(settings.SITE_URL + 'wp-json/wp/v2/posts?')
    .then(res => res.json())
    .then(json => {
        if(json.data && json.data.status == 404) {
            dispatch(fetchPostsFailure(json.message))
        } else {
            dispatch(fetchPostsSuccess(json))
        }
    })
    .catch(ex => dispatch(fetchPostsFailure(ex.message)))
};
