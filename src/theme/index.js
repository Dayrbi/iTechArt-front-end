import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    background: {
      main: '#F8FAFF',
      header: '#00142F',
      purple: '#8561C5',
      white: '#676767',
      gray: '#9e9e9e',
      darkBlue: '#001C3E',
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
  },
  typography: {
    fontFamily: ['Lato'].join(','),
    fontWeightMedium: 600,
    h2: {
      fontWeight: 600,
      fontSize: '40px',
      fontStyle: 'normal',
    },
    customTitleH2: {
      fontWeight: 600,
      fontSize: '26px',
      fontStyle: 'normal',
      lineHeight: 1.93,
    },
    body3: {
      fontFamily: ['Montserrat'].join(','),
      fontWeight: 400,
      fontStyle: 'normal',
      fontSize: '20px',
      lineHeight: 1.43,
      letterSpacing: '0.01071em',
    },
    bodyRate: {
      fontFamily: ['Montserrat'].join(','),
      fontWeight: 600,
      fontStyle: 'normal',
      fontSize: '14px',
      letterSpacing: '0.01071em',
    },
    caption: {
      fontFamily: ['Lato'].join(','),
    },
    bodyTitle: {
      fontFamily: ['Lato'].join(','),
      fontSize: '20px',
      fontStyle: 'normal',
      fontWeight: 500,
    },
    cardTitle: {
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '24px',
      lineHeight: 1.81,
    },
  },
  shadows: {
    1: '0px 1px 3px 0px rgb(0 0 0 / 30%)',
    8: '0px 1px 3px 0px rgb(0 0 0 / 10%)',
  },
});
