import React from "react";
import { withRouter } from "react-router-dom";
import { apiQueixas, apiDoencas, enviaProntuario } from "../data";
import '../stylesheet/style.css';

function Badged(props) {
  return(
    <div className="badged">
      <div>
        {props.children}
      </div>
      <div>
        <button onClick={() => {props.deleteClick()}}>X</button>
      </div>
    </div>
  )
}
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

  handleRemove(element) {
    this.setState((state) => (
      {...state, doencas: [...state.doencas].filter((el) => el !== element)}
    ))
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
    const { history } = this.props;
    const requisicao = {
      queixa,
      doencas,
      historico,
    };
    enviaProntuario(requisicao).then(() => history.push("/")) // implementação failed
  }

  render() {
    const { queixasApi, doencasApi, doencas } = this.state;

    return (
      <div className="corpo cadastro">
        <p className="anamnese">Anamnese</p>
        <form className="form" onSubmit={(e) => this.submit(e)}>
          <label className="queixa" htmlFor="queixa">Queixa Principal</label>
          <select defaultValue="" name="queixa" id="queixa" required onChange={(event) => this.handleChange(event)}>
            <option disabled value="">Selecione...</option>
            {queixasApi.map((item) => (
              <option required key={item.id} value={item.id}>{item.label}</option>
            ))}
          </select>
          <label className="doenca" htmlFor="doenca">Doenças Adulto</label>
          <select defaultValue="" name="doencas" id="doenca" required onChange={(event) => this.handleChange(event)}>
            <option value="" disabled>Selecione...</option>
            {doencasApi.map((item) => (
              <option key={item.id} value={item.id}>{item.label}</option>
            ))}
          </select>
          <p className="selecionados">Selecionados:</p>
          <div className="doencas-container">{doencas.map((doencaId, index) =>
            <Badged key={index} deleteClick={() => this.handleRemove(doencaId)}>
              {doencasApi[doencaId - 1].label}
            </Badged>)}
          </div>
          <div className="historico-container">
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
          </div>
          <div className="container-btn">
            <input className="btn" type="submit" value="Salvar"/>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Cadastro);
