from flask import Flask, render_template_string
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

app = Flask(__name__)

# DataFrame de exemplo
data = {
    'Nome': ['Alice', 'Bob', 'Charlie', 'David'],
    'Idade': [25, 30, 35, 40]
}
df = pd.DataFrame(data)

@app.route('/')
def index():
    # Use o Bootstrap para criar uma tabela HTML a partir do DataFrame
    table_html = df.to_html(classes='table table-bordered table-hover')

    # Crie um gráfico Seaborn
    plt.figure(figsize=(6, 4))
    sns.barplot(x='Nome', y='Idade', data=df)
    plt.title('Gráfico de Idade')
    plt.xlabel('Nome')
    plt.ylabel('Idade')
    plt.savefig('static/idade_plot.png')

    # Renderize a página HTML com a tabela e o gráfico
    return render_template_string(
        '''
        <!doctype html>
        <html>
        <head>
            <title>Exemplo Bootstrap e Seaborn</title>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        </head>
        <body>
            <div class="container mt-4">
                <h2>Data Frame</h2>
                {{ table_html | safe }}
                <h2>Gráfico</h2>
                <img src="/static/idade_plot.png" alt="Gráfico de Idade">
            </div>
        </body>
        </html>
        '''
    )

if __name__ == '__main__':
    app.run(debug=True)
