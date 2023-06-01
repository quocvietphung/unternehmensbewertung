import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    checked: false,
    umsatz: Array(3).fill(25000000),
    ebit: Array(3).fill(5000000),
    gewinnTypisch: Array(3).fill(""),
};

const kennzahlenSlice = createSlice({
    name: "kennzahlen",
    initialState,
    reducers: {
        setChecked: (state, action) => { // New reducer for checked
            state.checked = action.payload;
        },
        setUmsatz: (state, action) => {
            state.umsatz = action.payload;
        },
        setEbit: (state, action) => {
            state.ebit = action.payload;
        },
        setGewinnTypisch: (state, action) => {
            state.gewinnTypisch = action.payload;
        },
    },
});

export const { setChecked, setUmsatz, setEbit, setGewinnTypisch } = kennzahlenSlice.actions; // Export setChecked here
export default kennzahlenSlice.reducer;