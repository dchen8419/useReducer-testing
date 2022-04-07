import React, { useState, useReducer } from 'react';


const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement'
}

function reducer(state, action) {
  switch(action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1}
    case ACTIONS.DECREMENT:
      return { count: state.count - 1}
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {count : 0 })
  // Return an array of values. First value(count) will be state(current state). Second (setCount) is a function which is going to 
  // allow us to update our state. 

  function decrementCount() {
    dispatch( {type: ACTIONS.DECREMENT})
    // Use a function component to update previous state. Don't use count because it's not the optimal way. 
    // Using Functions is optimal
  }

  function incrementCount() {
    dispatch({type: ACTIONS.INCREMENT})
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{state.count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;