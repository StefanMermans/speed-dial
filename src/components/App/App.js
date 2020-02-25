import React from 'react';
import { AppContainer } from "./styles";
import SiteList from "../SiteList/SiteList"
import background from "../../background.png"

function App() {
  return (
    <AppContainer background={background}>
      <SiteList />
    </AppContainer>
  );
}

export default App;
