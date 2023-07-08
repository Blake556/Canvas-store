import React from 'react'
import {Link} from 'react-router-dom';
import '../styles/navbar.css';

function NavBar() {

    return(
        <div className="nav-bar d-flex align-items-center">
            <Link to="/Home"> <p>Home</p> </Link>
            <Link to="/Cart"><p>Cart</p> </Link>
        </div>
    )
}

export default NavBar