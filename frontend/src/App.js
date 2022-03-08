import './App.css';

import React  from 'react'
import NavBar from './components/NavBar';
import Notification from './components/Notification';
import LoginPlace from './components/LoginPlace';

export default function App() {
 
  return (
    <div className="container-fluid">
      <NavBar></NavBar>
      <br />
      <div className="row">
        <Notification></Notification>
        <LoginPlace></LoginPlace>
      </div>
    </div>
  );
}
