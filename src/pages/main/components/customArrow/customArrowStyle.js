import { makeStyles } from '@mui/styles';
import CustomArrow from 'assets/img/Arrow.png';

export const useStyles = makeStyles(() => ({
  slickArrow: {
    display: 'block',
    position: 'absolute',
    backgroundImage: `url(${CustomArrow})`,
    width: '48px',
    height: '48px',
    backgroundColor: 'white',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    borderRadius: '100%',
    zIndex: '555',
    backgroundSize: '16px',
    cursor: 'pointer',
  },
}));
