import {
  createDecrementAction,
  createDecrementAsyncAction,
  createIncrementAction,
  createIncrementAsyncAction,
} from '@/redux/actions';
import store from '@/redux/store';
import { useEffect, useState } from 'react';

const InOrDe = () => {
  const [state, setState] = useState(1);

  const { dispatch, subscribe, getState } = store;

  const increment = () => {
    dispatch(createIncrementAction(1));
  };
  const decrement = () => {
    dispatch(createDecrementAction(1));
  };
  const incrementIAsync = () => {
    dispatch(createIncrementAsyncAction(10, 300) as any);
  };
  const decrementAsync = () => {
    dispatch(createDecrementAsyncAction(10, 500) as any);
  };

  useEffect(() => {
    const unsubscribe = subscribe(() => {
      setState(getState().inOrDeReducer);
    });

    return () => {
      unsubscribe();
    };
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
