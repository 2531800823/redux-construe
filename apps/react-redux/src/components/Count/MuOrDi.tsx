import * as ACTION from "@/constant";
import {
  createDivideAsyncAction,
  createMultiplyAsyncAction,
} from "@/redux/actions";
import { useSelector,useDispatch } from 'react-redux'

const MuOrDi = () => {
  // TODO 类型
  const state = useSelector(state => state.muOrDiReducer)
  const dispatch = useDispatch()

  const increment = () => {
    dispatch({ type: ACTION.MULTIPLY, payload: 2 });
  };
  const decrement = () => {
    dispatch({ type: ACTION.DIVIDE, payload: 2 });
  };
  const incrementIAsync = () => {
    dispatch(createMultiplyAsyncAction(10, 300));
  };
  const decrementAsync = () => {
    dispatch(createDivideAsyncAction(10, 500));
  };

  return (
    <div>
      <h1>当前结果为：{state}</h1>
      <button onClick={increment}>同步*2</button>
      <button onClick={decrement}>同步/2</button>
      <button onClick={incrementIAsync}>异步*10</button>
      <button onClick={decrementAsync}>异步/10</button>
    </div>
  );
};

export default MuOrDi;
