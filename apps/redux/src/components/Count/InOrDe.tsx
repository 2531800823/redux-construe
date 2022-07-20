import {
  createDecrementAsyncAction,
  createIncrementAsyncAction,
} from "@/redux/actions";
import store from "@/redux/store";
import { useEffect, useState } from "react";

const InOrDe = () => {
  const [state, setState] = useState(1);

  const increment = () => {
    store.dispatch({ type: "increment", value: 1 });
  };
  const decrement = () => {
    store.dispatch({ type: "decrement", value: 1 });
  };
  const incrementIAsync = () => {
    store.dispatch(createIncrementAsyncAction(10, 300));
  };
  const decrementAsync = () => {
    store.dispatch(createDecrementAsyncAction(10, 500));
  };

  useEffect(() => {
    store.subscribe(() => {
      setState(store.getState().inOrDeReducer);
    });
  }, []);

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
