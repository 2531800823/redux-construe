import * as ACTION from "../../constant/index";
import { initState } from "./inOrDeReducer";

export default function muOrDiReducer(preState = initState, action) {
  const { type, value } = action;

  switch (type) {
    case ACTION.MULTIPLY: //如果是乘
      return preState * value;
    case ACTION.DIVIDE: //若果是除
      return preState / value;
    default:
      return preState;
  }
}
