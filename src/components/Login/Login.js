import React, { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const handleUsernameChanged = (e) => {
    setUsername(e.target.value);
  }

  const handlePasswordChanged = (e) => {
    setPassword(e.target.value);
  }

  const handleLogin = async () => {
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
    console.log(response);
  }

  return (
    <div>
      Login
      <input
        value={username}
        onChange={handleUsernameChanged}
      />
      <input
        value={password}
        onChange={handlePasswordChanged}
        type="password"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
