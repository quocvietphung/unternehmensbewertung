import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Container} from 'semantic-ui-react';
import Home from '../Home/Home';
import Unternehmenswertrechner from '../Unternehmenswertrechner/Unternehmenswertrechner';
import Footer from './Footer';
import Navbar from './Navbar';
import Kennzahlen from "../Unternehmenswertrechner/Kennzahlen";
import './App.scss';
import Eingabe from "../Unternehmenswertrechner/Eingabe";

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/unternehmenswert-berechnen" element={<Unternehmenswertrechner/>}/>
                    <Route path="/test" element={<Kennzahlen/>}/>
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
};

export default App;
