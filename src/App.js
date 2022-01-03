import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Manatee from './components/Manatee/Manatee';
import Narwhal from './components/Narwhal/Narwhal';
import Whale from './components/Whale/Whale';
import Page1 from './components/Page1';

function App() {
  return (
      <BrowserRouter>
        <Switch>
        <Route path="/manatee">
            <Manatee />
          </Route>
          <Route path="/narwhal">
            <Narwhal />
          </Route>
          <Route path="/whale">
            <Whale />
          </Route>
          <Route path="/page1">
            <Page1 />
          </Route>
        </Switch>
      </BrowserRouter>

  );
}

export default App;


