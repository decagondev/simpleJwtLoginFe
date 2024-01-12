import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Login />}/>
      <Route exact path="/signup" element={<SignUp />}/>
      <Route exact path="/signin" element={<SignIn />}/>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App
