import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ComboBox from './components/ComboBox.js';



import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the Default React Layout!
          <br/>(With Material-UI)</h2>

        </div>
        <p className="App-intro">
        </p>

        <ComboBox/>

      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
