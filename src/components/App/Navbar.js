// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="Logo" width="450" height="50" />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink exact to="/" activeClassName="active" className="nav-link">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/unternehmenswert-rechner" activeClassName="active" className="nav-link">
                                Unternehmenswert Berechnen
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/unternehmensboerse" activeClassName="active" className="nav-link">
                                Unternehmensbörse
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/kontakt" activeClassName="active" className="nav-link me-5">
                                Kontakt
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
