import { MULTIPLY, DIVIDE } from '@/constant';

//同步action，就是指action的值为Object类型的一般对象
export const createMultiplyAction = (payload: number) => ({
  type: MULTIPLY,
  payload,
});
export const createDivideAction = (payload: number) => ({
  type: DIVIDE,
  payload,
});

// 异步 +
export const createMultiplyAsyncAction = (payload: number, time: number) => {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  }).then(() => {
    return createMultiplyAction(payload);
  });
};

// 异步 -
export const createDivideAsyncAction = async (
  payload: number,
  time: number
) => {
  await new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
  return createDivideAction(payload);
};
