const posts = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_POSTS_SUCCESS':
            return [...state, action.response];
        default:
            return state
    }
};

export default posts;
