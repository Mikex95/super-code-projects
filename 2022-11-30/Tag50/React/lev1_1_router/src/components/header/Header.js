import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
    return ( 
    <header>
            <img src={require('../img/Logo.png')} />
            <nav>
                <Link className="home" to='/'>Home</Link>
                <Link className="about" to='/about'>About</Link>
                <Link className="products"to='/products'>Products</Link>
            </nav>
    </header> );
}
 
export default Header;