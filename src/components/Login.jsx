import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [token, setToken] = useState("");

  useEffect(() => {
    console.log("Token changed");
    if (token != "") {
        window.location.href = "/dashboard";
    }
  }, [token])

  const handleLogin = async () => {
    try {
      // Make a POST request to the login endpoint
      const response = await axios.post('http://localhost:3555/login', {
        username,
        password,
      });

      // Extract the token from the response
      const token = response.data.token;

      // Store the token in localStorage
      localStorage.setItem('jwtToken', token);
      setToken(token);


      

      // Optionally, you can redirect the user to another page or perform other actions here
      console.log('Login successful!');
    } catch (err) {
      setError('Invalid credentials');
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;