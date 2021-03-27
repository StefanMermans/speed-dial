import React from 'react';
import { AppContainer, BottomWrapper } from "./styles";
import SiteList from "../SiteList/SiteList"
import background from "../../background-compressed.jpg"
import Clock from '../Clock/Clock';
import ShowList from '../ShowList/ShowList';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const aniClient = new ApolloClient({
  uri: "https://graphql.anilist.co/",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={aniClient}>
      <AppContainer background={background}>
        <SiteList />
        <BottomWrapper>
          <Clock />
          {/* <ShowList /> */}
        </BottomWrapper>
      </AppContainer>
    </ApolloProvider>
  );
}

export default App;
