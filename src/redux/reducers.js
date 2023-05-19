// reducers.js
import { SET_VALIDITY, SET_ERROR } from './actions';

const initialState = {
    isValid: true,
    error: '',
};

const validationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_VALIDITY:
            return { ...state, isValid: action.payload };
        case SET_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

export default validationReducer;
