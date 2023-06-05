import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    kennzahlenData: {
        prognose: false,
        umsatz: [
            {
                title: "Umsatz 2020",
                year: 2020,
                value: 25000000,
            },
            {
                title: "Umsatz 2021",
                year: 2021,
                value: 25000000,
            },
            {
                title: "Umsatz 2022",
                year: 2022,
                value: 25000000,
            },
        ],
        ebit: [
            {
                title: "Ebit 2020",
                year: 2020,
                value: 5000000,
            },
            {
                title: "Ebit 2021",
                year: 2021,
                value: 5000000,
            },
            {
                title: "Ebit 2022",
                year: 2022,
                value: 5000000,
            },
        ],
        gewinn: {
            data: [
                {
                    title: "Gewinn 2020",
                    year: 2020,
                },
                {
                    title: "Gewinn 2021",
                    year: 2021,
                },
                {
                    title: "Gewinn 2022",
                    year: 2022,
                },
            ],
            options: [
                {
                    type: "ganz untypisch",
                    value: 0.8
                },
                {
                    type: "eher untypisch",
                    value: 0.85
                },
                {
                    type: "nur teilweise typisch",
                    value: 0.9
                },
                {
                    type: "eher typisch",
                    value: 0.95
                },
                {
                    type: "typisch",
                    value: 1
                }
            ],
        },
        averageValues: {
            averageUmsatz: 0,
            averageEbit: 0,
        },
    },
};

const kennzahlenSlice = createSlice({
    name: "kennzahlen",
    initialState,
    reducers: {
        setPrognose: (state, action) => {
            state.kennzahlenData.prognose = action.payload;
        },
        setUmsatz: (state, action) => {
            state.kennzahlenData.umsatz = action.payload;
        },
        setEbit: (state, action) => {
            state.kennzahlenData.ebit = action.payload;
        },
        setGewinn: (state, action) => {
            state.kennzahlenData.gewinn = action.payload;
        },
        setAverageUmsatz: (state, action) => {
            state.kennzahlenData.averageValues.averageUmsatz = action.payload;
        },
        setAverageEbit: (state, action) => {
            state.kennzahlenData.averageValues.averageEbit = action.payload;
        },
    },
});

export const {
    setPrognose,
    setUmsatz,
    setEbit,
    setGewinn,
    setAverageUmsatz,
    setAverageEbit,
} = kennzahlenSlice.actions;

export default kennzahlenSlice.reducer;
