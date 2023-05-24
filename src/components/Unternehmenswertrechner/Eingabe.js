import React, { useState } from 'react';
import ProgressSection from './ProgressSection';
import BasisInfo from './BasisInfo';
import Kennzahlen from './Kennzahlen';
import Bereinigung from './Bereinigung';
import { Header } from 'semantic-ui-react';
import './Unternehmenswertrechner.scss';

const Eingabe = () => {
    const [sections, setSections] = useState({
        activeSection: 'basis',
        finishedSections: [],
        sectionOrder: ['basis', 'kennzahlen', 'bereinigung'],
    });

    // Add a new state to hold BasisInfo
    const [basisInfo, setBasisInfo] = useState({});
    const [kennzahlenInfo, setKennzahlenInfo] = useState({});

    const updateActiveSection = (section) => {
        const currentIndex = sections.sectionOrder.findIndex((s) => s === sections.activeSection);
        const targetIndex = sections.sectionOrder.findIndex((s) => s === section);

        if (currentIndex >= 0 && targetIndex >= 0 && currentIndex < targetIndex) {
            setSections({
                ...sections,
                activeSection: section
            });
        } else {
            setSections({
                ...sections,
                activeSection: section
            });
        }

        console.log('Active Section:', section);
        console.log('Finished Sections:', sections.finishedSections);
    };

    const handleZuruckClick = () => {
        const currentIndex = sections.sectionOrder.findIndex((section) => section === sections.activeSection);
        const previousIndex = currentIndex - 1;

        if (previousIndex >= 0) {
            const previousSection = sections.sectionOrder[previousIndex];
            console.log('Previous Section:', previousSection);

            setSections({
                ...sections,
                activeSection: previousSection,
            });
        }
        console.log('Finished Sections:', sections.finishedSections);
    };

    const handleWeiterClick = (info) => {
        console.log('Received info:', info);
        // Save basis info when Weiter is clicked
        if (sections.activeSection === 'basis') {
            setBasisInfo(info);
            console.log('BasisInfo updated:', info);
        } else if (sections.activeSection === 'kennzahlen') {
            setKennzahlenInfo(info);
            console.log('KennzahlenInfo updated:', info);
        }

        const currentIndex = sections.sectionOrder.findIndex((s) => s === sections.activeSection);
        const nextIndex = currentIndex + 1;

        if (nextIndex < sections.sectionOrder.length) {
            const nextSection = sections.sectionOrder[nextIndex];

            setSections(activeSections => {
                const finishedSections = activeSections.finishedSections.includes(activeSections.activeSection)
                    ? activeSections.finishedSections
                    : [...activeSections.finishedSections, activeSections.activeSection];
                return {
                    ...activeSections,
                    finishedSections: finishedSections,
                    activeSection: nextSection
                }
            });
        }
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
                {sections.activeSection === 'basis' ? (
                    <BasisInfo
                        sectionName="basis"
                        onWeiterClick={handleWeiterClick}
                        className="shared-section"
                        basisInfo={basisInfo}
                    />
                ) : sections.activeSection === 'kennzahlen' ? (
                    <Kennzahlen
                        sectionName="kennzahlen"
                        onZuruckClick={handleZuruckClick}
                        onWeiterClick={handleWeiterClick}
                        className="shared-section"
                        kennzahlenInfo={kennzahlenInfo}
                    />
                ) : sections.activeSection === 'bereinigung' ? (
                    <Bereinigung
                        sectionName="bereinigung"
                        onZuruckClick={handleZuruckClick}
                        className="shared-section"
                    />
                ) : null}
            </div>
        </div>
    );
}

export default Eingabe;
