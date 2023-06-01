import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    checked: false,
    umsatz: {},
    ebit: {},
    gewinnTypisch: {},
};

const kennzahlenSlice = createSlice({
    name: "kennzahlen",
    initialState,
    reducers: {
        setChecked: (state, action) => {
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

export const { setChecked, setUmsatz, setEbit, setGewinnTypisch } = kennzahlenSlice.actions;
export default kennzahlenSlice.reducer;