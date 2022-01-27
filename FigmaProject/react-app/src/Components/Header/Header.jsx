import React from 'react'
import "./Header.css"
import logo from "../../images/Rectangle 2.png"
import avatar from "../../images/Ellipse.png"

function Header() {
    return (
        <header>
            <div className="Header">
                <div>
                    <div className="logo">
                        <img className="logo" src={logo} alt="Logo" />
                    </div>
                </div>

                <div className="rightHeader">
                    <div className="navbar">
                        <a className="navButt links" href="#">Become a host</a>
                        <a className="navButt links" href="#">Trips</a>
                        <a className="navButt links" href="#">Messages</a>
                    </div>

                    <div>
                        <img className="avatar" src={avatar} alt="Avatar" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header