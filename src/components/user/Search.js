import React, {useContext, useState} from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";

const Search = () => {

    // use github and alert context to access state
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    // Search form - self managing local state 'searchValue'.
    const [searchValue, setSearchValue] = useState('');

    /**
     * On search btn clicked, call search function to re-search github users
     */
    const handleFormSubmit = (env$) => {
        env$.preventDefault();

        if (searchValue.trim() !== '') {
            // call github API - searching for user match searchValue!. Then reset search value
            githubContext.searchUser(searchValue);
            setSearchValue('');
        } else {
            alertContext.setAlert('Please enter something!.', 'light');
        }
    }

    /**
     * On user typing new search text -> update the state
     */
    const onSearchValueChange = (event$) => {
        setSearchValue(event$.target.value);
    }

    return (
        <div>
            <form onSubmit={(event$) => handleFormSubmit(event$)}>
                <input type="text"
                       placeholder="Search Users..."
                       value={searchValue}
                       onChange={(event$) => onSearchValueChange(event$)}/>

                <input type="submit"
                       value="Search"
                       className="btn btn-dark btn-block"/>
            </form>
        </div>
    )
}
export default Search