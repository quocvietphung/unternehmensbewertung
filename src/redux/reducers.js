// reducers.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isValid: true,
    error: [],
};

const validationSlice = createSlice({
    name: 'validation',
    initialState,
    reducers: {
        setValidity: (state, action) => {
            state.isValid = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
})

export const { setValidity, setError } = validationSlice.actions

export const validationReducer = validationSlice.reducer // here


const basisInfoInitialState = {
    branche: "",
    lage: "städtisch",
    alter: 1,
};

const basisInfoSlice = createSlice({
    name: 'basisInfo',
    initialState: basisInfoInitialState,
    reducers: {
        setBranche: (state, action) => {
            state.branche = action.payload;
        },
        setLage: (state, action) => {
            state.lage = action.payload;
        },
        setAlter: (state, action) => {
            state.alter = action.payload;
        },
    }
})

export const { setBranche, setLage, setAlter } = basisInfoSlice.actions

export const basisInfoReducer = basisInfoSlice.reducer
