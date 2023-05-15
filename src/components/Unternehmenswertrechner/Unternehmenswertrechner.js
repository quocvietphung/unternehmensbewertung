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
            finishedSections: []
        };
    }

    setActiveSection = (section) => {
        this.setState(state => {
            const finishedSections = [...state.finishedSections];
            if (!finishedSections.includes(state.activeSection)) {
                finishedSections.push(state.activeSection);
            }
            return {
                activeSection: section,
                finishedSections
            };
        });
    };

    handleWeiterClick = () => {
        this.setState(prevState => ({
            activeSection: 'kennzahlen',
            finishedSections: [...prevState.finishedSections, prevState.activeSection] // Add current activeSection to finished sections
        }));
    };

    render() {
        const {activeSection, finishedSections} = this.state;
        return (
            <div className="Unternehmenswertrechner">
                <Header as="h1" className="main-header">Willkommen beim Unternehmenswertrechner</Header>
                <ProgressSection setActiveSection={this.setActiveSection} activeSection={activeSection} finishedSections={finishedSections}/>
                <div className="unternehmenswertrechner-container">
                    {activeSection === 'kennzahlen' ? <Kennzahlen className="shared-section" /> : <BasisInfo sectionName="basis" onWeiterClick={this.handleWeiterClick} className="shared-section" />}
                </div>
            </div>
        );
    }
}

export default Unternehmenswertrechner;
