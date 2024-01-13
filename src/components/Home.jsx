import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {


  return (
    <div>
      <h2>Welcome  to the Bookmark app</h2>
      <div className="home-buttons">
      <Link to="/signup">Sign Up</Link>

      <Link to="/signin">Sign In</Link>

      <Link to="/dashboard">Dashboard</Link>
      </div>
    </div>
  );
};

export default Home;