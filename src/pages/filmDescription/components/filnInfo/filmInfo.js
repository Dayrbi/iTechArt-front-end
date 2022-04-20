import { Typography, Box } from '@mui/material';
import {
  string, number, array,
} from 'prop-types';
import moment from 'moment-timezone';
import React from 'react';

export const FilmInfo = (
  {
    title,
    img,
    releaseDate,
    runtime,
    genres,
    countryName,
    budget,
    overview,
    actors,
  },
) => (
  <>
    <Box component="div" sx={{ width: '65%', justifyContent: 'flex-start', mt: 4 }}>
      <Typography variant="h2">Detailed Info</Typography>
    </Box>
    <Box sx={{
      width: '65%', display: 'flex', justifyContent: 'flex-start', backgroundColor: 'common.white', boxShadow: '1', borderRadius: '8px', mt: 2,
    }}
    >
      <Box
        component="img"
        src={img}
        alt={`${title} image`}
        sx={{ borderRadius: '8px 0px 0px 8px', width: '42%' }}
      />
      <Box sx={{ ml: 7 }}>
        <Box sx={{ mt: 6 }}>
          <Typography variant="h2">{title}</Typography>
          <Box sx={{ mt: 4 }}>
            <Box>
              <Typography variant="body3" sx={{ fontWeight: 'fontWeightMedium' }}>Year: </Typography>
              <Typography variant="body3">{moment(releaseDate).format('YYYY')}</Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body3" sx={{ fontWeight: 'fontWeightMedium' }}>Duration: </Typography>
              <Typography variant="body3">{`${runtime} min`}</Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body3" sx={{ fontWeight: 'fontWeightMedium' }}>Genres: </Typography>
              <Typography variant="body3">{genres && genres.map((val) => val.name).join(', ')}</Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body3" sx={{ fontWeight: 'fontWeightMedium' }}>Country: </Typography>
              <Typography variant="body3">{countryName}</Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body3" sx={{ fontWeight: 'fontWeightMedium' }}>Budget: </Typography>
              <Typography variant="body3">{`${budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}$`}</Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body3" sx={{ fontWeight: 'fontWeightMedium' }}>Actors: </Typography>
              <Typography variant="body3">{actors && actors.map((actor) => actor).join(', ')}</Typography>
            </Box>
            <Box sx={{ mt: 2, maxWidth: '80%' }}>
              <Typography variant="body3" sx={{ fontWeight: 'fontWeightMedium' }}>Overview: </Typography>
              <Typography variant="body3">{overview}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  </>
);
FilmInfo.propTypes = {
  title: string,
  img: string,
  releaseDate: string,
  runtime: number,
  genres: array,
  countryName: string,
  budget: number,
  overview: string,
  actors: array,
};
