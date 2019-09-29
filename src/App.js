import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Welcome name="Varma" year={2020} password="123456"/>
          <Welcome name="Rajiv" year={2022} password="123"/>
        </header>
      </div>
    );
  }
}

export default App;
