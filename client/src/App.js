import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './spells/Home';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route>404</Route>
      </Switch>
    </div>
  );
}

export default App;
