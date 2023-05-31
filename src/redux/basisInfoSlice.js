import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    branche: {},
    lage: {
        key: 'städtisch',
        value: 1,
    },
    alter: 1,
};

const basisInfoSlice = createSlice({
    name: 'basisInfo',
    initialState,
    reducers: {
        setBranche: (state, action) => {
            state.branche = action.payload;
        },
        setLage: (state, action) => {
            state.lage = action.payload;
        },
        setAlter: (state, action) => {
            state.alter = action.payload;
        },
    },
});

export const {
    setBranche,
    setLage,
    setAlter,
} = basisInfoSlice.actions;

export default basisInfoSlice.reducer;
