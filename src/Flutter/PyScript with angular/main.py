print('Ola mundo 2')

import pandas as pd
import requests
import time
import io

URL_CSV = 'http://127.0.0.1:5000/get_csv/Adendo_A_2_Conjunto_de_Dados_DataSet.csv'

# Faça uma solicitação GET para a URL
response = requests.get(URL_CSV)

# Verifique se a solicitação foi bem-sucedida (código 200)
if response.status_code == 200:
    # Use io.BytesIO para criar um objeto de buffer a partir do conteúdo da resposta
    buffer = io.BytesIO(response.content)

    # Leia o conteúdo do buffer em um DataFrame pandas
    df = pd.read_csv(buffer)
    
    # Aguarde por alguns segundos (se necessário)
    time.sleep(5)

    # Exiba as primeiras linhas do DataFrame
    print(df.head())
else:
    print('Erro ao carregar CSV:', response.status_code)
