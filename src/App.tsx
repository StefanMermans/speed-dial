import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

import {Login} from './pages/Login/Login';
import ShowList from './pages/ShowList/ShowList';
import {Settings} from './pages/Settings/Settings';
import SpeedDial from './pages/SpeedDial/SpeedDials';
import ComponentPage from './pages/ComponentPage/ComponentPage';

import './global.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/shows'>
          <ShowList />
        </Route>
        <Route path='/settings'>
          <Settings />
        </Route>
        <Route path='/components'>
          <ComponentPage />
        </Route>
        <Route path='/'>
          <SpeedDial />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
