import React, { useState } from 'react';
import BasisInfo from './BasisInfo';
import ProgressSection from './ProgressSection';
import './Unternehmenswertrechner.scss';
import Kennzahlen from './Kennzahlen';
import { Header } from 'semantic-ui-react';

const Eingabe = () => {
    const [sections, setSections] = useState({
        activeSection: 'basis',
        finishedSections: [],
        sectionOrder: ['basis', 'kennzahlen']
    });

    // Add a new state to hold BasisInfo
    const [basisInfo, setBasisInfo] = useState({});

    const updateActiveSection = (section) => {
        const currentIndex = sections.sectionOrder.findIndex((s) => s === sections.activeSection);
        const targetIndex = sections.sectionOrder.findIndex((s) => s === section);

        if (currentIndex >= 0 && targetIndex >= 0 && currentIndex < targetIndex) {
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
        // Save basis info when Weiter is clicked
        setBasisInfo(info);

        setSections(prevSections => ({
            ...prevSections,
            finishedSections: [...prevSections.finishedSections, prevSections.activeSection],
            activeSection: 'kennzahlen'
        }));
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
                {sections.activeSection === 'basis' ?
                    <BasisInfo
                        sectionName="basis"
                        onWeiterClick={handleWeiterClick}
                        className="shared-section"
                        basisInfo={basisInfo}
                    />
                    :
                    <Kennzahlen
                        sectionName="kennzahlen"
                        onZuruckClick={handleZuruckClick}
                        className="shared-section"
                    />
                }
            </div>
        </div>
    );
}

export default Eingabe;
