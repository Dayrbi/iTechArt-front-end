import React from 'react';
import { string, func, object } from 'prop-types';
import { useStyles } from './customArrowStyle';

export const CustomArrowLeft = ({ style, onClick }) => {
  const classes = useStyles();
  return (
    <div
      className={classes.slickArrow}
      style={{
        ...style,
        transform: 'rotate(-180deg)',
        left: '0',
        top: '35%',
      }}
      onClick={onClick}
    />
  );
};
export const CustomArrowRight = ({ style, onClick }) => {
  const classes = useStyles();
  return (
    <div
      className={classes.slickArrow}
      style={{
        ...style,
        right: '0',
        top: '35%',
      }}
      onClick={onClick}
    />
  );
};
CustomArrowLeft.propTypes = {
  className: string,
  style: object,
  onClick: func,
};
CustomArrowRight.propTypes = {
  className: string,
  style: object,
  onClick: func,
  ARROW_IMG_URL: string,
};
