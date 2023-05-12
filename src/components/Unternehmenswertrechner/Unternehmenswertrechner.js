import React, { Component } from 'react';
import BasisInfo from './BasisInfo';
import Progress from "./Progress";
import './Unternehmenswertrechner.scss';
import Kennzahlen from "./Kennzahlen";

class Unternehmenswertrechner extends Component {
    render() {
        return (
            <div className="Unternehmenswertrechner">
                <Progress/>
                <div className="unternehmenswertrechner-container">
                    <BasisInfo/>
                    <Kennzahlen/>
                </div>
            </div>
        );
    }
}

export default Unternehmenswertrechner;
