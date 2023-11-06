import ScreenPage from "../Screens/ScreenPage";
import logo from '../../../../../src/logo.svg';
import '../../../../../src/App.css';
import DashboardView from "../Dashboard/dashboard_view"; // Atualize o caminho
import RowWidget from '../../widgets/Basics/RowWidget';
import { Button } from 'react-bootstrap';
import Card from '../../widgets/components/type/Card.tsx'

function HomePageScreen() {
    return (
        <>
            <div className="App">

                <header className="App-header" >

                    <RowWidget>

                        <img src={logo} className="App-logo" alt="logo" />

                        <h3>HOME PAGE</h3>

                    </RowWidget>

                </header>


                <Card produto={'Mouse'} valor={49.90}></Card>
                <Card produto={'Teclado'} valor={199.90} ></Card>
                <Card produto={'Monitor'} valor={249.90}></Card>


                <Button>Botão</Button>

                <ScreenPage />

                <DashboardView />


            </div>
        </>
    );
}

export default HomePageScreen;