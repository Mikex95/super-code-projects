import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Speisekarte from './components/pages/Speisekarte';
import Kontakt from './components/pages/Kontakt';
import Oeffnungszeiten from './components/pages/Oeffnungszeiten';
import Galerie from './components/pages/Galerie';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Speisekarte />}></Route>
          <Route path='/kontakt' element={<Kontakt />}></Route>
          <Route path='/oeffnungszeiten' element={<Oeffnungszeiten />}></Route>
          <Route path='/galerie' element={<Galerie />}></Route>
          {/* <Route path='/handy/:pusteblume' element={<HandyDetails />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
