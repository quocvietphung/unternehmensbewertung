import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';
import logo from '../../images/logo.png';
import './App.scss';

const menuItems = [
    { to: "/", label: "Home", icon: "home" },
    { to: "/unternehmenswert-berechnen", label: "Unternehmenswert Berechnen", icon: "calculator" },
    { to: "/unternehmensboerse", label: "Unternehmensbörse", icon: "exchange" },
    { to: "/kontakt", label: "Kontakt", icon: "envelope" }
];

const Navbar = () => (
    <Menu className="Navbar" style={{ backgroundColor: 'white' }}>
        <Menu.Item as={NavLink} exact to="/" activeClassName="active" className="logo-item">
            <span className="logo-text">ORGAPLAN Beratung GmbH</span>
        </Menu.Item>
        <Menu.Menu position="right">
            {menuItems.map((item) => (
                <Menu.Item
                    key={item.to}
                    as={NavLink}
                    exact={item.to === "/"}
                    to={item.to}
                    activeClassName="active"
                    className={item.to === "/kontakt" ? "contact-item" : ""}
                >
                    <Icon name={item.icon} />
                    {item.label}
                </Menu.Item>
            ))}
        </Menu.Menu>
    </Menu>
);

export default Navbar;
