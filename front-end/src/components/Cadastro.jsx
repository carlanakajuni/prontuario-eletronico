import React from 'react';
import { Link } from 'react-router-dom';

class Cadastro extends React.Component {
  render() {
    return (
      <div>
        <h3>Anamnese</h3>

        <label htmlFor="queixa">Queixa Principal</label>
        <select name="queixa" id="queixa">
          <option value="selecione">Selecione...</option>
        </select>

        <label htmlFor="doenca">Doenças Adulto</label>
        <select name="doenca" id="doenca">
          <option value="selecione">Selecione...</option>
        </select>

        <p>Selecionados:</p>

        <label htmlFor="historico">Histórico da Moléstia</label>
        <input type="text" name="historico" value="Digite..." />

        <Link to="/">
          <button type="button">
            Salvar
          </button>
        </Link>
      </div>
    );
  }
}

export default Cadastro;
