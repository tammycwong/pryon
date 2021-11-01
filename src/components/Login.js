import React, { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="form-container">
        <h1>Login:</h1>
      <form className="login-form">
        <label>Username: </label>
        <input
          name="username"
          type="text"
          value={username}
          autocomplete="off"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label>Password: </label>
        <input
          name="password"
          type="password"
          value={password}
          autocomplete="off"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <input type="submit" />
        <p className="signup-link">
          Not a member? <a href="/signup">Sign up now</a>
        </p>
      </form>
    </div>
  );
}
