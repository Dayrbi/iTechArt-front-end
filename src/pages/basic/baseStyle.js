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
