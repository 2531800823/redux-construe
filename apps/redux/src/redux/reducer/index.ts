import { combineReducers } from "redux";

import inOrDeReducer from "./inOrDeReducer";
import muOrDiReducer from "./muOrDiReducer";

export default combineReducers({ inOrDeReducer, muOrDiReducer });
