import React from 'react';
import { createStore } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux';


const initialState = {
  count: 0
};





const increment = () => ({
  type: 'INCREMENT'
});

const decrement = () => ({
  type: 'DECREMENT'
});


const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};


const store = createStore(counterReducer);


const Counter = () => {
  const count = useSelector((state) => state.count); 
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};


const CounterApp = () => (
  <Provider store={store}>
    <div>
      <h2>REDUX COUNTER</h2>
      <Counter />
    </div>
  </Provider>
);



export default CounterApp;
