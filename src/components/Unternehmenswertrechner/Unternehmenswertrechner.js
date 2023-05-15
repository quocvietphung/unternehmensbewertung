import React, { useState } from 'react';
import BasisInfo from './BasisInfo';
import ProgressSection from './ProgressSection';
import './Unternehmenswertrechner.scss';
import Kennzahlen from './Kennzahlen';
import { Header } from 'semantic-ui-react';

const Unternehmenswertrechner = () => {
    const [activeSection, setActiveSection] = useState('basis');
    const [finishedSections, setFinishedSections] = useState([]);

    const updateActiveSection = (section) => {
        if (!finishedSections.includes(activeSection)) {
            setFinishedSections([...finishedSections, activeSection]);
        }
        setActiveSection(section);
    };

    const handleWeiterClick = () => {
        setFinishedSections([...finishedSections, activeSection]);
        setActiveSection('kennzahlen');
    };

    return (
        <div className="Unternehmenswertrechner">
            <Header as="h1" className="main-header">Willkommen beim Unternehmenswertrechner</Header>
            <ProgressSection setActiveSection={updateActiveSection} activeSection={activeSection} finishedSections={finishedSections}/>
            <div className="unternehmenswertrechner-container">
                {activeSection === 'kennzahlen' ? <Kennzahlen className="shared-section" /> : <BasisInfo sectionName="basis" onWeiterClick={handleWeiterClick} className="shared-section" />}
            </div>
        </div>
    );
}

export default Unternehmenswertrechner;
