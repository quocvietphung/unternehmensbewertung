import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    umsatz: Array(3).fill(25000000),
    ebit: Array(3).fill(5000000),
    gewinnTypisch: Array(3).fill(""),
};

const kennzahlenSlice = createSlice({
    name: "kennzahlen",
    initialState,
    reducers: {
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

export const { setUmsatz, setEbit, setGewinnTypisch } = kennzahlenSlice.actions;
export default kennzahlenSlice.reducer;
