import { Link } from "react-router-dom";
import "./Products.css"
const Products = () => {
    return ( 
        <section>
            <div className="wrapper-products">
                <h2 className="who-style">✯ What we have</h2>
                <div className="border"></div>
                <h2 className="products-us-style">PRODUCTS</h2>
            </div> 
            <div className="wrapper-products">
                <div>
                    <p>Jenson</p>
                    <img src={require('../img/Tisch.png')} />
                    <div className="button-container">
                    <Link className="button-products"to='/jenson'>Shop Now</Link>
                    </div>
                </div>
                <div>
                    <p>Deon</p>
                    <img src={require('../img/Stuhl.png')} />
                    <div className="button-container">
                    <Link className="button-products"to='/deon'>Shop Now</Link>
                    </div>
                </div>
                <div>
                    <p>Krisha</p>
                    <img src={require('../img/Schuesseln.png')} />
                    <div className="button-container">
                    <Link className="button-products"to='/krisha'>Shop Now</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Products;