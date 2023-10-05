from flask import Flask, request, jsonify, render_template
import pandas as pd
import os
from flask_cors import CORS

import sys
from Front_END.PyScript_with_angular.models.AnaliseDadosModel import CharizardAnalysis
sys.path.insert(0, '/home/pedrov/Documentos/GitHub/NOVO_PETRO_FRONT/BackEnd/NOVO_PETRO_BACK_main')
from S_Al_Novo_Petro_Pre_Proc_POO import DataAnalysis
 

class Raichu:
    def __init__(self):
        self.app = Flask(__name__)
        self.setup_routes()
        self.data_analysis = CharizardAnalysis()

    def setup_routes(self):
        cors = CORS(self.app, resources={r"/get_csv/*": {"origins": "http://127.0.0.1:5000/get_csv/Adendo_A_2_Conjunto_de_Dados_DataSet.csv"}})



        @self.app.route('/')
        def index():
            return render_template('/home/pedrov/Documentos/GitHub/NOVO_PETRO_FRONT/src/Flutter/PyScript with angular/index.html')

        # Métodos da API
        @self.app.route('/raichu', methods=['GET'])
        def get_raichu():
            return jsonify(message='Raichu says hi!')

        @self.app.route('/raichu', methods=['POST'])
        def post_raichu():
            data = request.json
            return jsonify(message=f"Raichu received: {data}")


        @self.app.route('/run_analysis', methods=['GET'])
        def run_analysis_route():
            analysis_results = self.data_analysis.run_analysis()

            # Verifique se ocorreu algum erro durante a análise
            if "error" in analysis_results:
                return jsonify(error=analysis_results["error"]), 400

            # Retorne os resultados como uma resposta JSON
            return jsonify(analysis_results), 200


        #Métodos para ML
        @self.app.route('/post_csv', methods=['POST'])
        def upload_csv():
            file_path = 'BackEnd/NOVO_PETRO_BACK_main/DADOS/Adendo A.2_Conjunto de Dados_DataSet.csv'
            
            global df_carregado  # Use a variável global loaded_df

            if not file_path:
                return jsonify(error='No file path provided'), 400
            
            try:
                df_carregado = pd.read_csv(file_path)
                print(df_carregado)

                # Realize a análise dos dados usando a instância da classe DataAnalysis
                self.data_analysis.load_data(file_path)
                self.data_analysis.show_file_info()
                self.data_analysis.plot_heatmap()
                self.data_analysis.report_high_low_correlations()
                self.data_analysis.test_normality()
            except Exception as e:
                return jsonify(error=f"Error reading CSV file: {str(e)}"), 500
            
            return jsonify(message=f'File {file_path} read successfully', data=df_carregado.to_dict()), 200


        @self.app.route('/data_info', methods=['GET'])
        def get_data_info():
            # Aqui você pode extrair informações do self.data_analysis e transformá-las em uma resposta JSON
            # Exemplo:
            data_info = {
                "info": self.data_analysis.get_info(),
                "description": self.data_analysis.get_description()
            }
            return jsonify(data_info)

                
        @self.app.route('/get_csv/<filename>', methods=['GET'])
        def get_csv(filename):
            try:
                # Construa o caminho completo para o arquivo CSV com base no nome do arquivo fornecido
                CAMINHO = os.path.join('BackEnd/NOVO_PETRO_BACK_main/DADOS', filename)
                print('\n\n\n', filename)

                # Verifique se o arquivo existe
                if not os.path.exists(CAMINHO):
                    return jsonify(error='File not found'), 40


                # Leia o conteúdo do arquivo
                with open(CAMINHO, 'r') as file:
                    csv_content = file.read()

                df_csv = pd.read_csv(CAMINHO)
                print(df_csv)


                # Defina os cabeçalhos da resposta
                headers = {
                    'Content-Type': 'text/csv',
                    'Content-Disposition': f'attachment; filename="{filename}"'
                }

                # Retorne o conteúdo do CSV como uma resposta HTTP
                return csv_content, 200, headers
            except Exception as e:
                return jsonify(error=f"Error sending file: {str(e)}"), 500


        @self.app.route('/data_info', methods=['GET'])
        def get_data_info():
            # Aqui você pode extrair informações do self.data_analysis e transformá-las em uma resposta JSON
            # Exemplo: 
            data_info = {
                "info": "Basic data info...",
                "description": "Statistical description..."
            }
            return jsonify(data_info)

        @self.app.route('/heatmap', methods=['GET'])
        def get_heatmap():
            # Aqui você pode usar os dados do mapa de calor gerado pelo self.data_analysis
            # e exibi-lo de alguma forma (por exemplo, como uma imagem)
            return "This route should show heatmap"

    def run(self):
        self.app.run(debug=True)

if __name__ == "__main__":
    raichu = Raichu()
    raichu.run()
