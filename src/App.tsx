import {Route, BrowserRouter, Routes} from 'react-router-dom';

import {Grid} from './pages/Grid/Grid';
import {Login} from './pages/Login/Login';
import ShowList from './pages/ShowList/ShowList';
import {Settings} from './pages/Settings/Settings';
import SpeedDial from './pages/SpeedDial/SpeedDials';
import {ImageIndex} from './pages/image/index/image-index';
import ComponentPage from './pages/ComponentPage/ComponentPage';
import {ImageSettings} from './pages/ImageSettings/ImageSettings';

import './scss/page.css';
import './global.css';
import { ExerciseIndex } from './pages/Workout/ExerciseIndex/ExerciseIndex';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/shows' element={<ShowList />} />
        <Route path='/settings/images' element={<ImageSettings />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/components' element={<ComponentPage />} />
        <Route path='/grid' element={<Grid />} />
        <Route path='/image' element={<ImageIndex />} />
        <Route path='/workout/exercise' element={<ExerciseIndex />} />
        <Route path='/' element={<SpeedDial />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
