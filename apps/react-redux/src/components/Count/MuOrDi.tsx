import * as ACTION from "@/constant";
import {
  createDivideAsyncAction,
  createMultiplyAsyncAction,
} from "@/redux/actions";
import store from "@/redux/store";
import { useEffect, useState } from "react";

const MuOrDi = () => {
  const [state, setState] = useState(1);

  const increment = () => {
    store.dispatch({ type: ACTION.MULTIPLY, value: 2 });
  };
  const decrement = () => {
    store.dispatch({ type: ACTION.DIVIDE, value: 2 });
  };
  const incrementIAsync = () => {
    store.dispatch(createMultiplyAsyncAction(10, 300));
  };
  const decrementAsync = () => {
    store.dispatch(createDivideAsyncAction(10, 500));
  };

  useEffect(() => {
    store.subscribe(() => {
      setState(store.getState().muOrDiReducer);
    });
  }, []);

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
