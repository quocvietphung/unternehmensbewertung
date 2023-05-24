import React from 'react';
import { Container, Segment } from 'semantic-ui-react';

const Footer = () => {
    return (
        <div className="Footer" style={{ backgroundColor: '#f0f0f0', padding: '20px 0' }}>
            <Container textAlign="center">
                <p className="text-white">
                    <span>
                        Copyright © {new Date().getFullYear()}
                    </span>&nbsp;
                    <span className="text-orange">ORGAPLAN Beratung GmbH.</span>
                </p>
            </Container>
        </div>
    );
};

export default Footer;
