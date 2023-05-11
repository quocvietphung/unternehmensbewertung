import React from 'react';
import { Container, Segment } from 'semantic-ui-react';
import './App.scss';

const Footer = () => {
    return (
        <Segment vertical className="Footer" style={{ backgroundColor: '#f0f0f0' }}>
            <Container textAlign="center">
                <p className="text-white">
                  <span>
                    Copyright © {new Date().getFullYear()}
                  </span>&nbsp;
                  <span className="text-orange">ORGAPLAN Beratung GmbH.</span>
                </p>
            </Container>
        </Segment>
    );
};

export default Footer;
