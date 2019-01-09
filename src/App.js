import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css'
import TopBar from './components/TopBar'
import NavBar from './components/NavBar'

class App extends Component {
  render() {
    return (
      <div className="App">
          <TopBar/>
          {this.props.children}
          <NavBar/>
      </div>
    );
  }
}

export default App;
