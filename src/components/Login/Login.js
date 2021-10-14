import React, { useState } from "react";

import { useHistory } from "react-router-dom";

import Button from "../Form/Button";
import FormInput from "../Form/FormInput";

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
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/login`, {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        "Content-type": "application/json"
      }
    });
    const body = await response.json();
    localStorage.setItem('token', body.token);    
    history.push('/');
  }

  return (
    <div className="page flex justify-center items-center">
      <form onSubmit={handleLogin} className="bg-gray-2 p-4 rounded-md flex flex-col gap-4 w-full max-w-md">
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
        <div>
          <Button variant="primary" type="submit">Login</Button>
        </div>
      </form>
    </div>
  );
}
