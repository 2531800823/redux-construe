import { MULTIPLY, DIVIDE } from "@/constant";

//同步action，就是指action的值为Object类型的一般对象
export const createMultiplyAction = (value: number) => ({
  type: MULTIPLY,
  value,
});
export const createDivideAction = (value: number) => ({
  type: DIVIDE,
  value,
});

// TODO 注意多次点击
// 异步 +
export const createMultiplyAsyncAction = (value: number, time: number) => {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  }).then(() => {
    return createMultiplyAction(value);
  });
};

// 异步 -
export const createDivideAsyncAction = async (value: number, time: number) => {
  await new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
  return createDivideAction(value);
};
