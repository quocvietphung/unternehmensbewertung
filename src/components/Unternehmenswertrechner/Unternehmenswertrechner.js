import React from 'react';
import Eingabe from './Eingabe';
import './Unternehmenswertrechner.scss';
import Ausgabe from "./Ausgabe";

const Unternehmenswertrechner = () => {
    return (
        <div className="Unternehmenswertrechner">
                <Ausgabe/>
                <Eingabe/>
        </div>
    );
};
export default Unternehmenswertrechner;
