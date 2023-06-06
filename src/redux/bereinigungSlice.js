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
            const { value } = action.payload;
            const gehaltItem = state.bereinigungData.gehalt.find(item => item.year === 2023);
            if (gehaltItem) {
                gehaltItem.value = value;
            }
        },
        setAnpassungEbitValue: (state, action) => {
            const { value, bereinigungEbit } = action.payload;
            const anpassungItem = state.bereinigungData.anpassungEbit.find(item => item.year === 2023);
            if (anpassungItem) {
                anpassungItem.value = value;
                anpassungItem.bereinigungEbit = bereinigungEbit;
            }
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
