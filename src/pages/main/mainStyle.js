import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.main,
  },
  mainTitle: {
    fontSize: '38px',
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: 600,
  },
  navSection: {
    width: '100%',
    display: 'flex',
    marginTop: '4%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  movieTitleContainer: {
    width: '65%',
    display: 'flex',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('lg')]: {
      width: '80%',
      marginTop: theme.spacing(2),
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(4),
      width: '95%',
    },
  },
  navBar: {
    width: '65%',
    borderColor: theme.palette.grey.main,
    borderTop: '1px solid',
    borderBottom: '1px solid',
    [theme.breakpoints.down('lg')]: {
      width: '80%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '95%',
    },
  },
  LinkButton: {
    margin: theme.spacing(1),
    marginRight: theme.spacing(2),
  },
  selectContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: '50%',
    minWidth: '450px',
    maxWidth: '550px',
    [theme.breakpoints.down('sm')]: {
      minWidth: 300,
      width: '60%',
    },
  },
  filterBox: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    flexBasis: 1,
    marginRight: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      width: '25%',
      marginLeft: theme.spacing(2),
    },
  },
  selectInput: {
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.shadows[1],
    maxWidth: '160px',
    [theme.breakpoints.down('sm')]: {
      width: '100px',
      height: '50px',
    },
  },
  timePickerTitle: {
    minWidth: '110px',
  },
  sliderSection: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(5),
    [theme.breakpoints.down('lg')]: {
      width: '90%',
    },
    [theme.breakpoints.down('md')]: {
      width: '89%',
      marginLeft: theme.spacing(3),
    },
    [theme.breakpoints.down('sm')]: {
      width: '89%',
    },
  },
  cinemaSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(20),
  },
  cinemaContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  widthContainer: {
    width: '65%',
    [theme.breakpoints.down('lg')]: {
      width: '80%',
    },
    [theme.breakpoints.down('sm')]: {
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
