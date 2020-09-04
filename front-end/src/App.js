import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Listagem from './components/Listagem';
import Cadastro from './components/Cadastro';

function App() {
  return (
    <Router>
      <header>
        Prontuário Eletrônico
      </header>
      <Switch>
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/" component={Listagem} />
      </Switch>
    </Router>
  );
}

export default App;
