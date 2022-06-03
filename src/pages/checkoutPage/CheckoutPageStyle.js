import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: '100%',
    height: '100vh',
    backgroundColor: theme.palette.background.main,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down('lg')]: {
      height: '100%',
    },
  },
  checkoutTitle: {
    width: '80%',
    display: 'flex',
    justifyContent: 'flex-start',
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('xl')]: {
      width: '95%',
      marginTop: theme.spacing(12),
    },
  },
  checkoutContainer: {
    width: '80%',
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.shadows[1],
    borderRadius: '8px',
    [theme.breakpoints.down('xl')]: {
      width: '95%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  checkoutContent: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('lg')]: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: 'auto',
      gridTemplateAreas:
            `'cinema cinema'
            'food select'`,
    },
    [theme.breakpoints.down('sm')]: {
      gridTemplateAreas:
            `'cinema cinema'
            'food food'
            'select select'`,
    },
  },
  foodContainer: {
    width: '15%',
    gridArea: 'food',
    [theme.breakpoints.down('lg')]: {
      display: 'grid',
      justifySelf: 'center',
      width: '65%',
      maxHeight: '300px',
    },
  },
  cinemaContainer: {
    width: '50%',
    marginLeft: theme.spacing(3),
    gridArea: 'cinema',
    [theme.breakpoints.down('lg')]: {
      display: 'grid',
      justifySelf: 'center',
      marginLeft: theme.spacing(0),
      width: '75%',
      marginBottom: theme.spacing(3),
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  selectContainer: {
    width: '25%',
    maxWidth: '320px',
    gridArea: 'select',
    [theme.breakpoints.down('lg')]: {
      display: 'grid',
      justifySelf: 'center',
      width: '70%',
      borderColor: theme.palette.grey[300],
      borderWidth: '0 0 0 1px',
      borderStyle: 'solid',
      marginBottom: theme.spacing(3),
    },
    [theme.breakpoints.down('md')]: {
      width: '80%',
      marginLeft: theme.spacing(5),
    },
    [theme.breakpoints.down('sm')]: {
      borderWidth: '0',
      marginTop: theme.spacing(10),
    },
  },
}));
