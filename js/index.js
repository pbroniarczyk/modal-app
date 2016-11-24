import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// onTouchTap fix
import injectTapEventPlugin from 'react-tap-event-plugin';


// Material UI Components
import Date from './components/Date-Picker';
import ButtonRaised from './components/Button';

// Custom components
import Desc from './components/Desc';
import Header from './components/Header';

// onTouchTap fix
injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <div>
      <Header/>
      <Date/>
      <Desc/>
    </div>
  </MuiThemeProvider>
);

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
