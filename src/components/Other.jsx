import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Login = () => {
  const [welcome, setWelcome] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    handlepageLoad();
  }, [])

  const handlepageLoad = async () => {
    try {
      // Make a POST request to the login endpoint
      let token = localStorage.getItem('jwtToken');
      console.log("token", token);

      const response = await axios.get('http://localhost:3555/dashboard', { headers : {
        Authorization: "Bearer " + token }});

      setWelcome(response.data);
    } catch (err) {
      setError('error');
      console.error(err);
    }
  };

  return (
    <div>
      <h2>{welcome?.message}</h2>       
    </div>
  );
};

export default Login;