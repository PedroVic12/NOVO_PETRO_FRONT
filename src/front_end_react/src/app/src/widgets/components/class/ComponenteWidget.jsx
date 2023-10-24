import React, { useState, useEffect } from 'react';



class ComponenteWidget extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            canal: 'CFB Cursos',
            curso: 'React',
            ativo: true,
            nome: ''
        }

        this.ativarDesativar = this.ativarDesativar.bind(this);
    }

    ativarDesativar() {
        this.setState((state) => ({
            ativo: !state.ativo,
        }));
    }

    componentDidMount() {
        console.log('Componente de Classe criado com sucesso!')
    }

    componentDidUpdate() {
        console.log('Componente de Classe atualizado com sucesso!')
    }

    componentWillUnmount() {
        console.log('Componente de Classe removido com sucesso!')
    }

    render() {
        const classes = `bg-green-900 p-4 rounded-md shadow-sm`;

        return (
            <div className={classes}>
                <h1>Componente de Classe</h1>
                <p>Componente: {this.state.canal}</p>
                <p>Componente: {this.state.curso}</p>
                <p>Ativo: {this.state.ativo}</p>

                <button
                    onClick={this.ativarDesativar}
                    disabled={!this.state.ativo}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Ativar / Desativar
                </button>
            </div>
        );
    }
}

export default ComponenteWidget;
