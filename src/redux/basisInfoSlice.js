// basisFinoSlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    branchOptions: [],
    lageOptions: [],
};

const basisInfoSlice = createSlice({
    name: 'basisFino',
    initialState,
    reducers: {
        setBranchOptions: (state, action) => {
            state.branchOptions = action.payload;
        },
        setLageOptions: (state, action) => {
            state.lageOptions = action.payload;
        },
    },
});

export const { setBranchOptions, setLageOptions } = basisInfoSlice.actions;

export default basisInfoSlice.reducer;
