import { configureStore } from '@reduxjs/toolkit';
import sectionsReducer from './sectionsSlice';
import validationReducer from './reducers';
import basisInfoReducer from './basisInfoSlice';
import kennzahlenReducer from './kennzahlenSlice';
import bereinigungReducer from './bereinigungSlice';

export default configureStore({
    reducer: {
        sections: sectionsReducer,
        validation: validationReducer,
        basisInfo: basisInfoReducer,
        kennzahlen: kennzahlenReducer,
        bereinigung: bereinigungReducer,
    },
});
