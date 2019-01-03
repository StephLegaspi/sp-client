import React, { Component } from 'react';
//user-defined
import SignUp from './components/SignUp.js';
import NavBar from './components/NavBar.js';

class App extends Component {
  render() {
    return (
      <div>
        <SignUp/>
      </div>
    );
  }
}

export default App;