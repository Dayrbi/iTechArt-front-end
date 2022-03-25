import { makeStyles } from '@mui/styles';
import { ARROW_IMG_URL } from '../../../../constants/constants';

export const useStyles = makeStyles(() => ({
  slickArrow: {
    display: 'block',
    position: 'absolute',
    backgroundImage: `url(${ARROW_IMG_URL})`,
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
