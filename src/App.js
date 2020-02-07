import React from 'react';
import './App.css';

import { createStore } from 'redux';
import { BrowserRouter as Router, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';

import List from './componentes/pages/List';

function App() {
  return (
    <div className="App">
      <List/>
    </div>
  );
}

export default App;
