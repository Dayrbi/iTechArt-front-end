import { makeStyles } from '@mui/styles';
import {
  BUTTON_COLOR, HEADER_COLOR, BACKGROUND_COLOR, WHITE_COLOR,
} from '../../constants/constantsStyle';

export const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: BACKGROUND_COLOR,
  },
  appBar: {
    height: '80px',
    width: '100%',
    backgroundColor: HEADER_COLOR,
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
    backgroundColor: '#737E8D',
    borderRadius: '8px',
    marginRight: theme.spacing(3),
    color: WHITE_COLOR,
  },
  searchTitle: {
    fontFamily: 'Lato',
    fontWeight: 600,
    fontSize: '22px',
    color: WHITE_COLOR,
  },
  butContainer: {
    width: '25%',
    height: '60%',
    display: 'flex',
    alignItems: 'center',
  },
  logBut: {
    marginRight: theme.spacing(3),
    color: WHITE_COLOR,
  },
  signBut: {
    backgroundColor: BUTTON_COLOR,
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
  navBAr: {
    width: '65%',
    borderColor: 'gray',
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
    backgroundColor: '#red',
  },
  filterBox: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    flexBasis: 1,
    marginRight: theme.spacing(3),
  },
  SelectInput: {
    backgroundColor: WHITE_COLOR,
    boxShadow: '0px 1px 3px 0px rgb(0 0 0 / 30%)',
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
    backgroundColor: WHITE_COLOR,
    boxShadow: '0px 1px 3px 0px rgb(0 0 0 / 30%)',
  },
  footerContainer: {
    width: '100%',
    height: '59px',
    backgroundColor: WHITE_COLOR,
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
    color: '#676767',
  },
}));
