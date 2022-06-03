import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  FilmInfoContainer: {
    width: '65%',
    display: 'flex',
    position: 'relative',
    zIndex: '1',
    justifyContent: 'flex-start',
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.shadows[1],
    borderRadius: '8px',
    marginTop: theme.spacing(2),
    [theme.breakpoints.down('lg')]: {
      width: '85%',
    },
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    },
  },
  mainFilmTitle: {
    width: '65%',
    display: 'flex',
    justifyContent: 'flex-start',
    marginTop: theme.spacing(4),
    [theme.breakpoints.down('lg')]: {
      width: '85%',
    },
    [theme.breakpoints.down('md')]: {
      width: '95%',
      marginTop: theme.spacing(8),
    },
  },
  backgroundFilmImg: {
    width: '100%',
    height: 500,
    display: 'none',
    position: 'absolute',
    zIndex: '-1',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    overflow: 'hidden',
    filter: 'blur(7px)',
    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
  },
}));
