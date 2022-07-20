import { INCREMENT, DECREMENT } from "@/constant";

//同步action，就是指action的值为Object类型的一般对象
export const increment = (payload: number) => ({
  type: INCREMENT,
  payload,
});
export const decrement = (payload: number) => ({
  type: DECREMENT,
  payload,
});


// TODO 注意多次点击
// 异步 +
export const incrementAsync = (payload: number, time: number) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment(payload));
    }, time);
  };
};

// 异步 -
export const decrementAsync = (payload: number, time: number) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(decrement(payload));
    }, time);
  };
};
