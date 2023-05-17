// actions.js
export const SET_VALIDITY = "SET_VALIDITY";

export const setValidity = (isValid) => {
    return { type: SET_VALIDITY, payload: isValid };
};
