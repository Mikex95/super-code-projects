import { Link } from "react-router-dom";
import "./Header.css"
import React, { useState } from 'react';

const Header = () => {

    const [change, setChange] = useState(false);
    
    const handleClick = () => {
        setChange(current => !current);
    }

    return ( <div className="wrapper">
                <h2>Kims Cafe Köln</h2>
            <div>
                <Link style={{backgroundColor: change ? 'green' : '',
                    }}onClick={handleClick} className="speisekarte" to='/'>Speisekarte</Link>
                <Link className="kontakt" to='/kontakt'>Kontakt</Link>
                <Link className="oeffnungszeiten" to='/oeffnungszeiten'>Oeffnungszeiten</Link>
                <Link className="galerie" to='/galerie'>Galerie</Link>
            </div>

    </div> );
}
 
export default Header;