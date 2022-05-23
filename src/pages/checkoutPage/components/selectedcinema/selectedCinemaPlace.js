import {
  Box, Button, Card, Typography,
} from '@mui/material';
import { array, func } from 'prop-types';
import React from 'react';

export const SelectedCinemaPlace = ({
  places, food, selectedSum, handlePay,
}) => (
  <Box>
    <Box sx={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '300px', maxHeight: '300px', overflowY: 'scroll',
    }}
    >
      {places && places.map((place, i) => (
        <Card
          key={i}
          sx={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '90%', mb: 1, minHeight: '50px',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', ml: 1 }}>
            <Typography variant="body1">{`Row ${place.row}, Seat ${place.seat}`}</Typography>
            {place.vip
              ? <Typography variant="body2" color="primary.light">VIP</Typography>
              : <Typography variant="body2" color="text.secondary">Regular</Typography>}
          </Box>
          <Typography variant="body1" sx={{ mr: 1 }}>{`$${place.price}`}</Typography>
        </Card>
      ))}
      {food.length ? food.map((foodEl) => (
        <Card
          key={foodEl.title}
          sx={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '90%', mb: 1, minHeight: '50px',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', ml: 1 }}>
            <Typography variant="body1">{`${foodEl.title}, ${foodEl.amount}`}</Typography>
            <Typography variant="body2" color="success.light">Food</Typography>
          </Box>
          <Typography variant="body1" sx={{ mr: 1 }}>{`$${foodEl.price * foodEl.amount}`}</Typography>
        </Card>
      )) : ''}
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
        <Typography variant="body1">{`$${selectedSum()}`}</Typography>
      </Box>
      <Button variant="contained" onClick={handlePay} sx={{ backgroundColor: 'button.purple', width: '90%', height: '48px' }}>Purchase</Button>
    </Box>
  </Box>
);
SelectedCinemaPlace.propTypes = {
  places: array,
  food: array,
  selectedSum: func,
  handlePay: func,
};
