import logo from './logo.svg';
import './App.css';
import DashboardView from "../src/app/src/views/dashboard_view"; // Atualize o caminho

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>


        <div>
          OLA MUNDO
        </div>


        <div>

          <DashboardView />

        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
