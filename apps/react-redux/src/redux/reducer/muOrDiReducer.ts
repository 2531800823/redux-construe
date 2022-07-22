import { IAction } from '@/types';
import * as ACTION from '../../constant/index';
import { initState } from './inOrDeReducer';

export default function muOrDiReducer(preState = initState, action: IAction) {
  const { type, payload } = action;

  switch (type) {
    case ACTION.MULTIPLY: //如果是乘
      return preState * payload;
    case ACTION.DIVIDE: //若果是除
      return preState / payload;
    default:
      return preState;
  }
}
