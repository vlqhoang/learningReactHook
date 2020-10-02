
const searchUserFunc = (state, actionPayload) => {
    return {
        ...state,
        users: actionPayload,
        loading: false
    }
}

const searchUserDetailFunc = (state, actionPayload) => {
    return {
        ...state,
        userDetail: actionPayload,
        loading: false
    }
}

const setLoadingFunc = (state, actionPayload) => {
    return {
        ...state,
        loading: actionPayload
    }
}

const githubReducer = (state, action) => {
    switch (action.type) {
        case 'SET_LOADING':
            return setLoadingFunc(state, action.payload)
        case 'SEARCH_USER':
            return searchUserFunc(state, action.payload)
        case 'SEARCH_USER_DETAIL':
            return searchUserDetailFunc(state, action.payload)
        default:
            throw new Error();
    }
}
export default githubReducer