import "./InputFields.css";
import {useState} from 'react';

const InputFields = () => {
const [vorname, setVorname] = useState('');
const [nachname, setNachname] = useState('');
const [email, setEmail] = useState('');

const getInputValueVorname = (event)=>{
    setVorname(event.target.value);
}

const getInputValueNachname = (event)=>{
    setNachname(event.target.value);
}

const getInputValueEmail = (event)=>{
    setEmail(event.target.value);
}

    return ( 
        <section>
            <div className="input-box">
                <div>
                    <input type="text" onChange={getInputValueVorname} />
                    <input type="text" onChange={getInputValueNachname} />
                    <input type="text" onChange={getInputValueEmail} />
                    <h2>Vorname: {vorname}</h2>
                    <h2>Nachname: {nachname}</h2>
                    <h2>Email: {email}</h2>
                </div>
            </div>
        </section>
     );
}
 
export default InputFields;