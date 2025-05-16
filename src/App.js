import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather/>
      <footer>
      Built by <a href="https://github.com/smilligan-sm" target="_blank" rel="noreferrer">Sarah Milligan</a>, is open-sourced on <a href="https://github.com/smilligan-sm/sm-react-weather-app" target="_blank" rel="noreferrer">Github</a
      > and hosted on <a href="https://tiny-concha-66febd.netlify.app/" target="_blank" rel="noreferrer">Netlify</a>
    </footer>
    </div>
    </div>
    
  );
}
