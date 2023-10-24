import logo from './logo.svg';
import './App.css';
import DashboardView from "./app/src/views/Dashboard/dashboard_view"; // Atualize o caminho
import ScreenPage from './app/src/views/Screens/ScreenPage';
import RowWidget from './app/src/widgets/Basics/RowWidget';
import Cabecalho from './app/src/widgets/components/funcional/Header';

function App() {
  return (


    <div className="App">

        <header className="App-header" >

        <RowWidget>

            <img src={logo} className="App-logo" alt="logo" />
            <Cabecalho></Cabecalho>

            <h3>OLA MUNDO</h3>
          
          </RowWidget>

        </header>

     





     
    
        <ScreenPage />
    
        <DashboardView />

    
    </div>
  );
}

export default App;
