import React from "react";
import { apiQueixas, apiDoencas } from "../data";
import '../stylesheet/style.css';

class Cadastro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      queixasApi: [],
      doencasApi: [],
      queixa: '',
      doencas: [],
      historico: '',
      isLoaded: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    apiQueixas().then((json) => {
      this.setState({
        isLoaded: true,
        queixasApi: json.data,
      });
    });
    apiDoencas().then((json) => {
      this.setState({
        isLoaded: true,
        doencasApi: json.data,
      });
    });
  }

  handleChange(event) {
    const { name, value } = event.target;
    if(name === "doencas") {
      this.setState((state) => (
        {...state, doencas: [...state.doencas, Number(value)]}
      ))
    } else {
      this.setState({ [name]: value });
    }
  }

  submit (e) {
    e.preventDefault(); // função para não carregar as infos
    const { queixa, doencas, historico } = this.state;
    const requisicao = {
      queixa,
      doencas,
      historico,
    };
    console.log(requisicao)
  }

  render() {
    const { queixasApi, doencasApi } = this.state;

    return (
      <div className="corpo cadastro">
        <p className="anamnese">Anamnese</p>
        <form className="form" onSubmit={(e) => this.submit(e)}>
          <label className="queixa" htmlFor="queixa">Queixa Principal</label>
          <select name="queixa" id="queixa" required onChange={(event) => this.handleChange(event)}>
            <option value="" disabled selected>Selecione...</option>
            {queixasApi.map((item) => (
              <option required key={item.id} value={item.id}>{item.label}</option>
            ))}
          </select>
          <label className="doenca" htmlFor="doenca">Doenças Adulto</label>
          <select name="doencas" id="doenca" required onChange={(event) => this.handleChange(event)}>
            <option value="" required disabled selected>Selecione...</option>
            {doencasApi.map((item) => (
              <option key={item.id} value={item.id}>{item.label}</option>
            ))}
          </select>
          <p className="selecionados">Selecionados:</p>
            <div></div>
          <label className="historico" htmlFor="historico">Histórico da Moléstia</label>
          <input
            className="input-historico"
            type="text"
            name="historico"
            placeholder="Digite..."
            maxLength="1000"
            minLength="10"
            required
            onChange={(event) => this.handleChange(event)}
          />
          <input className="btn" type="submit" value="Salvar"/>
        </form>
      </div>
    );
  }
}

export default Cadastro;
