import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    checked: false,
    kennzahlen: [],
    selectedGewinnTypischOptions: [],
};

const kennzahlenSlice = createSlice({
    name: 'kennzahlen',
    initialState,
    reducers: {
        setChecked: (state, action) => {
            state.checked = action.payload;
        },
        setKennzahlen: (state, action) => {
            state.kennzahlen = action.payload;
        },
        setSelectedGewinnTypischOptions: (state, action) => {
            state.selectedGewinnTypischOptions = action.payload;
        },
    },
});

export const {
    setChecked,
    setKennzahlen,
    setSelectedGewinnTypischOptions,
} = kennzahlenSlice.actions;

export default kennzahlenSlice.reducer;
