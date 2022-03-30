import React from 'react';
import { string, number } from 'prop-types';
import {
  Typography, Card, CardActionArea, CardMedia, CardContent,
} from '@mui/material';

export const FilmCard = ({ id, img, title }) => (
  <Card
    sx={{
      width: '240px', minHeight: '330px', boxShadow: 'none',
    }}
    id={id}
  >
    <CardActionArea>
      <CardMedia
        component="img"
        sx={{ borderRadius: '8px' }}
        height="300px"
        image={img}
        alt={`${title} Image`}
      />
      <CardContent sx={{ backgroundColor: 'background.main' }}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{
            fontSize: '16px', fontWeight: '400', height: '50px', overflow: 'hidden',
          }}
        >
          { title }
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);
FilmCard.propTypes = {
  id: number,
  title: string,
  img: string,
};
