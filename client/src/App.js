import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './spells/Home';
import Meaning from './spells/Meaning';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/meaning/:word' component={Meaning} />
        <Route>404</Route>
      </Switch>
    </div>
  );
}

export default App;
