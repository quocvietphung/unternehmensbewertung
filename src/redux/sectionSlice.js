import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    activeSection: 'basis',
    finishedSections: [],
    sectionOrder: ['basis', 'kennzahlen', 'bereinigung', 'equity', 'quality', 'anlass'],
};

const sectionsSlice = createSlice({
    name: 'sections',
    initialState,
    reducers: {
        setActiveSection: (state, action) => {
            state.activeSection = action.payload;
        },
        finishSection: (state, action) => {
            const section = action.payload;
            if (!state.finishedSections.includes(section)) {
                state.finishedSections.push(section);
            }
        },
    },
});

export const { setActiveSection, finishSection } = sectionsSlice.actions;

export default sectionsSlice.reducer;
