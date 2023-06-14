import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    anlassData: {
        selectedOption: ''
    },
};

const anlassSlice = createSlice({
    name: 'anlass',
    initialState,
    reducers: {
        setAnlass: (state, action) => {
            state.anlassData.selectedOption = action.payload;
        },
        clearAnlass: (state) => {
            state.anlassData.selectedOption = '';
        },
    },
});

export const { setAnlass, clearAnlass } = anlassSlice.actions;

export default anlassSlice.reducer;
