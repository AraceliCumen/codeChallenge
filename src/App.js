import React from 'react';
import './App.scss';

import { createStore } from 'redux';
import { BrowserRouter as Router, Route } from "react-router-dom";

import everis from './reducers'

import 'bootstrap/dist/css/bootstrap.css';

import List from './componentes/pages/List';
import Login from './componentes/pages/Login';
import Register from './componentes/pages/Register';
import Start from './componentes/pages/Start';


let store = createStore(everis);

function App() {
  return (

    <Router>
      <div>
        <Route exact path="/demo/" render={(props) => <Start {...props} store={store} />} />
        <Route path="/demo/login" render={(props) => <Login {...props} store={store} />} />
        <Route path="/demo/list" render={(props) => <List {...props} store={store} />} />
        <Route path="/demo/register" render={(props) => <Register {...props} store={store} />} />
      </div>
    </Router>
  );
}

export default App;
