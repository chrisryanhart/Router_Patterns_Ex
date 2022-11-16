import React from "react";
import { Switch, Route, Redirect, BrowserRouter, Link, NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import './NavBar.css'

function NavBar({dogs}){
    // get list of dogs to use in the link names 

    const links = dogs.map(dog => <NavLink key={dog.name} exact to={`/dogs/${dog.name}`}>{dog.name}</NavLink>);
    const homeLink = <NavLink exact to='/dogs'>Home</NavLink>;

    links.unshift(homeLink);

    return (
        <nav className="nav-links">
            {links}
        </nav>

    );
}

export default NavBar;