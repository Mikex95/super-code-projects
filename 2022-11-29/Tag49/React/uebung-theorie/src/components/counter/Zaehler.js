import React, { useState } from 'react';

const Zaehler = () => {
    // const [getter, setter] = useState(initialstate);
    const [zaehler, setZaehler] = useState(0);
    
    return ( 
        <div style={{ textAlign: 'center'}}>
            <h1>Counter</h1>
            <p>{zaehler}</p>
            <button onClick={() => setZaehler(zaehler +1)}>+</button>
            <button onClick={() => setZaehler(zaehler -1)}>-</button>
        </div>
     );
}
 
export default Zaehler;