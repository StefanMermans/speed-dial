import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../Form/Button";
import FormInput from "../Form/FormInput";
import Input from "../Form/Input";

import styles from  "./login.module.scss";

export default function Login() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const handleUsernameChanged = (e) => {
    setUsername(e.target.value);
  }

  const handlePasswordChanged = (e) => {
    setPassword(e.target.value);
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/auth/login`, {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        ["Content-Type"]: "application/json"
      }
    });
    const body = await response.json();
    localStorage.setItem('token', body.token);    
    history.push('/');
  }

  return (
    <div className={styles.loginWrapper}>
      <form onSubmit={handleLogin} className={styles.loginForm}>
        <h1>Login</h1>
        <FormInput
          label="username"
          inputProps={{
            onChange: handleUsernameChanged,
            value: username,
            type: "user",
            name: "username",
          }}
        />
        <FormInput
          label="password"
          inputProps={{
            name: "password",
            value: password,
            onChange: handlePasswordChanged,
            type: "password",
          }}
        />
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}
