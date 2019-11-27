import React from "react";
import GlobalStyle from "./styles";

import Header from './components/Header';

import api from './services/api';



export default class App extends React.Component {
  state = {
    dados: [],
    loading: false
  }

  constructor(props) {
    super(props);
    this.fetch.bind(this);
  }

  componentDidMount() {
    this.fetch();
  }

  async fetch() {
    try {
      const response = await api.get('/');
      // console.log(response)
      this.setState({
        dados: response.data
      })
    }
    catch (e) {
      alert('Erro')
    }
  }

  render() {
    const { dados, loading } = this.state;
    console.log(dados)
    return (
      <>
        <Header nome="Rodrigo" />
        <h1>Olá Mundo</h1>
        <p>Teste</p>
        <ul>
          {dados.map(item => {
            return (<li key={item._id}>
              {item.description}
              <strong>{item.done ? 'OK' : 'Fazer'}</strong>
            </li>)
          })}

        </ul>
        <GlobalStyle />
      </>
    );
  }
}
