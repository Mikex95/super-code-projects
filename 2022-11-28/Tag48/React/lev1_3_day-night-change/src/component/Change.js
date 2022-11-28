import React, { useState } from 'react';
import "./Change.css"


const Change = () => {

    const [change, setChange] = useState(false);

    const weatherChange = () => {
        setChange(!change);
    };

    return ( 
        <div className="wrapper">
            {change ? (
            <div className="box-button-day">
            <h1>Es ist Tag ☀️</h1>
           <button onClick={weatherChange}>Wechsel zu Nacht</button>
           </div>
           ):(
            <div className="box-button-night">
            <h1>Es ist Nacht 🌙</h1>
            <button onClick={weatherChange}>Wechsel zu Tag</button>
            </div>
          )}
        </div>
     );
}
 
export default Change;

