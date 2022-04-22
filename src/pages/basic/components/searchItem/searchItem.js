import { Typography, Box } from '@mui/material';
import { func, object } from 'prop-types';
import React from 'react';

export const SearchItem = ({ option, handleClick }) => (
  <Box
    onClick={handleClick}
    sx={{
      display: 'flex', alignItems: 'center', mb: 1, '&:hover': { backgroundColor: 'grey.300' },
    }}
  >
    <Box component="img" src={option.img} sx={{ ml: 1, width: '55px', height: '70px' }} />
    <Box sx={{ ml: 2, flexDirection: 'column', display: 'flex' }}>
      <Typography variant="body3">{option.title}</Typography>
      <Typography variant="bodyRate" color={option.vote_average < 6 ? 'red' : '#3bb33b'}>{option.vote_average}</Typography>
    </Box>
  </Box>
);
SearchItem.propTypes = {
  option: object,
  handleClick: func,
};
