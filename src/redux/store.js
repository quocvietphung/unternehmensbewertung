// store.js
import { configureStore } from '@reduxjs/toolkit'
import validationReducer from './reducers';
import basisInfoReducer from './basisInfoSlice';

export default configureStore({
    reducer: {
        validation: validationReducer,
        basisInfo: basisInfoReducer,
    }
});
