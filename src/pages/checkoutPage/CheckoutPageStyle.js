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
  },
}));