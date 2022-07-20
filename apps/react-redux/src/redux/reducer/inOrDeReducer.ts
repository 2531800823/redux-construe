import * as ACTION from "../../constant/index";

export const initState = 1; //初始化状态

export default function inOrDeReducer(preState = initState, action) {
  //从action对象中获取：type、data
  const { type, value } = action;
  //根据type决定如何加工数据

  switch (type) {
    case ACTION.INCREMENT: //如果是加
      return preState + value;
    case ACTION.DECREMENT: //若果是减
      return preState - value;
    default:
      return preState;
  }
}
