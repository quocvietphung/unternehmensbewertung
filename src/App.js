import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Unternehmenswertrechner from './components/Unternehmenswertrechner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/unternehmenswert-rechner" element={<Unternehmenswertrechner />} />
                    </Routes>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
