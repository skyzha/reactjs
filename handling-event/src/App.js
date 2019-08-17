import React from 'react';
import logo from './logo.svg';
import './App.css';

function handleClick() {
  console.log('I was clicked')
}

function App() {
  return (
    <div className="App">
      <img onMouseOver={() => console.log('Hovered')} src='https://www.fillmurray.com/200/100'/>
      <br />
      <br />
      <br />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
