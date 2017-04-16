import { combineReducers } from 'redux';

import posts from './posts';

const initialState = {
    isFetching: false
}

const meta = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_POSTS_REQUEST':
            return Object.assign({}, state, {
                isFetching: true
            });
        case 'FETCH_POSTS_SUCCESS':
        case 'FETCH_POSTS_FAILURE':
            return Object.assign({}, state, {
                isFetching: false
            });
        default:
            return state
    }
}

const blog = combineReducers({
    posts,
    meta
});

export default blog;
