import { Reducer } from 'redux';
import * as ACTION from '../../constant/index';
import { initState } from './inOrDeReducer';

const muOrDiReducer: Reducer<number> = (preState = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION.MULTIPLY: //如果是乘
      return preState * payload;
    case ACTION.DIVIDE: //若果是除
      return preState / payload;
    default:
      return preState;
  }
};
export default muOrDiReducer;
