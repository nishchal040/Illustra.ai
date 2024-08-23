import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Nav from './components/nav';
import Login from './components/loginpage';
import Signup from './components/signup';
import Start from './components/start';
import Data from './components/data';

function App() {
  
  return (
    <div className="App">
      <Nav/>
      <Start/>
      <Data/>
    </div>
  );
}

export default App;
