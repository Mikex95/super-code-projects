import "./Counter.css"
import {React, useState } from 'react'

const Counter = () => {

    let [counter, setCounter] = useState(0);

   //increase counter 
   const increase = () => {
    setCounter(count => count + 1)
   }

    //decrease counter
  const decrease = () => {
    setCounter(count => count - 1);
  };
 
  //reset counter 
  const reset = () => {
    setCounter(0)
  }

    return ( 
        <div className="counter">
        <h1>Counter</h1>
        <span>{counter}</span>
        <div>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
    );
}
 
export default Counter;