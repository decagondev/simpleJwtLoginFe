import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [email, setEmail] = useState('');
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
      const response = await axios.post('/api/auth/signup', {
        email,
        password,
      });
      console.log("res: ", response.data);

      // Extract the token from the response
      const token = {...response};
      console.log(JSON.stringify(token));

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
      <h2>Signup</h2>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
      <button onClick={handleLogin}>Sign Up</button>
    </div>
  );
};

export default SignUp;