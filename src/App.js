import React, {Fragment, useContext, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import './App.css';
import NavBar from "./components/layout/nav/Navigation";
import Users from "./components/user/Users";
import Search from "./components/user/Search";
import Alert from "./components/layout/alert/Alert";
import About from "./components/pages/About";
import UserDetail from "./components/user/UserDetail";

import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';
import GithubContext from "./context/github/GithubContext";

library.add(fab, fas);

const App = () => {

    // use github context to access state
    const githubContext = useContext(GithubContext);

    useEffect(() => {
        // running init some users on load...
        githubContext.findSomeUsersOnLoad();
        // eslint-disable-next-line
    }, [])

    return (
        <Router>
            <div className="App">
                <NavBar />
                <div className="container">
                    <Alert/>
                    <Switch>
                        <Route exact path='/' render={() => (
                            <Fragment>
                                <Search/>
                                <Users/>
                            </Fragment>
                        )}/>
                        <Route exact path='/about' component={About}/>
                        <Route exact path='/user/:login' render={(props) => (
                            <UserDetail {...props} /> // passing Route's props, other HOCs props
                        )}/>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}
export default App;
