// store.js
import { configureStore } from '@reduxjs/toolkit'
import { validationReducer, basisInfoReducer } from "./reducers";

export const store = configureStore({
    reducer: {
        validation: validationReducer,
        basisInfo: basisInfoReducer
    }
});
