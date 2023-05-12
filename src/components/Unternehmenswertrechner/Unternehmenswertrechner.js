import React, { Component } from 'react';
import BasisInfo from './BasisInfo';
import Progress from './Progress';
import './Unternehmenswertrechner.scss';
import Kennzahlen from './Kennzahlen';

class Unternehmenswertrechner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showKennzahlen: false
        };
    }

    handleWeiterClick = () => {
        this.setState({ showKennzahlen: true });
    };

    render() {
        const { showKennzahlen } = this.state;

        return (
            <div className="Unternehmenswertrechner">
                <Progress />
                <div className="unternehmenswertrechner-container">
                    {showKennzahlen ? (
                        <Kennzahlen />
                    ) : (
                        <BasisInfo onWeiterClick={this.handleWeiterClick} />
                    )}
                </div>
            </div>
        );
    }
}

export default Unternehmenswertrechner;
