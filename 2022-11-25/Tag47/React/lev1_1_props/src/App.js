import './App.css';
import Datenbank from './Components/Datenbank';

let data = [{
  garten: "Rasenmaehen",
  autor: "Buch schreiben",
  auto: "Auto waschen",
  essen: "Einkaufen gehen"
}]

function App() {
  return (
    <div>
      <h1>My Todo List</h1>
      <Datenbank text={data[0].garten} />
      <Datenbank text={data[0].autor} />
      <Datenbank text={data[0].auto} />
      <Datenbank text={data[0].essen} />
    </div>
  );
}

export default App;
