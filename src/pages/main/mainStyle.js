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
  },
  navBar: {
    width: '65%',
    borderColor: theme.palette.grey.main,
    borderTop: '1px solid',
    borderBottom: '1px solid',
  },
  LinkButton: {
    margin: theme.spacing(1),
    marginRight: theme.spacing(2),
  },
  selectContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: '50%',
  },
  filterBox: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    flexBasis: 1,
    marginRight: theme.spacing(3),
  },
  selectInput: {
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.shadows[1],
  },
  sliderSection: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(5),
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
}));
