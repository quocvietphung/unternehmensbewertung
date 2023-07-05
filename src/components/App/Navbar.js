import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Icon, Dropdown } from 'semantic-ui-react';

const menuItems = [
    { to: "/", label: "Home", icon: "home" },
    { to: "/unternehmenswert-berechnen", label: "Unternehmenswert Berechnen", icon: "calculator" },
    // { to: "/pdf", label: "PDF", icon: "flask" },
    // { to: "/kontakt", label: "Kontakt", icon: "envelope" },
];

const Navbar = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 720);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const renderMenuItems = () => {
        return menuItems.map((item, index) => (
            <Menu.Item
                key={item.to}
                as={NavLink}
                exact={item.to === "/"}
                to={item.to}
                activeClassName="active"
                className={index === menuItems.length - 1 ? "last-item" : ""}
            >
                <Icon name={item.icon} />
                {item.label}
            </Menu.Item>
        ));
    };

    const renderMobileMenu = () => {
        const dropdownItems = menuItems.map((item) => ({
            key: item.to,
            as: NavLink,
            exact: item.to === "/",
            to: item.to,
            text: item.label,
            icon: item.icon,
        }));

        return (
            <Dropdown
                icon={{ name: 'bars', size: 'large' }}
                direction="left"
                style={{
                    padding: '10px',
                    fontSize: '20px',
                }}
            >
                <Dropdown.Menu>
                    {dropdownItems.map((item) => (
                        <Dropdown.Item
                            key={item.key}
                            as={item.as}
                            exact={item.exact}
                            to={item.to}
                            text={item.text}
                            icon={item.icon}
                        />
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        );
    };

    return (
        <Menu className="Navbar" style={{ backgroundColor: '#f0f0f0' }}>
            <Menu.Item as={NavLink} exact to="/" activeClassName="active" className="logo-item">
                <span className="logo-text">ORGAPLAN Beratung GmbH</span>
            </Menu.Item>
            {isSmallScreen ? (
                <Menu.Menu position="right">
                    {renderMobileMenu()}
                </Menu.Menu>
            ) : (
                <Menu.Menu position="right">{renderMenuItems()}</Menu.Menu>
            )}
        </Menu>
    );
};

export default Navbar;
