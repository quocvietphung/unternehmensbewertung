import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Image } from 'semantic-ui-react';
import logo from '../../images/logo.png';
import './Header.scss';

const Header = () => {
    return (
        <Menu inverted className="header">
            <Menu.Item as={NavLink} exact to="/" activeClassName="active">
                <Image src={logo} alt="Logo" className="logo-image" />
            </Menu.Item>
            <Menu.Menu position="right">
                <Menu.Item as={NavLink} exact to="/" activeClassName="active">
                    Home
                </Menu.Item>
                <Menu.Item as={NavLink} to="/unternehmenswert-berechnen" activeClassName="active">
                    Unternehmenswert Berechnen
                </Menu.Item>
                <Menu.Item as={NavLink} to="/unternehmensboerse" activeClassName="active">
                    Unternehmensbörse
                </Menu.Item>
                <Menu.Item as={NavLink} to="/kontakt" activeClassName="active">
                    Kontakt
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    );
};

export default Header;
