import React from 'react';
import { Link } from 'react-router-dom';

class Listagem extends React.Component {
  render() {
    return (
      <div>
        <p>Nenhum prontuário cadastrado.</p>
        <Link to="/cadastro">
          <button type="button">
            Adicionar novo prontuário
          </button>
        </Link>
      </div>
    );
  }
}

export default Listagem;
