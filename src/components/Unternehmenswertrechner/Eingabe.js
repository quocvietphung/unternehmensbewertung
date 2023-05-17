import React, { useState } from 'react';
import BasisInfo from './BasisInfo';
import ProgressSection from './ProgressSection';
import './Unternehmenswertrechner.scss';
import Kennzahlen from './Kennzahlen';
import { Header } from 'semantic-ui-react';

const Eingabe = () => {
    const [sections, setSections] = useState({
        activeSection: 'basis',
        finishedSections: []
    });

    const updateActiveSection = (section) => {
        if (!sections.finishedSections.includes(sections.activeSection)) {
            setSections({
                ...sections,
                finishedSections: [...sections.finishedSections, sections.activeSection],
                activeSection: section
            });
        } else {
            setSections({
                ...sections,
                activeSection: section
            });
        }
    };

    const handleWeiterClick = () => {
        setSections({
            ...sections,
            finishedSections: [...sections.finishedSections, sections.activeSection],
            activeSection: 'kennzahlen'
        });
    };

    return (
        <div className="Eingabe">
            <Header
                as="h1"
                style={{
                    color: '#008000',
                    fontSize: '2rem',
                    textAlign: 'center'
                }}
            >
                Willkommen beim Unternehmenswertrechner
            </Header>

            <ProgressSection setActiveSection={updateActiveSection} activeSection={sections.activeSection} finishedSections={sections.finishedSections}/>
            <div className="unternehmenswertrechner-container">
                {sections.activeSection === 'kennzahlen' ? <Kennzahlen className="shared-section" /> : <BasisInfo sectionName="basis" onWeiterClick={handleWeiterClick} className="shared-section" />}
            </div>
        </div>
    );
}

export default Eingabe;
