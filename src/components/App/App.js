import React from 'react';
import { AppContainer, ClockWrapper } from "./styles";
import SiteList from "../SiteList/SiteList"
import background from "../../background.png"
import Clock from '../Clock/Clock';

function App() {
  return (
    <AppContainer background={background}>
      <SiteList />
      <ClockWrapper>
        <Clock />
      </ClockWrapper>
    </AppContainer>
  );
}

export default App;
