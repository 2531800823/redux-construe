import { INCREMENT, DECREMENT } from '@/constant';
import { Dispatch } from 'redux';

//同步action，就是指action的值为Object类型的一般对象
export const createIncrementAction = (payload: number) => ({
  type: INCREMENT,
  payload,
});
export const createDecrementAction = (payload: number) => ({
  type: DECREMENT,
  payload,
});

// 异步 +
export const createIncrementAsyncAction = (payload: number, time: number) => {
  return (dispatch: Dispatch) => {
    setTimeout(() => {
      dispatch(createIncrementAction(payload));
    }, time);
  };
};

// 异步 -
export const createDecrementAsyncAction = (payload: number, time: number) => {
  return (dispatch: Dispatch) => {
    setTimeout(() => {
      dispatch(createDecrementAction(payload));
    }, time);
  };
};
