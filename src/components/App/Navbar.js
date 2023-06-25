import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';

const menuItems = [
    { to: "/", label: "Home", icon: "home" },
    { to: "/unternehmenswert-berechnen", label: "Unternehmenswert Berechnen", icon: "calculator" },
    { to: "/pdf", label: "PDF", icon: "flask" },
    { to: "/graph", label: "Graph", icon: "chart line" }, // Updated icon name to "chart line"
    { to: "/test-pdf", label: "Test PDF", icon: "flask" },
    { to: "/kontakt", label: "Kontakt", icon: "envelope" },
];

const Navbar = () => {
    const renderMenuItems = () => {
        return menuItems.map((item) => (
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
        ));
    };

    return (
        <Menu className="Navbar" style={{ backgroundColor: '#f0f0f0' }}>
            <Menu.Item as={NavLink} exact to="/" activeClassName="active" className="logo-item">
                <span className="logo-text">ORGAPLAN Beratung GmbH</span>
            </Menu.Item>
            <Menu.Menu position="right">{renderMenuItems()}</Menu.Menu>
        </Menu>
    );
};

export default Navbar;
