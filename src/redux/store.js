// store.js
import { configureStore } from '@reduxjs/toolkit'
import validationReducer from './reducers';
import basisInfoReducer from './basisInfoSlice';
import kennzahlenReducer from './kennzahlenSlice';

export default configureStore({
    reducer: {
        validation: validationReducer,
        basisInfo: basisInfoReducer,
        kennzahlen: kennzahlenReducer,
    }
});
