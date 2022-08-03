import classes from './Counter.module.css';
import { counterActions } from '../store/counter-slice';

import {useSelector,useDispatch} from 'react-redux'

const Counter = () => {
  const counter = useSelector(state=>state.counter.counter);
  const dispatch = useDispatch();
  const showCounter = useSelector(state=>state.counter.showCounter)
  
  
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };
  const increaseHandler=() => {
  dispatch(counterActions.increase(5))    
  }

  // const incrementHandler = () => {
  //   dispatch({type:'increment'});
  // };
  // const decrementHandler = (e) => {
  //   dispatch({type:'decrement'});
  // };

  // const toggleCounterHandler = (e) => {
  //   dispatch({type:'toggle'});
  // };
  // const increaseHandler=() => {
  // dispatch({
  //   type:'increase',
  //   payload:5
  // })    
  // }

  return (
    <main className={classes.counter}>
      
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={increaseHandler}>Increment By 5</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>

    </main>
  );
};

export default Counter;
