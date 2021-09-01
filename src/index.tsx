import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import {
  ThemeProvider as MuiThemeProvider, createTheme,
} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { store } from './redux/store';
import App from './App';

import reportWebVitals from './reportWebVitals';

const myTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <MuiThemeProvider theme={myTheme}>
          <ThemeProvider theme={myTheme}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </MuiThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
