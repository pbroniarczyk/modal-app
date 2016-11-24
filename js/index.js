import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// onTouchTap fix
import injectTapEventPlugin from 'react-tap-event-plugin';


// Material UI Components
import Date from './components/Date-Picker';
import ButtonRaised from './components/Button';

// onTouchTap fix
injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <div>
      <Date/>
      <ButtonRaised/>
    </div>
  </MuiThemeProvider>
);

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
