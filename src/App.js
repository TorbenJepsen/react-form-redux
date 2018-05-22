import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import SnackForm from './components/SnackForm';
import SnackList from './components/SnackList';

class App extends Component {
  render() {
    return (
      <div className="App">
      <SnackForm />
      <SnackList />

      </div>
    );
  }
}

export default connect()(App);
