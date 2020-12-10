import './App.css';
import { Router } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Main from './views/Main';
import Detail from './views/Detail'

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="product/"/>
        <Detail path="product/:id" />
      </Router>
    </div>
  );
}
export default App;
