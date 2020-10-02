import React, {Fragment, useContext, useEffect} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from "react-router-dom";
import GithubContext from "../../context/github/GithubContext";

const UserDetail = ({match}) => {

    const githubContext = useContext(GithubContext);
    const {getUserDetail, loading, userDetail} = githubContext;

    /**
     * Replace componentDidMount, componentDidUpdate - fetching user detail !.
     */
    useEffect(() => {
        // calling API -> fetch user detail by user login id (pulling out from router)}
        getUserDetail(match.params.login)
        // eslint-disable-next-line
    }, [
        // avoid this page going into a infinite loop due to a render -> useEffect() -> re-render -> useEffect() .....
        // giving an empty array is ok too
        match.params.login
    ]);

    const {
        name,
        avatar_url,
        location,
        bio,
        company,
        blog,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable
    } = userDetail

    if (loading) return <p>Loading!...</p>;

    return (
        <Fragment>
            <Link to='/' className='btn btn-light'>Back to Search</Link>
            Hireable: {' '}
            {
                hireable ? <FontAwesomeIcon icon={["fas", "check"]} /> : <FontAwesomeIcon icon={["fas", "times-circle"]} />
            }

            <div className='user-card grid-2'>
                <div className="all-center">
                    <img src={avatar_url} alt="" className="round-img" style={{width: '150px'}}/>
                    <h1>{name}</h1>
                    <p>Location: {location}</p>
                </div>
                <div>
                    {
                        bio && (
                            <Fragment>
                                <h3>Bio</h3>
                                <p>{bio}</p>
                            </Fragment>
                        )
                    }
                    <a href={html_url} className="btn btn-dark my-1">
                        Visit Github Profile
                    </a>
                    <ul>
                        <li>
                            {
                                login && (
                                    <Fragment>
                                        <strong>Username: </strong> {login}
                                    </Fragment>
                                )
                            }
                        </li>
                        <li>
                            {
                                company && (
                                    <Fragment>
                                        <strong>Company: </strong> {company}
                                    </Fragment>
                                )
                            }
                        </li>
                        <li>
                            {
                                blog && (
                                    <Fragment>
                                        <strong>Blog: </strong> {blog}
                                    </Fragment>
                                )
                            }
                        </li>
                    </ul>
                </div>
            </div>

            <div className="user-card text-center">
                <div className="badge badge-primary">Follower: {followers}</div>
                <div className="badge badge-success">Following: {following}</div>
                <div className="badge badge-light">Public Repos: {public_repos}</div>
                <div className="badge badge-dark">Public Gists: {public_gists}</div>
            </div>
        </Fragment>
    )

}
export default UserDetail