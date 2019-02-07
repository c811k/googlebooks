import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <a className="navbar-brand" href="/"><img src="https://upload.wikimedia.org/wikipedia/commons/3/38/Google_Books_logo_2015.PNG" alt="logo" height="50" width="150" /></a>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                        Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/search" className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}>
                        Search
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/saved" className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}>
                        Saved
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;