import React from 'react';
import { array, func, string } from 'prop-types';
import moment from 'moment-timezone';
import {
  Typography,
  Box,
  Button,
} from '@mui/material';

export const CinemaCard = ({
  title, address, sessions, handleFilmClick, handleSessionClick, date,
}) => {
  const isExist = sessions.map((session) => moment(session.date).format() === moment(date).format());
  return (
    <Box sx={{
      boxShadow: 'none', display: 'flex', justifyContent: 'space-between', flexDirection: { xs: 'column', sm: 'column', md: 'row' },
    }}
    >
      {
    isExist.includes(true) ? (
      <Box>
        <Box sx={{
          ml: 3, mt: 2, maxWidth: '320px', width: '100%', height: 'fit-content', minHeight: '70px',
        }}
        >
          <Typography gutterBottom component="div" sx={{ mb: 0, font: '400 24px/29px Lato' }}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {address}
          </Typography>
        </Box>
      </Box>
    )
      : ''
      }
      <Box
        variant="contained"
        sx={{
          flex: 1, maxWidth: '700px',
        }}
      >
        {
      sessions && sessions.map((session) => (
        moment(session.date).format() === moment(date).format()
          ? (
            <Box
              key={session.time}
              sx={{
                mt: 3, ml: { xs: 3, sm: 3, md: 1 }, display: 'flex', justifyContent: 'space-between',
              }}
            >
              <Box sx={{ cursor: 'pointer', ml: { md: 5 } }}>
                <Typography onClick={() => handleFilmClick(session.filmId)} sx={{ font: '500 20px/24px Lato', '&:hover': { color: 'button.purple' } }}>{session.filmName}</Typography>
                <Typography variant="body2" color="text.secondary">{`${session.filmGenres.join(',  ')}`}</Typography>
              </Box>
              <Box sx={{
                maxWidth: '320px', width: '100%', display: 'flex', justifyContent: { xs: 'flex-end', sm: 'center', md: 'flex-start' },
              }}
              >
                {
                session.time && session.time.map((filmTime) => (
                  <Box
                    key={filmTime}
                    sx={{
                      display: 'flex', flexDirection: 'column', alignItems: 'center', mr: 2,
                    }}
                  >
                    <Button variant="contained" disabled={moment(filmTime).isBefore(new Date())} sx={{ backgroundColor: 'button.purple' }}>
                      <Typography variant="button" onClick={() => handleSessionClick(session._id, filmTime)} color="common.white">{moment(filmTime).format('H:mm')}</Typography>
                    </Button>
                    <Typography align="center" color="text.secondary" variant="caption">{`от ${session.price} руб`}</Typography>
                  </Box>
                ))
                }
              </Box>
            </Box>
          )
          : ''
      ))
        }
      </Box>
    </Box>
  );
};
CinemaCard.propTypes = {
  title: string,
  address: string,
  sessions: array,
  handleFilmClick: func,
  handleSessionClick: func,
  date: string,
};
