import {
  Box,
  Card, CardContent, CardMedia, Typography,
} from '@mui/material';
import moment from 'moment-timezone';
import { array, number, string } from 'prop-types';
import React from 'react';

export const SelectedOrder = ({
  imgSrc, title, cinemaName, city, time, placeArr, foodArr, amount,
}) => (
  <Card sx={{ boxShadow: 'shadow.1', minWidth: 420, minHeight: '400px' }}>
    <CardMedia
      component="img"
      height="90"
      image={imgSrc || ''}
      alt={`${title} image` || 'img'}
    />
    <CardContent sx={{ mt: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 5 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="bodyLato3">{title}</Typography>
          <Typography variant="body2" color="text.secondary">{`${cinemaName}, ${city}`}</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="bodyLato3">{moment(time).format('HH:mm')}</Typography>
          <Typography variant="bodyLato3">{moment(time).format('YYYY-MM-DD')}</Typography>
        </Box>
      </Box>
      <Box sx={{
        display: 'flex', borderColor: 'grey.300', borderWidth: '0 0 1px 0', borderStyle: 'solid', mb: 2,
      }}
      >
        <Box sx={{
          borderColor: 'grey.300', borderWidth: '0 1px 0 0', borderStyle: 'solid', minWidth: '60%', mb: 7,
        }}
        >
          {placeArr && placeArr.map((place, index) => (
            <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', mr: 1 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant="body1">{`Row ${place.row}, Seat ${place.seat}`}</Typography>
                {place.vip
                  ? <Typography variant="body2" color="blue">VIP</Typography>
                  : <Typography variant="body2" color="text.secondary">Regular</Typography>}
              </Box>
              <Typography variant="body1" color="text.secondary">{`$${place.price}`}</Typography>
            </Box>
          ))}
        </Box>
        <Box sx={{ ml: 2, minWidth: '35%' }}>
          {foodArr && foodArr.map((food) => (
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }} key={food.title}>
              <Typography variant="body1">{`${food.title}, ${food.amount}`}</Typography>
              <Typography variant="body1" color="text.secondary">{`$${food.price * food.amount}`}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="bodyLato3">AMOUNT</Typography>
        <Typography variant="bodyLato3">{`$${amount}`}</Typography>
      </Box>
    </CardContent>
  </Card>
);
SelectedOrder.propTypes = {
  imgSrc: string,
  title: string,
  time: string,
  cinemaName: string,
  city: string,
  placeArr: array,
  foodArr: array,
  amount: number,
};
