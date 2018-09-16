import React, { Component } from 'react';
import './App.css';
import RegisterForm from './components/Register/Register';


class App extends Component {


  render() {
    return (
      <div className="App">
        <RegisterForm/>
      </div>
    );
  }
}

export default App;
