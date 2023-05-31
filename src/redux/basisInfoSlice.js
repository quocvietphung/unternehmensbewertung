import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    branchOptions: [],
    lageOptions: [],
    branche: "",
    lage: "städtisch",
    alter: 1,
};

const basisInfoSlice = createSlice({
    name: 'basisInfo',
    initialState,
    reducers: {
        setBranchOptions: (state, action) => {
            state.branchOptions = action.payload;
        },
        setLageOptions: (state, action) => {
            state.lageOptions = action.payload;
        },
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
    setBranchOptions,
    setLageOptions,
    setBranche,
    setLage,
    setAlter,
} = basisInfoSlice.actions;

export default basisInfoSlice.reducer;
