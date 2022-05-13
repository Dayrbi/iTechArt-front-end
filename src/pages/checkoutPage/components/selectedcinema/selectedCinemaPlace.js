/* eslint-disable no-return-assign */
import {
  Box, Button, Card, Typography,
} from '@mui/material';
import { array } from 'prop-types';
import React from 'react';

export const SelectedCinemaPlace = ({ places }) => (
  <Box>
    <Box sx={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '300px',
    }}
    >
      {places && places.map((place, i) => (
        <Card
          key={i}
          sx={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '90%', mb: 1, height: '50px',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', ml: 1 }}>
            <Typography variant="body1">{`Row ${place.row}, Seat ${place.seat}`}</Typography>
            {place.vip
              ? <Typography variant="body2" color="blue">VIP</Typography>
              : <Typography variant="body2" color="text.secondary">Regular</Typography>}
          </Box>
          <Typography variant="body1" sx={{ mr: 1 }}>{`$${place.price}`}</Typography>
        </Card>
      ))}
    </Box>
    <Box sx={{
      width: '100%', borderColor: 'grey.300', borderWidth: '1px 0 0 0', borderStyle: 'solid', display: 'flex', flexDirection: 'column', alignItems: 'center',
    }}
    >
      <Box sx={{
        display: 'flex', justifyContent: 'space-between', width: '90%', my: 2,
      }}
      >
        <Typography variant="body1">Summary:</Typography>
        <Typography variant="body1">{`${places.reduce((sum, place) => sum += place.price, 0)}$`}</Typography>
      </Box>
      <Button variant="contained" sx={{ backgroundColor: 'button.purple', width: '90%', height: '48px' }}>Purchase</Button>
    </Box>
  </Box>
);
SelectedCinemaPlace.propTypes = {
  places: array,
};
