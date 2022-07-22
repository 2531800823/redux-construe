import { combineReducers } from 'redux';

import inOrDeReducer from './inOrDeReducer';
import muOrDiReducer from './muOrDiReducer';

const rootReducer = combineReducers({ inOrDeReducer, muOrDiReducer });
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
