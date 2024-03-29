import React from 'react';
import {
  array, func, number, string,
} from 'prop-types';
import moment from 'moment-timezone';
import {
  Typography,
  Box,
  Button,
} from '@mui/material';

export const CinemaContainer = ({
  time, price, cinemas, handleSessionClick, id,
}) => (
  <Box sx={{
    boxShadow: 'none', height: 'fit-content', minHeight: '70px', display: 'flex', justifyContent: 'space-between',
  }}
  >
    {
      cinemas && cinemas.map((cinema) => (
        <Box
          key={cinema.title}
          sx={{
            ml: 3, mt: 2, maxWidth: '320px', width: '100%',
          }}
        >
          <Typography gutterBottom component="div" sx={{ mb: 0, font: '400 24px/29px Lato' }}>
            {cinema.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {cinema.address}
          </Typography>
        </Box>
      ))
    }
    <Box
      variant="contained"
      sx={{
        flex: 1, maxWidth: '700px', display: 'flex', justifyContent: { sm: 'center', md: 'flex-start' },
      }}
    >
      <Box
        sx={{
          mt: 3, ml: 1, display: 'flex',
        }}
      >
        <Box sx={{ maxWidth: '320px', width: '100%', display: 'flex' }}>
          {
           time && time.map((filmTime) => (
             <Box
               key={filmTime}
               sx={{
                 display: 'flex', flexDirection: 'column', alignItems: 'center', mr: 2,
               }}
             >
               <Button
                 variant="contained"
                 onClick={() => handleSessionClick(id, filmTime)}
                 disabled={moment(filmTime).isBefore(new Date())}
                 sx={{ backgroundColor: 'button.purple' }}
               >
                 <Typography variant="button" color="common.white">{moment(filmTime).format('H:mm')}</Typography>
               </Button>
               <Typography align="center" color="text.secondary" variant="caption">{`от ${price} руб`}</Typography>
             </Box>
           ))
          }
        </Box>
      </Box>
    </Box>
  </Box>
);
CinemaContainer.propTypes = {
  time: array,
  price: number,
  cinemas: array,
  id: string,
  handleSessionClick: func,
};
