// import logo from './logo.svg';
import Pokecard from './components/pokecard/Pokecard';
import Pokedex from './components/pokedex/Pokedex';
import Pokegame from './components/pokegame/Pokegame';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {/* <Pokedex /> */}

      <Pokegame/>

    </div>
  );
}

export default App;
