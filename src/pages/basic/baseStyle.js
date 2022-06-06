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
    [theme.breakpoints.down('md')]: {
      width: '80%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '30%',
      minWidth: '140px',
    },
  },
  searchInput: {
    width: '50%',
    backgroundColor: theme.palette.input.gray,
    borderRadius: '8px',
    marginRight: theme.spacing(3),
    color: theme.palette.common.white,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  searchTitle: {
    fontFamily: 'Lato',
    fontWeight: 600,
    fontSize: '22px',
    color: theme.palette.common.white,
    cursor: 'pointer',
  },
  butContainer: {
    width: '25%',
    height: '60%',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      width: '15%',
      justifyContent: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      width: '25%',
      minWidth: '150px',
      justifyContent: 'center',
    },
  },
  searchIconBut: {
    display: 'none',
    width: '40px',
    color: theme.palette.common.white,
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  responsiveSearchContainer: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'space-around',
    zIndex: theme.zIndex.modal,
    top: '80px',
    backgroundColor: theme.palette.background.header,
    width: '100%',
    transition: 'height 1s',
    overflow: 'hidden',
  },
  responsiveSearch: {
    backgroundColor: theme.palette.common.white,
    borderRadius: '8px',
    marginTop: theme.spacing(3),
    width: '100%',
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
