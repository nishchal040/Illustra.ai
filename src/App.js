import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Nav from './components/nav';
import Login from './components/loginpage';
import Signup from './components/signup';
function App() {
  
  return (
    <div className="App">
      <Nav/>
      <Signup/>
    </div>
  );
}

export default App;
