import { INCREMENT, DECREMENT } from '@/constant';
import { IAction } from '@/types';
import { Dispatch } from 'redux';

//同步action，就是指action的值为Object类型的一般对象
export const increment = (payload: number): IAction => ({
  type: INCREMENT,
  payload,
});
export const decrement = (payload: number): IAction => ({
  type: DECREMENT,
  payload,
});

// 异步 +
export const incrementAsync = (payload: number, time: number) => {
  return (dispatch: Dispatch) => {
    setTimeout(() => {
      dispatch(increment(payload));
    }, time);
  };
};

// 异步 -
export const decrementAsync = (payload: number, time: number) => {
  return (dispatch: Dispatch) => {
    setTimeout(() => {
      dispatch(decrement(payload));
    }, time);
  };
};
