import pandas as pd
from datetime import datetime


import sys
sys.path.insert(0, '/home/pedrov/Documentos/GitHub/NOVO_PETRO_FRONT/BackEnd/NOVO_PETRO_BACK_main')
from S_Al_Novo_Petro_Pre_Proc_POO import DataAnalysis

now = datetime.now()
data = now.strftime("%d/%m/%Y, %H:%M:%S")
print('Data Atual', data)

url_GitHub = 'https://raw.githubusercontent.com/PedroVic12/NOVO_PETRO_FRONT/main/BackEnd/NOVO_PETRO_BACK_main/DADOS/Adendo%20A.3_Conjunto%20de%20Dados_DataSet.csv'

data_analise = DataAnalysis()
print(data_analise)
