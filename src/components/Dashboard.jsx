import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Bookmarks from './Bookmarks';
import CreateBookmarkForm from './CreateBookmarkForm';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    handlepageLoad();
  }, [])

  const handlepageLoad = async () => {
    try {
      // Make a POST request to the login endpoint
      let token = localStorage.getItem('jwtToken');
      console.log("token", token);

      const response = await axios.get('api/users/dash', { headers : {
        Authorization: "Bearer " + token }});

      setUser(response.data);
      console.log(response.data);
    } catch (err) {
      setError('error');
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Welcome {user?.email}</h2>  
      <CreateBookmarkForm />
      <Bookmarks />     
    </div>
  );
};

export default Dashboard;