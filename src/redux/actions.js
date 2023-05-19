// actions.js
export const SET_VALIDITY = "SET_VALIDITY";
export const SET_ERROR = "SET_ERROR";

export const setValidity = (isValid) => {
    return { type: SET_VALIDITY, payload: isValid };
};

export const setError = (error) => {
    return { type: SET_ERROR, payload: error };
};