import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Home from '../Home/Home';
import Unternehmenswertrechner from '../Unternehmenswertrechner/Unternehmenswertrechner';
import Footer from './Footer';
import Navbar from './Navbar';
import Kennzahlen from "../Unternehmenswertrechner/Kennzahlen";

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Container text>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/unternehmenswert-berechnen" element={<Unternehmenswertrechner />} />
                        <Route path="/unternehmensboerse" element={<Kennzahlen />} />
                    </Routes>
                </Container>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
