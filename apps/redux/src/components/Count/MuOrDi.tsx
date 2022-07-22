import {
  createDivideAction,
  createDivideAsyncAction,
  createMultiplyAction,
  createMultiplyAsyncAction,
} from '@/redux/actions';
import store from '@/redux/store';
import { useEffect, useState } from 'react';

const MuOrDi = () => {
  const [state, setState] = useState(1);

  const { dispatch, subscribe, getState } = store;

  const increment = () => {
    dispatch(createMultiplyAction(2));
  };
  const decrement = () => {
    dispatch(createDivideAction(2));
  };
  const incrementIAsync = () => {
    dispatch(createMultiplyAsyncAction(10, 300) as any);
  };
  const decrementAsync = () => {
    dispatch(createDivideAsyncAction(10, 500) as any);
  };

  useEffect(() => {
    const unsubscribe = subscribe(() => {
      setState(getState().muOrDiReducer);
    });

    return () => {
      unsubscribe();
    };
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
