// reducers.js
import { SET_VALIDITY } from "./actions";

const initialState = {
    isValid: true,
};

export const validationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_VALIDITY:
            return { ...state, isValid: action.payload };
        default:
            return state;
    }
};
