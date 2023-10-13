import DashboardModel from "../models/DashBoardModel";

class DashboardController {
    constructor() {
        this.model = new DashboardModel();
    }

    // Método para fazer uma solicitação GET ao servidor
    async getData() {
        try {
            const response = await fetch("URL_DO_SERVIDOR", {
                method: "GET",
                headers: {
                    // Headers personalizados, se necessário
                },
            });

            if (!response.ok) {
                throw new Error("Erro ao buscar dados do servidor");
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    // Método para fazer uma solicitação POST ao servidor
    async postData(data) {
        try {
            const response = await fetch("URL_DO_SERVIDOR", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", // Especifique o tipo de conteúdo adequado
                },
                body: JSON.stringify(data), // Converta os dados em JSON, se necessário
            });

            if (!response.ok) {
                throw new Error("Erro ao enviar dados para o servidor");
            }

            const responseData = await response.json();
            return responseData;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

export default DashboardController;
