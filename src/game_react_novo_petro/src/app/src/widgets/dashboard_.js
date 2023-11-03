import React, { Component } from "react";
import DashboardController from "../controllers/DashboardController";

class DashboardView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            isLoading: false,
        };
        this.controller = new DashboardController();
    }

    // Método para carregar dados ao montar o componente
    async componentDidMount() {
        this.setState({ isLoading: true });

        try {
            const data = await this.controller.getData();
            this.setState({ data, isLoading: false });
        } catch (error) {
            this.setState({ isLoading: false });
        }
    }

    // Método para lidar com ações de envio de dados
    async handlePostData(data) {
        try {
            const response = await this.controller.postData(data);
            console.log("Resposta do servidor:", response);
            // Atualize o estado ou faça qualquer outra ação após o envio bem-sucedido
        } catch (error) {
            console.error("Erro ao enviar dados:", error);
            // Trate erros de envio, se necessário
        }
    }

    render() {
        const { data, isLoading } = this.state;

        return (
            <div className="dashboard-container">
                <div className="menu-column">
                    {/* Conteúdo do menu à esquerda */}
                    <button onClick={() => this.handlePostData({ /* Dados a serem enviados */ })}>
                        Enviar Dados
                    </button>
                </div>
                <div className="data-display">
                    {/* Espaço para exibir os dados */}
                    {isLoading ? (
                        <p>Carregando...</p>
                    ) : (
                        <pre>{JSON.stringify(data, null, 2)}</pre>
                    )}
                </div>
            </div>
        );
    }
}

export default DashboardView;
