import React, { Component } from "react";
import DashboardController from "../../controllers/dashboard_controller";
import Spinner from "react-bootstrap/Spinner"; // Importe o componente Spinner do Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

class Dashboard extends Component {
    constructor() {
        super();
        this.controller = new DashboardController();
        this.state = {
            data: null,
            isLoading: true,
        };
    }

    async componentDidMount() {
        try {
            const data = await this.controller.getData();
            this.setState({ data, isLoading: false });
        } catch (error) {
            this.setState({ isLoading: false });
        }
    }

    render() {
        const { data, isLoading } = this.state;

        return (
            <div className="container mt-5">
                <h1>Dashboard</h1>
                {isLoading ? (
                    <LoadingWidget />
                ) : data ? (
                    <DataWidget data={data} />
                ) : (
                    <NoDataWidget />
                )}
            </div>
        );
    }
}

// Widget para exibir o spinner de carregamento
const LoadingWidget = () => (
    <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
    </Spinner>
);

// Widget para exibir os dados
const DataWidget = ({ data }) => (
    <div className="row">
        <DataCard title="Users" value={data.users} />
        <DataCard title="Orders" value={data.orders} />
        <DataCard title="Revenue" value={`$${data.revenue}`} />
    </div>
);

// Widget para exibir a mensagem de nenhum dado
const NoDataWidget = () => <p>Nenhum dado disponível.</p>;

// Widget para exibir cada card de dados
const DataCard = ({ title, value }) => (
    <div className="col-md-4">
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{value}</p>
            </div>
        </div>
    </div>
);

export default Dashboard;
