import {
  decrement,
  decrementAsync,
  increment,
  incrementAsync,
} from "@/redux/actions";
import { connect, useSelector } from 'react-redux';

const InOrDe = (props) => {
  const { increment, decrement, incrementAsync, decrementAsync, state } = props;

  return (
    <div>
      <h1>当前结果为：{state}</h1>
      <button onClick={()=>increment(1)}>同步+1</button>
      <button onClick={()=>decrement(1)}>同步-1</button>
      <button onClick={()=>incrementAsync(10,300)}>异步+10</button>
      <button onClick={()=>decrementAsync(10,500)}>异步-10</button>
    </div>
  );
};


// export default connect(
//   (state) => ({
//     state: state.inOrDeReducer,
//   }), //映射状态
//   { increment, decrement, incrementAsync, decrementAsync } //映射操作状态的方法
// )(InOrDe);
function myConnect(fn, obj) {
  
  const value = useSelector(fn)
  return (Component) => {
    return (props) => {
      return (<div>
        <Component {...props} {...obj} {...value}/>
      </div>)
    }
  }
}

export default myConnect(
  (state) => ({
    state: state.inOrDeReducer,
  }), //映射状态
  { increment, decrement, incrementAsync, decrementAsync } //映射操作状态的方法
)(InOrDe);

