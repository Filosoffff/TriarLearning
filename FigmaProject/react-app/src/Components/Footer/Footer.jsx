import React from 'react'
import "./Footer.css"

function Footer() {
    return (
        <footer>
            <div className="mainFooter">
                <div className="footerList">
                    <h3>Airbnb</h3>
                    <div className="footerLinks">
                        <a className="links" href="#">About</a>
                        <a className="links" href="#">Press</a>
                        <a className="links" href="#">Help</a>
                    </div>
                </div>
                <div className="footerList">
                    <h3>Discover</h3>
                    <div className="footerLinks">
                        <a className="links" href="#">Travel credit</a>
                        <a className="links" href="#">Business</a>
                        <a className="links" href="#">Guidebooks</a>
                    </div>
                </div>
                <div className="footerList">
                    <h3>Hosting</h3>
                    <div className="footerLinks">
                        <a className="links" href="#">Why host</a>
                        <a className="links" href="#">Hospitality</a>
                        <a className="links" href="#">Community</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer