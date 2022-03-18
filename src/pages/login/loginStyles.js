import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  main: {
    width: '100%',
    height: '100vh',
    backgroundColor: '#8561c5',
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
  cinemaImg: {
    width: '100%',
    height: '100%',
  },
  containerContent: {
    width: '60%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
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
  },
  signUpBut: {
    textDecoration: 'none',
    marginRight: '1%',
  },

});
