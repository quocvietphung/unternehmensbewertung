import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import Home from '../Home/Home';
import Unternehmenswertrechner from '../Unternehmenswertrechner/Unternehmenswertrechner';
import Footer from './Footer';
import Navbar from './Navbar';
import './App.scss';
import Ergebnis from "../Ergebnis/Ergebnis";
import PDF from "../../test/PDF";
import QualityChart from "../../testchart/QualityChart";
import TestPDF from "../../test/TestPDF";

const App = () => {
    return (
        <SnackbarProvider
            maxSnack={3}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            autoHideDuration={2000}
        >
            <Router>
                <div className="App">
                    <Navbar/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/unternehmenswert-berechnen" element={<Unternehmenswertrechner/>}/>
                        <Route path="/result" element={<Ergebnis/>}/>
                        {/*<Route path="/pdf" element={<PDF/>}/>*/}
                    </Routes>
                </div>
                <Footer/>
            </Router>
        </SnackbarProvider>
    );
};

export default App;
