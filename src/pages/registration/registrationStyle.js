import { makeStyles } from '@mui/styles';
import RegistrImg from 'assets/img/Cinema1.png';

export const useStyles = makeStyles((theme) => ({
  main: {
    width: '100%',
    height: '100vh',
    backgroundColor: theme.palette.background.purple,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${RegistrImg})`,
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
    },
  },
  containerBackGroundImg: {
    width: '60%',
    height: '100%',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  RegistrImg: {
    width: '100%',
    height: '100%',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  containerContent: {
    width: '60%',
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
    height: '75%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  titleContainer: {
    width: '60%',
    display: 'flex',
    justifyContent: 'flex-start',
  },
  registerForm: {
    width: '100%',
    height: '75%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
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
    height: '10%',
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
    marginRight: '10%',
  },

}));
