import '@emotion/react';
import { Theme as MuiTheme } from '@mui/material';
import { myTheme } from './index';

declare module '@emotion/react' {
  export interface Theme extends MuiTheme {
  }
}
