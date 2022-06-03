import { makeStyles } from '@mui/styles';
import CinemaImg from 'assets/img/Cinema2.png';

export const useStyles = makeStyles((theme) => ({
  main: {
    width: '100%',
    height: '100vh',
    backgroundColor: theme.palette.background.purple,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${CinemaImg})`,
      backgroundSize: 'cover',
    },
  },
  container: {
    width: '55%',
    height: '75%',
    display: 'flex',
    [theme.breakpoints.down('lg')]: {
      width: '65%',
    },
    [theme.breakpoints.down('md')]: {
      width: '55%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '70%',
      height: '65%',
    },
  },
  containerBackGroundImg: {
    width: '60%',
    height: '100%',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  cinemaImg: {
    width: '100%',
    height: '100%',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  containerContent: {
    width: '80%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.common.white,
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  containerContentForm: {
    width: '100%',
    height: '60%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  loginForm: {
    width: '100%',
    height: '60%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  titleContainer: {
    width: '60%',
    display: 'flex',
    justifyContent: 'flex-start',
  },
  formTitle: {
    fontFamily: 'Lato',
    fontWeight: '500',
    fontSize: '36px',
  },
  formInput: {
    width: '60%',
  },
  formButtom: {
    width: '60%',
    height: '15%',
  },
  signUpContainer: {
    width: '60%',
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '5%',
    [theme.breakpoints.down('lg')]: {
      width: '80%',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  signUpBut: {
    textDecoration: 'none',
    marginRight: '1%',
  },

}));
