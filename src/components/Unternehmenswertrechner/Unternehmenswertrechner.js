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
            activeSection: 'basis',
            finishedSections: [] // Add this to keep track of finished sections
        };
    }

    setActiveSection = (section) => {
        this.setState({activeSection: section});
    };

    handleWeiterClick = () => {
        this.setState(prevState => ({
            activeSection: 'kennzahlen',
            finishedSections: [...prevState.finishedSections, 'basis'] // Add 'basis' to finished sections
        }));
    };

    render() {
        const {activeSection, finishedSections} = this.state; // Get finishedSections from state

        return (
            <div className="Unternehmenswertrechner">
                <Header as="h1" className="main-header">Willkommen beim Unternehmenswertrechner</Header>
                <ProgressSection setActiveSection={this.setActiveSection} activeSection={activeSection} finishedSections={finishedSections}/>
                <div className="unternehmenswertrechner-container">
                    {activeSection === 'kennzahlen' ? <Kennzahlen /> : <BasisInfo sectionName="basis" onWeiterClick={this.handleWeiterClick} />}
                </div>
            </div>
        );
    }
}

export default Unternehmenswertrechner;
