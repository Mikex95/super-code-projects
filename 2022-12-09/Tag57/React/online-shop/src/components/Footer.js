import "./Footer.css"
const Footer = () => {
    return ( 
    <footer>
        <section className="grid-footer">
            <div>
                <h4>Info</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos soluta quisquam ipsam, culpa ipsum ducimus.</p>
            </div>
            <div>
                <h4>Get in touch</h4>
                <p>hello@thedsgnshop.com</p>
                <p>Los Angeles, CA</p>
            </div>
            <div>
                <h4>Newsletter</h4>
                <p>Sign up for the latest arrivals.</p>
            </div>
            <div>
                <h4>Follow us</h4>
                <div>
                    <a href="#">
                        <img src={require("../img/icons8-facebook-neu-48.png")} alt="" />
                    </a>
                    <a href="#">
                        <img src={require("../img/icons8-instagram-48.png")} alt="" />
                    </a>
                    <a href="">
                        <img src={require("../img/icons8-twitter-48.png")} alt="" />
                    </a>
                </div>
            </div>
        </section>
        <section className="footer-bottom">
            <p>2021 The Design Shop</p>
            <div>
                <a href="#">Disclaimer</a>
                <a href="#">Shop</a>
                <a href="#">Weely picks</a>
            </div>
            <p>Made by Mikex95</p>
        </section>
    </footer>
    );
}
 
export default Footer;