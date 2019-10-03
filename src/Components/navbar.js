import React from 'react'
import '../stylesheets/navbar.css';
// import {Navlink , Link} from 'react-router-dom'
function navbar() {
    return (
        <div className="navbar">
            <h2>Bazzinga</h2>
            <div className="navbarStyle">
                <a className="link" href='#home'>Home</a>
                <a className="link" href='#form'>Create Event</a>
                <a className="link" href='/events'>Events Around You</a>
                <a className="link" href='#footer'>Contact Us</a>
                <a className="link" href='/login'>Login</a>
                <a className="link" href='#'>About</a>
            </div>
        </div>
    )
}

export default navbar
