import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  main: {
    width: '100%',
    height: '100vh',
    backgroundColor: theme.palette.background.purple,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '55%',
    height: '75%',
    display: 'flex',
  },
  containerBackGroundImg: {
    width: '60%',
    height: '100%',
  },
  RegistrImg: {
    width: '100%',
    height: '100%',
  },
  containerContent: {
    width: '60%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.common.white,
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
  },
  signUpBut: {
    textDecoration: 'none',
    marginRight: '10%',
  },

}));
