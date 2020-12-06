import React, { Component } from 'react'
import axios from 'axios';
export default class Autores extends Component {
    state = {
        autores:[]
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/artigos_app/autor/')
        .then(res => {
            const autores = res.data;
            this.setState({autores})
        })
    }
    render() {
        return (
            <div>
                <h1 className="text-center text-info">Lista de Autores</h1>
           
                <ul className="list-group">
                {this.state.autores.map(autor =>
                <div style={{textAlign:"left"}} key={autor.id}>
                <li className="list-group-item" > {autor.nome}</li>
                <li className="list-group-item" >{autor.endereco}</li>
                <li className="list-group-item" >{autor.site === null || autor.site === ''?'Não Informado':autor.site}</li>
                <li className="list-group-item" >{autor.email}</li>
                <br />
                </div>
                )}
                </ul>
               
               
            </div>
        )
    }
}
