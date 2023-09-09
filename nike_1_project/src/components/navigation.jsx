import React from "react";

const Navigation = () => {
    return (
        <nav className="navbar">
            <div className='logo'>
                <img src="/images/nike1.png" alt="logo_nike" />
            </div>

            <ul>
                <li href="#">Menu</li>
                <li href="#">Location</li>
                <li href="#">About</li>
                <li href="#">Contacts</li>
            </ul>

            <button>Login</button>
        </nav>
    )
}

export default Navigation();