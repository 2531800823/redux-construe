import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

import reduxThunk from "redux-thunk";
import reduxPromise from "redux-promise";

import allReducer from "../reducer";

export default createStore(
  allReducer,
  composeWithDevTools(applyMiddleware(reduxThunk, reduxPromise) as any)
);
