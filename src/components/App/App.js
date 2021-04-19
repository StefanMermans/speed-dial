import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from '../Login/Login';
import SpeedDial from '../SpeedDial/SpeedDials';

import styles from "./app.module.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <SpeedDial />
        </Route>
      </Switch>
      </Router>
  );
}

export default App;
