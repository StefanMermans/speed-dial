import React from 'react';
import { AppContainer } from "./styles";
import SiteList from "../SiteList/SiteList"
import background from "../../background.png"
import Clock from '../Clock/Clock';

function App() {
  return (
    <AppContainer background={background}>
      <Clock />
      <SiteList />
    </AppContainer>
  );
}

export default App;
