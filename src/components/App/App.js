import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from '../Home/Home';
import Unternehmenswertrechner from '../Unternehmenswertrechner/Unternehmenswertrechner';
import Footer from './Footer';
import Navbar from './Navbar';
import Ergebnis from "../Unternehmenswertrechner/Ergebnis";
import Test from "../../test/Test";
import './App.scss';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/unternehmenswert-berechnen" element={<Unternehmenswertrechner/>}/>
                    <Route path="/result" element={<Ergebnis/>}/>
                    <Route path="/test" element={<Test/>}/>
                </Routes>
            </div>
            <Footer/>
        </Router>
    );
};

export default App;
