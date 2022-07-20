import {
  createDecrementAsyncAction,
  createIncrementAsyncAction,
} from "@/redux/actions";
import { useSelector,useDispatch } from 'react-redux'

const InOrDe = () => {
  // TODO 类型
  const state = useSelector(state => state.inOrDeReducer)
  const dispatch = useDispatch()

  const increment = () => {
    dispatch({ type: "increment", payload: 1 });
  };
  const decrement = () => {
    dispatch({ type: "decrement", payload: 1 });
  };
  const incrementIAsync = () => {
    dispatch(createIncrementAsyncAction(10, 300));
  };
  const decrementAsync = () => {
    dispatch(createDecrementAsyncAction(10, 500));
  };

 


  return (
    <div>
      <h1>当前结果为：{state}</h1>
      <button onClick={increment}>同步+1</button>
      <button onClick={decrement}>同步-1</button>
      <button onClick={incrementIAsync}>异步+10</button>
      <button onClick={decrementAsync}>异步-10</button>
    </div>
  );
};
export default InOrDe;
