import logo from './assets/logo.svg';
import './assets/App.scss';
import Nav from './components/Nav.jsx';


function App() {
  return (
    <div className="App">
      <Nav />
      <div className="container">
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
      </div>
    </div>
  );
}

export default App;
