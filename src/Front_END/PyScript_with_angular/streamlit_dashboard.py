import streamlit as st
import pandas as pd
import matplotlib.pyplot as plt

import sys
sys.path.insert(0, '/home/pedrov/Documentos/GitHub/NOVO_PETRO_FRONT/BackEnd/NOVO_PETRO_BACK_main')
from S_Al_Novo_Petro_Pre_Proc_POO import DataAnalysis


class Dashboard:
    def __init__(self):
        self.data = self.load_data()
        self.data_analysis = DataAnalysis()

    
    def load_data(self):
        url = r'https://raw.githubusercontent.com/PedroVic12/NOVO_PETRO_FRONT/main/BackEnd/NOVO_PETRO_BACK_main/DADOS/Adendo%20A.3_Conjunto%20de%20Dados_DataSet.csv'
        data = pd.read_csv(url)
        return data

    def display_data_table(self):
        st.header('Visualização de Dados')
        st.write('Aqui estão os dados em uma tabela:')
        st.dataframe(self.data)

    def create_bar_chart(self):
        st.header('Gráfico de Barras')
        st.sidebar.subheader('Opções do Gráfico de Barras')
        x_column = st.sidebar.selectbox('Selecione a coluna X:', self.data.columns)
        y1_column = st.sidebar.selectbox('Selecione a coluna Y1:', self.data.columns)

        fig, ax = plt.subplots()
        fig.set_figheight(6)
        fig.set_figwidth(10)
        ax.bar(self.data[x_column], self.data[y1_column])
        ax.set_xlabel('Eixo X')
        ax.set_ylabel('Eixo Y1')
        ax.set_title('Gráfico de Barras')

        st.pyplot(fig)

    def create_scatter_chart(self):
        st.header('Gráfico de Dispersão')
        st.sidebar.subheader('Opções do Gráfico de Dispersão')
        x_column = st.sidebar.selectbox('Selecione a coluna X:', self.data.columns)
        y_column = st.sidebar.selectbox('Selecione a coluna Y2:', self.data.columns)

        fig, ax = plt.subplots()
        fig.set_figheight(6)
        fig.set_figwidth(10)
        ax.scatter(self.data[x_column], self.data[y_column])
        ax.set_xlabel('Eixo X')
        ax.set_ylabel('Eixo Y2')
        ax.set_title('Gráfico de Dispersão')

        st.pyplot(fig)

    def display_pyscript_output(self):
        st.header('Saída do PyScript')
        st.write('Aqui está a saída do PyScript:')
        st.code("print('Hello, PyScript!')")

    def display_pyscript_console_output(self):
        st.header('Console do PyScript')
        st.write('Aqui está a saída do PyScript no console:')
        st.code("Data Atual 01/01/2023, 12:34:56")

    def display_pyscript_pytutor_output(self):
        st.header('Console do PyScript no PyTutor')
        st.write('Aqui está a saída do PyScript no console do PyTutor:')
        st.pytutor("print('Hello, PyScript!')")

    def run_dashboard(self):
        # Exemplo de uso: chama um método da classe DataAnalysis
        self.data_analysis.run_analysis()

if __name__ == '__main__':
    dashboard = Dashboard()
    st.title('Dashboard Petrobras UFF')

    dashboard.display_data_table()
    dashboard.create_bar_chart()
    dashboard.create_scatter_chart()
    dashboard.display_pyscript_output()
    dashboard.display_pyscript_console_output()
    dashboard.display_pyscript_pytutor_output()
    dashboard.run_dashboard()