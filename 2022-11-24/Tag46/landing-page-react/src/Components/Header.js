import "./Header.css"

const Header = () => {
    return ( 
        <header>
            <div class="wrapper">
                <h3>Hello There</h3>
                <h1>We Are Glint</h1>
                <div class="white-line">      </div>
                <p class="header-txt">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
                <section>
                    <div class="white-line-right">
                        <h2>127</h2>
                        <p>Award Received</p>
                    </div>
                    <div class="white-line-right">
                        <h2>1505</h2>
                        <p>Cups of Coffee</p>
                    </div>
                    <div class="white-line-right">
                        <h2>109</h2>
                        <p>Projects Completed</p>
                    </div>
                    <div class="white-line-right">
                        <h2>102</h2>
                        <p>Happy Clients</p>
                    </div>
                </section>
            </div>
        </header>
     );
}
 
export default Header;