import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import store from './store';
import App from './components/App';
import './index.css';
import theme from './utils/mui-theme';

// For onTouchTap currently unsupported by React for mobile (Material UI implementation detail)
injectTapEventPlugin();

const appRoot = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={theme}>
      <App/>
    </MuiThemeProvider>
  </Provider>, appRoot
);
