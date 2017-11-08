import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Calculator from './Calculator';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const App = () => (
  <MuiThemeProvider>
    <div>
      <AppBar
        title="Calculator"
        iconElementLeft={<div/>}
        iconElementRight={<FlatButton label="GitHub" href="https://github.com/olehermanse/ReactCalculator"/>}
      />
      <Calculator/>
    </div>
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('body_main')
);

document.body.style.overflow = "hidden";
