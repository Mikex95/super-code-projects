import './App.css';

// speichern einmal das komplette Paket 'ract' innerhalb der variable React
// wir speichern zusätzlich die Funktion useState in der variable useState
import React, { useState } from 'react';
import TodoList from './Components/todolist/TodoList';

function App() {

  //let count = 0;

  //* const countState = useState(0);
  //* console.log(countState);

  //* const count = countState[0];
  //* const setCount = countState[1];


  //!! Kurzschreibweise: Array destructuring
  let [count, setCount] = useState(5);

  function increment () {
    console.log("increment aufruf");
    //React mitteilen, dass ein Update stattgefunden hat.
    // count++ würde hier nicht funktionieren.
    setCount(count + 1);
  }

 console.log("Render");

  return (
    <div className="App">
      <p className='count'>{count}</p>

      {/* increment als function as value */}
      <button onClick={increment}>+1</button>

      {/* /* decrement als arrow function*/}
      <button onClick={() => setCount(count - 1)}>-1</button>

      <TodoList />
    </div>
  );
}

export default App;
