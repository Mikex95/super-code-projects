import { Link } from "react-router-dom";
import "./Home.css"
const Home = () => {
    return ( 
    <section className="wrapper-home">
        <article>
            <p>Are you looking for wooden <br></br> furniture for your place?</p>
            <h2>This is the <br></br> Right Place</h2> 
            <Link className="button-home"to='/products'>Explore Categories</Link>
        </article> 
        <img src={require('../img/Home.png')} />
    </section>);
}
 
export default Home;