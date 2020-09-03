import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheet/style.css';

class Listagem extends React.Component {
  render() {
    return (
      <div className="corpo listagem">
        <p className="text-none">Nenhum prontuário cadastrado.</p>
        <Link to="/cadastro">
          <button className="btn" type="button">
            Adicionar novo prontuário
          </button>
        </Link>
      </div>
    );
  }
}

export default Listagem;
