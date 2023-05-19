// store.js
import { configureStore } from '@reduxjs/toolkit'
import validationReducer from "./reducers";

export const store = configureStore({
    reducer: {
        validation: validationReducer
    }
});
