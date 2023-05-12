import React, { Component } from 'react';
import './Unternehmenswertrechner.scss';
import BasisInfo from './BasisInfo';
import Progress from "./Progress";

class Unternehmenswertrechner extends Component {
    render() {
        return (
            <div className="Unternehmenswertrechner">
                <Progress/>
                <div className="unternehmenswertrechner-container">
                    <BasisInfo/>
                </div>
            </div>
        );
    }
}

export default Unternehmenswertrechner;
