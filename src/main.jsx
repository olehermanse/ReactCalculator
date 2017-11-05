import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Calculator from './Calculator';
import AppBar from 'material-ui/AppBar';

const App = () => (
  <MuiThemeProvider>
    <div>
      <div className="nav_bar">
        <AppBar title="Calculator"/>
      </div>
      <Calculator/>
    </div>
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('body_main')
);

document.body.style.overflow = "hidden";
