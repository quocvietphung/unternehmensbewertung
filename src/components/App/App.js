import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Unternehmenswertrechner from '../Unternehmenswertrechner/Unternehmenswertrechner';
import Navbar from './Navbar';
import Footer from './Footer';
import './App.scss';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/unternehmenswert-berechnen" element={<Unternehmenswertrechner />} />
                    </Routes>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
