import "./Counter.css"
import React, { useRef, useState } from 'react';

const Counter = () => {

    const output = document.querySelector('.output-container p');
    let inputRef = useRef(null);
    const [count, setCount] = useState(0);
    
    return ( 
        <div className="wrapper">
            <div className="border">
                <div className="wrapper-img">
                     <img src="https://cdn.pixabay.com/photo/2016/10/27/09/45/banana-1773796_960_720.png" alt="banana" />
                </div>
                <div className="headline-container">
                    <h1>Banana Bank</h1>
                </div>
                <div className="output-container">
                    <h2>Girokonto</h2>
                    <p>{count}€</p>
                    <input type="number" placeholder="Gib einen Geldbetrag ein" id="message" name="message" ref={inputRef}/>
                </div>
                <div className="button-container">
                    <button onClick={() => setCount(count + Number(inputRef.current.value))}>Einzahlen</button>
                    <button onClick={() => setCount(count - Number(inputRef.current.value))} className="auszahlen-button">Auszahlen</button>
                    <button onClick={() => setCount(0)}>Reset</button>
                </div>
            </div>
        </div>
     );
}
 
export default Counter;