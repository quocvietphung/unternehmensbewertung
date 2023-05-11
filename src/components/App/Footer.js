import React from 'react';
import { Container, Segment } from 'semantic-ui-react';
import './App.scss';

const Footer = () => {
    return (
        <Segment vertical className="Footer" style={{ backgroundColor: 'black'}}>
            <Container textAlign="center">
                <p className="text-orange">
                    © {new Date().getFullYear()} ORGAPLAN Beratung GmbH.
                </p>
            </Container>
        </Segment>
    );
};

export default Footer;
