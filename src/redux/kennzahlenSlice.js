import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    checked: false,
    kennzahlen: {
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
            }
        ],
        ebit: [
            {
                title: "Ebit 2020",
                year: 2020,
                value: 5000000
            },
            {
                title: "Ebit 2021",
                year: 2021,
                value: 5000000
            },
            {
                title: "Ebit 2022",
                year: 2022,
                value: 5000000
            }
        ],
        gewinnTypisch: {
            gewinn: [
                {
                    title: "Gewinn 2020",
                    year: 2020,
                    value: ""
                },
                {
                    title: "Gewinn 2021",
                    year: 2021,
                    value: ""
                },
                {
                    title: "Gewinn 2022",
                    year: 2022,
                    value: ""
                }
            ],
            options: [
                'ganz untypisch',
                'eher untypisch',
                'nur teilweise typisch',
                'eher typisch',
                'typisch'
            ]
        }
    }
};

const kennzahlenSlice = createSlice({
    name: "kennzahlen",
    initialState,
    reducers: {
        setChecked: (state, action) => {
            state.checked = action.payload;
        },
        setUmsatz: (state, action) => {
            state.kennzahlen.umsatz = action.payload;
        },
        setEbit: (state, action) => {
            state.kennzahlen.ebit = action.payload;
        },
        setGewinnTypisch: (state, action) => {
            state.kennzahlen.gewinnTypisch = action.payload;
        }
    }
});

export const {
    setChecked,
    setUmsatz,
    setEbit,
    setGewinnTypisch
} = kennzahlenSlice.actions;

export default kennzahlenSlice.reducer;