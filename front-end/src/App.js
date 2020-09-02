import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Listagem from './components/Listagem';

function App() {
  return (
    <Router>
      <div className="App">
        <Listagem />
      </div>
    </Router>
  );
}

export default App;
