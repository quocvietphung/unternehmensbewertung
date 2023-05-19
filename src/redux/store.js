// store.js
import { createStore } from "redux";
import validationReducer from "./reducers";

export const store = createStore(validationReducer);
