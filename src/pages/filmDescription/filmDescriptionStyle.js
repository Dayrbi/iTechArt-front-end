import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.main,
  },
  filmSection: {
    width: '100%',
    display: 'flex',
    marginTop: '4%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  cinemaSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(20),
  },
  cinemaTitle: {
    width: '65%',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('lg')]: {
      width: '85%',
    },
    [theme.breakpoints.down('md')]: {
      width: '95%',
    },
  },
  cinemaContainer: {
    width: '65%',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '8px',
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.shadows[1],
    [theme.breakpoints.down('lg')]: {
      width: '85%',
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  loaderContainer: {
    display: 'flex',
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
