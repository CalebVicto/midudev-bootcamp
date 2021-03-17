import './App.css';
import Mensaje from './Mensaje';

const nombre = 'Caleb';

const App = () => {
  return (
    <div className="App">
      <Mensaje name={nombre} color="red" />
      <Mensaje name="Josue" color="blue" />
    </div>
  );
}

export default App;
