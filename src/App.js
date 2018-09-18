import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import RegisterForm from './components/Register/Register';


class App extends Component {


  render() {
    return (
      <BrowserRouter>
        <Route path="/register" component={RegisterForm}/>
      </BrowserRouter>
    );
  }
}

export default App;
