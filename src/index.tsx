import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import CustomizedSnackbarProvider from 'src/components/customized-snackbar-provider/customized-snackbar-provider.component';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { store } from './redux/store';
import App from './App';

const myTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1565c0',
    },
    secondary: {
      main: '#6a1b9a',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CustomizedSnackbarProvider>
        <BrowserRouter>
          <MuiThemeProvider theme={myTheme}>
            <ThemeProvider theme={myTheme}>
              <CssBaseline />
              <App />
            </ThemeProvider>
          </MuiThemeProvider>
        </BrowserRouter>
      </CustomizedSnackbarProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
