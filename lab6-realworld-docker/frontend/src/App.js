import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const makeApiRequest = () => {
  axios.get("/api/add").then((response) => {
    console.log(response)
  })
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload test production/dev.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={makeApiRequest}>OK</button>
      </header>
    </div>
  );
}

export default App;
