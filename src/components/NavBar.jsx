import react from 'react'
import '../styles/navbar.css';

function Navbar() {

    return(
        <div className="nav-bar">
            <a href="/Home"><p>Home</p></a>
            <a href="/Cart"><p>Cart</p></a>
        </div>
    )
}

export default Navbar