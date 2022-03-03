/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from 'reactstrap';
//import React, { useEffect, useState } from 'react';
import './App.css';
import {Context} from './ThemeProvider'

function App() {

  //const appContext = React.useContext(ThemeContext);
  const { toggle, toggleFunction } = Context();
  const handleToggle = () => {
    toggleFunction(!toggle);
  }
  console.log(toggle);
  

  return (
    <div className="App" style={{backgroundColor:toggle ? "black" : "white" , color: toggle ? "white" :"black"}}>
      <h1>Context API Theme Toggler APP </h1>
      <p style={{fontSize:"20px"}}>This is a nice paragraph and i am writing it to just test the functionality of my code.
        <br/>I am new to react and learning context API now. Thanks for reading this and enjoy learning react.</p>
      <Button color="success" onClick={handleToggle}>{toggle ? "Light Theme" : "Dark Theme" }</Button>
    </div>
   
  );
}

export default App;
