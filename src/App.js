import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormComponent from './Form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FormComponent />
      </header>
    </div>
  );
}

export default App;
