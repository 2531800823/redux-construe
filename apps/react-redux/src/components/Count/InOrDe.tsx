import {
  decrement,
  decrementAsync,
  increment,
  incrementAsync,
} from '@/redux/actions';
import { connect } from 'react-redux';
import { RootState } from '@/redux/reducer';

const InOrDe = (props: any) => {
  const { increment, decrement, incrementAsync, decrementAsync, state } = props;

  return (
    <div>
      <h1>当前结果为：{state}</h1>
      <button onClick={() => increment(1)}>同步+1</button>
      <button onClick={() => decrement(1)}>同步-1</button>
      <button onClick={() => incrementAsync(10, 300)}>异步+10</button>
      <button onClick={() => decrementAsync(10, 500)}>异步-10</button>
    </div>
  );
};

export default connect(
  (state: RootState) => ({
    state: state.inOrDeReducer,
  }), //映射状态
  { increment, decrement, incrementAsync, decrementAsync } //映射操作状态的方法
)(InOrDe);

// function myConnect(fn: Function, obj: Object) {
//   const value = fn();
//   return (Component: ReactNode) => {
//     return (props: any) => {
//       return (
//         <div>
//           <Component {...props} {...obj} {...value} />
//         </div>
//       );
//     };
//   };
// }
