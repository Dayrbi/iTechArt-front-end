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
}));
