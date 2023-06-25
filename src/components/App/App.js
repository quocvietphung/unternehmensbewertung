import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from '../Home/Home';
import Unternehmenswertrechner from '../Unternehmenswertrechner/Unternehmenswertrechner';
import Footer from './Footer';
import Navbar from './Navbar';
import Ergebnis from "../Ergebnis/Ergebnis";
import './App.scss';
import PDF from "../../test/PDF";
import BasisInfoChart from "../../testchart/BasisInfoChart";

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/unternehmenswert-berechnen" element={<Unternehmenswertrechner/>}/>
                    <Route path="/result" element={<Ergebnis/>}/>
                    <Route path="/pdf" element={<PDF/>}/>
                    <Route path="/graph" element={ <BasisInfoChart />}/>
                    <Route path="/test-pdf" element={<PDF/>}/>
                </Routes>
            </div>
            <Footer/>
        </Router>
    );
};

export default App;
