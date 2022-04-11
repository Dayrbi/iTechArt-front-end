import React from 'react';
import { string } from 'prop-types';
import { Typography, Card, Box } from '@mui/material';

export const CinemaCard = ({ title, address }) => (
  <Card sx={{
    maxWidth: 345, boxShadow: 'none', height: 'fit-content', minHeight: '70px',
  }}
  >
    <Box sx={{ ml: 3, mt: 2 }}>
      <Typography gutterBottom variant="h5" component="div" sx={{ mb: 0 }}>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {address}
      </Typography>
    </Box>
  </Card>
);
CinemaCard.propTypes = {
  title: string,
  address: string,
};
