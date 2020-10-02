import React, {useReducer} from "react";
import axios from 'axios';
import githubReducer from "./githubReducer";
import GithubContext from "./GithubContext";

/**
 * Setting up a GithubContext, providing github's state to the whole application! via '<GithubContext.Provider>'.
 * Later, these state can be access via 'useContext(GithubContext)' ( eq. <GithubContext.Consumer> )
 */
const GithubStateContextProvider = (props) => {

    const initialState = {
        users: [],
        userDetail: {},
        loading: false,
    }

    const [state, dispatch] = useReducer(githubReducer, initialState);

    /**
     * On app mounted, init some users
     */
    const findSomeUsersOnLoad = async () => {
        let reqUrl = `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
        const res = await axios.get(reqUrl);

        dispatch({
            type: "SEARCH_USER",
            payload: res.data
        })
    }

    /**
     * On search -> query users
     */
    const searchUser = async (searchValue) => {
        let reqUrl = `https://api.github.com/search/users?q=${searchValue}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
        const res = await axios.get(reqUrl);

        dispatch({
            type: "SEARCH_USER",
            payload: res.data.items
        })
    }

    /**
     * On detail user click -> fetch user data base on username
     */
    const getUserDetail = async (username) => {
        dispatch({
            type: "SET_LOADING",
            payload: true
        })

        let reqUrl = `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
        const res = await axios.get(reqUrl);

        dispatch({
            type: "SEARCH_USER_DETAIL",
            payload: res.data
        })
    }

    // Providing github state to whole application
    return <GithubContext.Provider
        value={{
            users: state.users,
            userDetail: state.userDetail,
            loading: state.loading,
            findSomeUsersOnLoad,
            searchUser,
            getUserDetail
        }}>
        {props.children} {/*Rendering whatever comes between GithubContext.Provider tag (a placeHolder)*/}
    </GithubContext.Provider>
}
export default GithubStateContextProvider
