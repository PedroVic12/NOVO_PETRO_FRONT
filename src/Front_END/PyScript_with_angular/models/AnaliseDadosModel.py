# Importar bibliotecas
import os
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
from scipy.stats import anderson


class CharizardAnalysis:
    def __init__(self, directory="/home/pedrov/Documentos/GitHub/NOVO_PETRO_FRONT/BackEnd/NOVO_PETRO_BACK_main/DADOS"):
        # Inicializa o objeto com o diretório especificado e um dataframe vazio
        self.directory = directory
        self.df = None

    def load_data(self, file_path):
        # Carrega os dados do arquivo com base em sua extensão
        if file_path.endswith(".csv"):
            self.df = pd.read_csv(file_path)
        elif file_path.endswith(".xlsx"):
            self.df = pd.read_excel(file_path)

    def show_file_info(self):
        # Exibe informações básicas sobre o dataframe
        numeric_df = self.df.select_dtypes(include=[float, int])
        print("\nInformações sobre o arquivo:")
        print(self.df.info())
        print("\nDescrição estatística (apenas variáveis numéricas):")
        print(numeric_df.describe())

    def plot_heatmap(self):
        # Plota um mapa de calor para mostrar a correlação entre as variáveis
        numeric_df = self.df.select_dtypes(include=[float, int])
        correlation = numeric_df.corr()
        plt.figure(figsize=(24, 18))
        sns.heatmap(correlation, annot=True, cmap="coolwarm")
        plt.title("Mapa de Calor de Correlação (apenas variáveis numéricas)")
        plt.show()

    def report_high_low_correlations(self):
        # Reporta variáveis com alta e baixa correlação
        numeric_df = self.df.select_dtypes(include=[float, int])
        correlation = numeric_df.corr()
        high_corr = [(var1, var2) for var1 in correlation for var2 in correlation if
                     0.75 <= correlation[var1][var2] < 1]
        low_corr = [(var1, var2)
                    for var1 in correlation for var2 in correlation if correlation[var1][var2] <= 0.25]
        print("\nVariáveis com alta correlação (>= 0.75):")
        for var1, var2 in high_corr:
            print(f"{var1} e {var2} : {correlation[var1][var2]:.2f}")
        print("\nVariáveis com baixa correlação (<= 0.25):")
        for var1, var2 in low_corr:
            print(f"{var1} e {var2} : {correlation[var1][var2]:.2f}")

    def test_normality(self):
        # Usa o teste de Anderson-Darling para verificar a normalidade das variáveis
        numeric_df = self.df.select_dtypes(include=[float, int])
        print("\nTeste de Normalidade (Anderson-Darling):")
        for column in numeric_df.columns:
            result = anderson(numeric_df[column])
            if result.statistic < result.critical_values[2]:
                print(f"{column} parece ter uma distribuição normal.")
            else:
                print(f"{column} não parece ter uma distribuição normal.")

    def run_analysis(self):
        results = {}  # Crie um dicionário para armazenar os resultados

        files = [f for f in os.listdir(
            self.directory) if f.endswith(('.csv', '.xlsx'))]
        if not files:
            results["error"] = "Nenhum arquivo .csv ou .xlsx foi encontrado no diretório."
            return results  # Retorna os resultados como um dicionário

        available_files = {}
        for i, file in enumerate(files, 1):
            available_files[i] = file

        results["available_files"] = available_files  # Adicione os nomes dos arquivos aos resultados

        choice = int(input("\nEscolha o número do arquivo que deseja trabalhar (ou digite 0 para sair): "))
        if 0 < choice <= len(files):
            file_path = os.path.join(self.directory, files[choice - 1])
            self.load_data(file_path)
            results["file_info"] = self.show_file_info()
            results["heatmap"] = self.plot_heatmap()
            results["high_low_correlations"] = self.report_high_low_correlations()
            results["normality"] = self.test_normality()
        else:
            results["error"] = "Escolha inválida. Nenhuma análise foi realizada."

        return results  # Retorna os resultados como um dicionário


    

if __name__ == "__main__":
    # Inicializa e executa a análise de dados
    analysis = CharizardAnalysis()
    analysis.run_analysis()
