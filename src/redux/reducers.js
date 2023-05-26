// reducers.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isValid: true,
    error: [],
    unternehmensbewertung: 0, // Thêm trường unternehmensbewertung vào initialState
};

const validationSlice = createSlice({
    name: 'validation',
    initialState,
    reducers: {
        setValidity: (state, action) => {
            state.isValid = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setUnternehmensbewertung: (state, action) => {
            state.unternehmensbewertung = action.payload;
        }, // Thêm action setUnternehmensbewertung
    },
});

export const { setValidity, setError, setUnternehmensbewertung } = validationSlice.actions;

export default validationSlice.reducer;
