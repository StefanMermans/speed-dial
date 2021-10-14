import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from '../Login/Login';
import SpeedDial from '../SpeedDial/SpeedDials';
import ShowList from "../ShowList/ShowList";
import { Settings } from '../Settings/Settings';
import ComponentPage from '../../pages/ComponentPage/ComponentPage';

import "./app.module.scss";
import "./global.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/shows">
          <ShowList />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/components">
          <ComponentPage />
        </Route>
        <Route path="/">
          <SpeedDial />
        </Route>
      </Switch>
      </Router>
  );
}

export default App;
