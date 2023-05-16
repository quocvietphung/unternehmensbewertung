import React from 'react';
import Eingabe from './Eingabe';
import './Unternehmenswertrechner.scss';
import Ausgabe from "./Ausgabe";

const Unternehmenswertrechner = () => {
    return (
        <div className="Unternehmenswertrechner">
            <div className="content-container">
                <Ausgabe/>
                <Eingabe/>
            </div>
        </div>
    );
};
export default Unternehmenswertrechner;
