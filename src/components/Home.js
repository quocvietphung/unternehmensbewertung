// src/components/Home.js
import React from 'react';
import Navbar from './Navbar';

const Home = () => {
    return (
        <div className="Home">
            <Navbar />
            <header className="Home-header">
                <h1>Willkommen auf unserer Webseite</h1>
            </header>
        </div>
    );
};

export default Home;
