import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.main,
  },
  appBar: {
    height: '80px',
    width: '100%',
    backgroundColor: theme.palette.background.header,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'fixed',
    zIndex: 1000,
    top: 0,
  },
  searchContainer: {
    width: '60%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  searchInput: {
    width: '50%',
    backgroundColor: theme.palette.input.gray,
    borderRadius: '8px',
    marginRight: theme.spacing(3),
    color: theme.palette.common.white,
  },
  searchTitle: {
    fontFamily: 'Lato',
    fontWeight: 600,
    fontSize: '22px',
    color: theme.palette.common.white,
  },
  butContainer: {
    width: '25%',
    height: '60%',
    display: 'flex',
    alignItems: 'center',
  },
  logButton: {
    marginRight: theme.spacing(3),
    color: theme.palette.common.white,
  },
  signButton: {
    backgroundColor: theme.palette.button.purple,
  },
  mainTitle: {
    fontSize: '38px',
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
    width: '60%',
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
    boxShadow: theme.palette.shadows.container,
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
    width: '65%',
    borderRadius: '10px',
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.palette.shadows.container,
  },
  footerContainer: {
    width: '100%',
    height: '59px',
    backgroundColor: theme.palette.common.white,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerTitle: {
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '19px',
    color: theme.palette.background.white,
  },
}));
