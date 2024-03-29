import React from 'react';
import {
  Box,
  Card, CardActionArea, CardContent, CardMedia, Typography,
} from '@mui/material';
import moment from 'moment-timezone';
import {
  array, bool, func, number, string,
} from 'prop-types';

export const OrderList = ({
  imgSrc, title, time, cinemaName, city, placeArr, amount, id, handleOrderClick, filmId, active,
}) => (
  <Card
    onClick={() => handleOrderClick(id, filmId)}
    sx={{
      display: 'flex',
      minWidth: { xs: '300px', sm: '450px', md: '500px' },
      maxWidth: '540px',
      boxShadow: '1',
      borderRadius: '8px',
      mb: 2,
      maxHeight: '90px',
      minHeight: '85px',
      borderColor: active ? 'primary.light' : 'common.white',
      borderWidth: '1px',
      borderStyle: 'solid',
      width: { xs: '95%', sm: '80%', md: '100%' },
    }}
  >
    <CardMedia
      sx={{ width: '60px' }}
      component="img"
      height="90"
      image={imgSrc || ''}
      alt={`${title} image` || 'Film poster img'}
    />
    <CardActionArea>
      <CardContent sx={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '90%',
      }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="bodyLato3">{title}</Typography>
          <Typography variant="body2" color="text.secondary">{moment(time).format('YYYY-MM-DD, HH:mm')}</Typography>
          <Typography variant="body2" color="text.secondary">{`${cinemaName}, ${city}`}</Typography>
        </Box>
        <Typography variant="bodyLato3">{`${placeArr.length} TICKETS`}</Typography>
        <Typography variant="bodyLato3">{`$${amount}`}</Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);
OrderList.propTypes = {
  imgSrc: string,
  title: string,
  time: string,
  cinemaName: string,
  city: string,
  placeArr: array,
  amount: number,
  id: string,
  handleOrderClick: func,
  filmId: number,
  active: bool,
};
