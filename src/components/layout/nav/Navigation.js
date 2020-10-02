import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar bg-primary">
            <h1>
                <FontAwesomeIcon icon={["fab", "github"]} /> Github Finder
            </h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </nav>
    )
}
export default NavBar