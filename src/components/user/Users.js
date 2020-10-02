import React, {useContext} from "react";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/GithubContext";

const Users = () => {

    const githubContext = useContext(GithubContext);

    return (
        <div className="user-container">
            {
                githubContext.users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))
            }
        </div>
    )

}
export default Users