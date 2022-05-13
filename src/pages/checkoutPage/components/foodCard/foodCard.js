import React from 'react';
import {
  Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography,
} from '@mui/material';
import {
  string, number, func,
} from 'prop-types';

export const FoodCard = ({
  img, title, price, handleRemoveFood, handleAddFood,
}) => (
  <Card sx={{
    width: '100%', height: '140px', boxShadow: '1', borderRadius: '8px',
  }}
  >
    <CardActionArea sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
      <CardMedia
        component="img"
        alt={`${title} image`}
        image={img}
        height="53"
        sx={{ width: '60px' }}
      />
    </CardActionArea>
    <CardContent sx={{ pb: 1 }}>
      <Typography variant="subtitle2" sx={{ lineHeight: 1.06, fontWeight: 500, textAlign: 'center' }}>{`${title} $${price}`}</Typography>
    </CardContent>
    <CardActions>
      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <Box
          variant="outlined"
          sx={{
            width: '20px',
            height: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '4px',
            border: '1px solid',
            borderColor: 'grey.300',
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: 'grey.400',
            },
          }}
          onClick={() => handleAddFood()}
        >
          +
        </Box>
        <Typography variant="subtitle2" sx={{ mx: 1 }}>0</Typography>
        <Box
          sx={{
            width: '20px',
            height: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '4px',
            border: '1px solid',
            borderColor: 'grey.300',
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: 'grey.400',
            },
          }}
          onClick={() => handleRemoveFood()}
        >
          -
        </Box>
      </Box>
    </CardActions>
  </Card>
);
FoodCard.propTypes = {
  img: string,
  title: string,
  price: number,
  handleAddFood: func,
  handleRemoveFood: func,
};
