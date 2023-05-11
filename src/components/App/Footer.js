import React from 'react';
import { Container, Segment } from 'semantic-ui-react';
import './Footer.scss';

const Footer = () => {
    return (
        <Segment inverted vertical className="footer">
            <Container textAlign="center">
                <p className="text-orange">
                    © {new Date().getFullYear()} ORGAPLAN Beratung GmbH.
                </p>
            </Container>
        </Segment>
    );
};

export default Footer;