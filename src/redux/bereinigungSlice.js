import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    bereinigungData: {
        gehalt: [
            {
                title: "Gehalt 2020",
                year: 2020,
                value: null
            },
            {
                title: "Gehalt 2021",
                year: 2021,
                value: null
            },
            {
                title: "Gehalt 2022",
                year: 2022,
                value: null
            },
        ],
        anpassungEbit: [
            {
                title: "Anpassung 2020",
                year: 2020,
                value: null,
                bereinigungEbit: null
            },
            {
                title: "Anpassung 2021",
                year: 2021,
                value: null,
                bereinigungEbit: null
            },
            {
                title: "Anpassung 2022",
                year: 2022,
                value: null,
                bereinigungEbit: null
            },
        ],
        typischGehalt: '',
        erklaerungAnpassungEbit: ''
    }
};

const bereinigungSlice = createSlice({
    name: 'bereinigungen',
    initialState,
    reducers: {
        setGehaltValue: (state, action) => {
            state.bereinigungData.gehalt = action.payload;
        },
        setAnpassungEbitValue: (state, action) => {
            state.bereinigungData.anpassungEbit = action.payload;
        },
        setTypischGehalt: (state, action) => {
            state.bereinigungData.typischGehalt = action.payload;
        },
        setErklaerungAnpassungEbit: (state, action) => {
            state.bereinigungData.erklaerungAnpassungEbit = action.payload;
        },
    },
});

export const {
    setGehaltValue,
    setAnpassungEbitValue,
    setTypischGehalt,
    setErklaerungAnpassungEbit,
} = bereinigungSlice.actions;

export default bereinigungSlice.reducer;
