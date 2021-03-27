import React from 'react';
import SiteList from "../SiteList/SiteList"
import background from "../../background-compressed.jpg"
import Clock from '../Clock/Clock';


import styles from "./app.module.scss";

function App() {
  function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }

  return (
      <div class={styles.appContainer} style={{
        backgroundImage: `url(${background})`
      }}>
        {/* <div class="g-signin2" data-onsuccess={onSignIn}></div> */}
        <SiteList />
        <div class={styles.bottomWrapper}>
          <Clock />
        </div>
      </div>
  );
}

export default App;
