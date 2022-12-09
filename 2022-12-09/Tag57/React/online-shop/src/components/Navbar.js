import "./Navbar.css"
const Navbar = () => {
    return ( 
    <header>
        <p>THE DESIGN SHOP</p>
    <nav>
        <ul>
            <li>
                <a href="#">Featured</a>
            </li>
            <li>
                <a href="#">Lifestyle</a>
            </li>
            <li>
                <a href="#">Books</a>
            </li>
            <li>
                <a href="#">Digital</a>
            </li>
            <li className="navbar-space" >
                <a href="#">Weekly Picks</a>
            </li>
            <li>
                <a href="#">The Design Blog</a>
            </li>
        </ul>
    </nav>
    </header>);
}
 
export default Navbar;