import "./About.css"
const About = () => {
    return ( 
    <section>
        <div className="wrapper-about">
            <h2 className="who-style">✯ Who we are</h2>
            <div></div>
            <h2 className="about-us-style">ABOUT US</h2>
        </div> 
        <div className="wrapper-about-article">
            <div className="wrapper-image-about">
                <img src={require('../img/About.png')} />
            </div>
            <article>
                <h4>WOODIES is the home of <br></br> modern wooden furniture</h4>
                <p>the answer to your need for furniture <br></br> with shapes, sizes and colors.</p>
            </article>
        </div>
    </section>);
}
 
export default About;