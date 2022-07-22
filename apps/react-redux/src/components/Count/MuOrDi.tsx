import {
  createDivideAsyncAction,
  createMultiplyAsyncAction,
  createMultiplyAction,
  createDivideAction,
} from '@/redux/actions';
import { RootState } from '@/redux/reducer';
import { useSelector, useDispatch } from 'react-redux';

const MuOrDi = () => {
  const state = useSelector((state: RootState) => state.muOrDiReducer);
  const dispatch = useDispatch();

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
