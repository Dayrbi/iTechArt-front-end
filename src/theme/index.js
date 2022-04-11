import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    background: {
      main: '#F8FAFF',
      header: '#00142F',
      purple: '#8561C5',
      white: '#676767',
    },
    button: {
      purple: '#3F3DC9',
    },
    input: {
      gray: '#737E8D',
    },
    grey: {
      main: '#424242',
    },
    shadows: {
      container: '0px 1px 3px 0px rgb(0 0 0 / 30%)',
    },
  },
});
