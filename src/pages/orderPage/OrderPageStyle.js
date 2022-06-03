import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  orderContainer: {
    width: '100%',
    height: '100vh',
    backgroundColor: theme.palette.background.main,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down('lg')]: {
      height: '100%',
      marginBottom: theme.spacing(4),
    },
    [theme.breakpoints.down('md')]: {
      height: '100%',
    },
  },
  orederTitle: {
    width: '65%',
    display: 'flex',
    justifyContent: 'flex-start',
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('xl')]: {
      width: '85%',
    },
    [theme.breakpoints.down('lg')]: {
      width: '80%',
      marginTop: theme.spacing(10),
    },
    [theme.breakpoints.down('sm')]: {
      width: '95%',
    },
  },
  orderContent: {
    width: '65%',
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.shadows[1],
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xl')]: {
      width: '85%',
    },
    [theme.breakpoints.down('lg')]: {
      width: '80%',
      flexDirection: 'column',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  orderListContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(3),
    maxHeight: '600px',
    [theme.breakpoints.down('lg')]: {
      width: '65%',
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(1),
    },
  },
  selectOrderContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.down('lg')]: {
      width: '100%',
      alignItems: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
}));
