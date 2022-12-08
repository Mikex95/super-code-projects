import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Products from './components/pages/Products';
import Footer from './components/footer/Footer';
import Jenson from './components/pages/Jenson';
import Deon from './components/pages/Deon';
import Krisha from './components/pages/Krisha';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/jenson' element={<Jenson />}></Route>
          <Route path='/Deon' element={<Deon />}></Route>
          <Route path='/Krisha' element={<Krisha />}></Route>
          {/* <Route path='/handy/:pusteblume' element={<HandyDetails />}></Route> */}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
