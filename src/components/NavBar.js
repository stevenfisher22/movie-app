import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './CSS/navBar.css';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <Navbar className="navbar">
                <Navbar.Brand href="/" className="brand">Movie App</Navbar.Brand>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/movie-list">Movie List</NavLink>
                {/* <Link to="/movie-details">Movie Details</Link> */}
            </Navbar>
            // <div>
            //     <Link to="/">Home</Link>
            //     <Link to="/movie-list">Movie List</Link>
            // </div>
        );
    }
}
export default NavBar
