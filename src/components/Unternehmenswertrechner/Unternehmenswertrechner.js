import React, {Component} from 'react';
import BasisInfo from './BasisInfo';
import ProgressSection from './ProgressSection';
import './Unternehmenswertrechner.scss';
import Kennzahlen from './Kennzahlen';
import {Header} from "semantic-ui-react";

class Unternehmenswertrechner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSection: 'basis'
        };
    }

    setActiveSection = (section) => {
        this.setState({activeSection: section});
    };

    handleWeiterClick = () => {
        this.setState({activeSection: 'kennzahlen'});
    };

    render() {
        const {activeSection} = this.state;

        return (
            <div className="Unternehmenswertrechner">
                <Header as="h1" className="main-header">Willkommen beim Unternehmenswertrechner</Header>
                <ProgressSection setActiveSection={this.setActiveSection} activeSection={activeSection}/>
                <div className="unternehmenswertrechner-container">
                    {activeSection === 'kennzahlen' ? <Kennzahlen /> : <BasisInfo onWeiterClick={this.handleWeiterClick} />}
                </div>
            </div>
        );
    }
}

export default Unternehmenswertrechner;
