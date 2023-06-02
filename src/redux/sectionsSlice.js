import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    sectionData: {
        activeSection: 'basis',
        finishedSections: [],
        sectionOrder: ['basis', 'kennzahlen', 'bereinigung', 'equity', 'quality', 'anlass'],
    },
};

const sectionsSlice = createSlice({
    name: 'sections',
    initialState,
    reducers: {
        setActiveSection: (state, action) => {
            state.sectionData.activeSection = action.payload;
        },
        finishSection: (state, action) => {
            const section = action.payload;
            if (!state.sectionData.finishedSections.includes(section)) {
                state.sectionData.finishedSections.push(section);
            }
        },
    },
});

export const { setActiveSection, finishSection } = sectionsSlice.actions;

export default sectionsSlice.reducer;
