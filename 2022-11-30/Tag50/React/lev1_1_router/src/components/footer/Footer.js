import "./Footer.css"
const Footer = () => {
    return ( 
    <footer>
        <div>
            <img src={require('../img/Logo.png')} />
            <p>(012) 8967453</p>
            <p>woodies@gmail.com</p>
            <p>Jakarta, Indonesia</p>
            <p className="bottom-tag">© 2020 WOODIES</p>
        </div>
        <img className="footer-chair" src={require('../img/Footer.png')} />
    </footer> );
}
 
export default Footer;