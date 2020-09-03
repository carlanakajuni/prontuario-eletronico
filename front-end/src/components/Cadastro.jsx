import React from "react";
import { Link } from "react-router-dom";
import { apiQueixas, apiDoencas } from "../data";

class Cadastro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      queixasApi: [],
      doencasApi: [],
      queixa: '',
      doenca: '',
      historico: '',
      isLoaded: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    apiQueixas().then((json) => {
      this.setState({
        isLoaded: true,
        queixasApi: json["data"],
      });
    });
    apiDoencas().then((json) => {
      this.setState({
        isLoaded: true,
        doencasApi: json["data"],
      });
    });
  }

  handleChange(event) {
    console.log(event.target.name)
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { queixasApi, doencasApi } = this.state;

    return (
      <div>
        <h3>Anamnese</h3>
        <label htmlFor="queixa">Queixa Principal</label>
        <select name="queixa" id="queixa" onChange={(event) => this.handleChange(event)}>
          <option value="select">Selecione</option>
          {queixasApi.map((item) => (
            <option key={item.id} value={item.label}>{item.label}</option>
          ))}
        </select>
        <label htmlFor="doenca">Doenças Adulto</label>
        <select name="doenca" id="doenca" onChange={(event) => this.handleChange(event)}>
          <option value="selecione">Selecione</option>
          {doencasApi.map((item) => (
            <option key={item.id} value={item.label}>{item.label}</option>
          ))}
        </select>
        <p>Selecionados:</p>
        <label htmlFor="historico">Histórico da Moléstia</label>
        <input
          type="text"
          name="historico"
          placeholder="Digite..."
          maxLength="1000"
          minLength="10"
          onChange={(event) => this.handleChange(event)}
        />
        <Link to="/">
          <button type="button">Salvar</button>
        </Link>
      </div>
    );
  }
}

export default Cadastro;
