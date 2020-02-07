import React from 'react';
import './App.css';

import { createStore } from 'redux';
import { BrowserRouter as Router, Route } from "react-router-dom";

import everis from './reducers'

import 'bootstrap/dist/css/bootstrap.css';

import List from './componentes/pages/List';
import Login from './componentes/pages/Login';


let store = createStore(everis);

function App() {
  return (

    <Router>
      <div>
        <Route exact path="/login/" render={(props) => <PasoInicio {...props} store={store} />} />
        <Route path="/cuentas/pasoSeguridad" render={(props) => <PasoSeguridad {...props} store={store} />} />
        <Route path="/cuentas/pasoEleccionCuenta" render={(props) => <PasoEleccionCuenta {...props} store={store} />} />
        <Route path="/cuentas/pasoIdentidad" render={(props) => <PasoIdentidad {...props} store={store} />} />
      </div>
    </Router>
  );
}

export default App;
