import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './css/Register-Login.css';
import './App.css';
import RegisterForm from './components/Register/Register';
import Login from './components/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';



class App extends Component {


  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/register" component={RegisterForm}/>
          <Route path="/" component={Sidebar}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
