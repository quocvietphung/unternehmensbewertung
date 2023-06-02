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
        gewinnTypisch: {
            gewinn: [
                {
                    title: "Gewinn 2020",
                    year: 2020,
                    value: "",
                },
                {
                    title: "Gewinn 2021",
                    year: 2021,
                    value: "",
                },
                {
                    title: "Gewinn 2022",
                    year: 2022,
                    value: "",
                },
            ],
            options: [
                "ganz untypisch",
                "eher untypisch",
                "nur teilweise typisch",
                "eher typisch",
                "typisch",
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
            state.kennzahlenData.prognose = action.payload; // Đổi tên hàm này từ "setChecked" thành "setPrognose"
        },
        setUmsatz: (state, action) => {
            state.kennzahlenData.umsatz = action.payload;
        },
        setEbit: (state, action) => {
            state.kennzahlenData.ebit = action.payload;
        },
        setGewinnTypisch: (state, action) => {
            state.kennzahlenData.gewinnTypisch = action.payload;
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
    setPrognose, // Đổi tên hàm này từ "setChecked" thành "setPrognose"
    setUmsatz,
    setEbit,
    setGewinnTypisch,
    setAverageUmsatz,
    setAverageEbit,
} = kennzahlenSlice.actions;

export default kennzahlenSlice.reducer;
