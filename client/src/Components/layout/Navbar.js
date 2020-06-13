import React from 'react';
import { Link } from 'react-router-dom';


import './layout.css';


const Navbar = props => {






    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark sticky-top bg-dark">
                <Link to="/">
                    <div className="navbar-brand" style={{ fontWeight: "700" }}>DONATIONALLY</div>
                </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <Link to="/">
                            <li className="nav-item nav-link">
                                Home
                    </li>
                        </Link>
                        <Link to="/search">
                            <li className="nav-item nav-link">
                                Charity
                    </li>
                        </Link>
                        <Link to="/favorites">
                            <li className="nav-item nav-link">
                                Favorites
                    </li>
                        </Link>
                        <Link to="/contact">
                            <li className="nav-item nav-link">
                                Contact Us
                    </li>
                        </Link>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;