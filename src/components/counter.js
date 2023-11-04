import React, { useState } from "react";


function Counter({ onUpdateSomeValue }) {
  const [count, setCount] = useState(10);
  const [color, setColor] = useState('pink');

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count !== 0) {
      setCount(count - 1);
    }
  }

  function reset(){
    setCount(10);
  }

  function changeColor(){
    setColor('#'+Math.random().toString(16).substr(-6));
  }

  return (
    <div style={{background: color}} id='counter'>

      <button onClick={decrement}>-</button>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <br></br>
      <button onClick={reset}>Reset</button>
      <br></br>
      <button onClick={changeColor}>Change Color! :)</button>
    </div>
  );
}

export default Counter;
