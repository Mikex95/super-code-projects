import React, { useState } from 'react';
import './App.css';

function App() {

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  }

  return (
      <div className="wrapper">
        <div className="button-box">
            <p>Why is React great?</p>
            <button onClick={handleOpen}>+</button>
        </div>
            {open ? (
              <div className="box"> Because its good!</div>
            ): null}
            
      </div>
  );
}

export default App;
