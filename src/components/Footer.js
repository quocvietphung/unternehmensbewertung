// src/components/Footer.js
import React from 'react';

const Footer = () => {
    return (
        <>
            <style>
                {`
                .text-orange {
                    color: #ff7a00;
                }
                `}
            </style>
            <footer className="bg-light py-3">
                <div className="container">
                    <p className="text-center mb-0">
                        Copyright &copy; {new Date().getFullYear()}{' '}
                        <span className="text-orange">ORGAPLAN Beratung GmbH.</span>
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
