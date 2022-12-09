import React from 'react';
import "./Main.css"
const Main = () => {
    return ( 
    <main>
        <section className="grid-four-pics">
            <figure>
                <img src={require("../img/01-Home.png")} alt="loudspeaker" />
                <figcaption>
                    Vifa Copenhagen 2.0 Loudspeaker
                </figcaption>
                <p>$799.00</p>
            </figure>
            <figure>
                <img src={require("../img/29-Lifestyle_b-o.png")} alt="Headphones" />
                <figcaption>
                    Bang & Cloufsen Wireless Headphones
                </figcaption>
                <p>$174.00</p>
            </figure>
            <figure>
                <img src={require("../img/01-Books.png")} alt="books" />
                <figcaption>
                    Poketo: Creative Spaces
                </figcaption>
                <p>$25.00</p>
            </figure>
            <figure>
                <img src={require("../img/02-Lifestyle.png")} alt="backpack" />
                <figcaption>
                    Ucon Acrobatics Hajo Backpack
                </figcaption>
                <p>$79.00</p>
            </figure>
        </section>
        <section className="grid-two-pics">
        <figure>
                <img src={require("../img/46-Home_bm.png")} alt="backpack" />
                <figcaption>
                    Summer Print by Bratislav Milenkovic
                </figcaption>
                <p>$27.00</p>
            </figure>
            <figure>
                <img src={require("../img/45-Home_hem.png")} alt="backpack" />
                <figcaption>
                    Palo modular Corner Sofia by Hem
                </figcaption>
                <p>$3699.00</p>
            </figure>
        </section>
    </main> 
    );
}
 
export default Main;