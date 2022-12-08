import './App.css';
import Data from './components/Data';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import DataItems from './components/DataItems';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Data></Data>
        <Routes>
            <Route path="/" element={<Data/>}></Route>
            <Route path="/products/:id" element={<DataItems/>}></Route>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
