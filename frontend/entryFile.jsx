import React from "react";
import ReactDOM from 'react-dom';
import Clock from './clock';
import Weather from './weather';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  ReactDOM.render(
    <div>
      <h1>Clock</h1>
      <div><Clock /></div>
      <h1>Weather</h1>
      <div><Weather /></div>
      <h1>React is working!!!</h1>
    </div>,
    root
    );
})