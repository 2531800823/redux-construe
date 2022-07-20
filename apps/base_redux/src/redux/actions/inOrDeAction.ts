import { INCREMENT, DECREMENT } from "@/constant";

//同步action，就是指action的值为Object类型的一般对象
export const createIncrementAction = (value: number) => ({
  type: INCREMENT,
  value,
});
export const createDecrementAction = (value: number) => ({
  type: DECREMENT,
  value,
});

// TODO 注意多次点击
// 异步 +
export const createIncrementAsyncAction = (value: number, time: number) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createIncrementAction(value));
    }, time);
  };
};

// 异步 -
export const createDecrementAsyncAction = (value: number, time: number) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createDecrementAction(value));
    }, time);
  };
};
