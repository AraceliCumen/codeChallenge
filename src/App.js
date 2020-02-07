import React from 'react';
import './App.css';

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
        <Route exact path="/everis/" render={(props) => <Start {...props} store={store} />} />
        <Route path="/everis/login" render={(props) => <Login {...props} store={store} />} />
        <Route path="/everis/list" render={(props) => <List {...props} store={store} />} />
        <Route path="/everis/register" render={(props) => <Register {...props} store={store} />} />
      </div>
    </Router>
  );
}

export default App;
