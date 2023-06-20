import logo from './logo.svg';
import './App.css';
import compomente from './compomente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola diego 
          
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
       <compomente />
      </header>
    </div>
  );
}

export default App;
