import {
  Box, Skeleton, Snackbar, Alert, Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import moment from 'moment-timezone';
import { getCinemasByFilm } from 'redux/actions/cinemas';
import { getFilmInfo } from 'redux/actions/films';
import { CinemaContainer } from './components/cinemaContainer/cinemaContainer';
import { FilmInfo } from './components/filnInfo/filmInfo';
import { useStyles } from './filmDescriptionStyle';

export const FilmDescription = () => {
  const classes = useStyles();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { sessions, date } = useSelector((state) => state.cinemasReducer.cinemas.filmCinemas);
  const [filmData] = useSelector((state) => state.filmsReducer.films.filmInfo);
  const [filmLoadError, setFilLoadError] = useState(false);
  const [errorCinema, setErrorCinema] = useState(false);
  useEffect(() => {
    getFilm();
  }, [id]);
  useEffect(() => {
    getSessions();
  }, [id]);
  async function getFilm() {
    try {
      await dispatch(getFilmInfo(id));
    } catch (e) {
      setFilLoadError(true);
    }
  }
  async function getSessions() {
    try {
      await dispatch(getCinemasByFilm(id));
    } catch (e) {
      setErrorCinema(true);
    }
  }
  const handleClose = () => {
    setFilLoadError(false);
  };
  return (
    <div className={classes.mainContainer}>
      <section className={classes.filmSection}>
        <Snackbar open={filmLoadError} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
          <Alert variant="filled" onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            Oops Something went wrong
          </Alert>
        </Snackbar>
        {filmData ? (
          <FilmInfo
            title={filmData.title}
            img={filmData.img}
            releaseDate={filmData.release_date}
            runtime={filmData.runtime}
            genres={filmData.genres}
            countryName={filmData.countryName}
            budget={filmData.budget}
            overview={filmData.overview}
            actors={filmData.actors}
          />
        )
          : (
            <Box sx={{ width: '65%' }}>
              <Skeleton width={160} sx={{ mt: 4 }} />
              <Box sx={{
                width: '100%', display: 'flex', justifyContent: 'flex-start', borderRadius: '8px', mt: 2, backgroundColor: 'common.white', boxShadow: '1',
              }}
              >
                <Skeleton variant="rectangle" width={500} height={600} />
                <Box sx={{ width: '35%', ml: 7, mt: 6 }}>
                  <Skeleton width={130} />
                  <Skeleton sx={{ mt: 4 }} width={160} />
                  <Skeleton sx={{ mt: 4 }} width={210} />
                  <Skeleton sx={{ mt: 4 }} width={220} />
                  <Skeleton sx={{ mt: 4 }} width={210} />
                  <Skeleton sx={{ mt: 4 }} />
                  <Skeleton sx={{ mt: 2 }} height={160} />
                </Box>
              </Box>
            </Box>
          )}
      </section>
      <section className={classes.cinemaSection}>
        <Box sx={{ width: '65%', justifyContent: 'flex-start' }}>
          <Typography variant="h2">Watch in Cinema</Typography>
        </Box>
        <Box
          sx={{
            width: '65%', display: 'flex', flexDirection: 'column', borderRadius: '8px', mt: 2, backgroundColor: 'common.white', boxShadow: '1',
          }}
        >
          {date && date.map((dateEl) => (
            <Box key={dateEl}>
              <Box sx={{
                width: '100%', height: '50px', backgroundColor: 'grey.300', alignItems: 'center', display: 'flex', borderRadius: '10px 10px 0 0',
              }}
              >
                <Typography variant="body3" sx={{ fontWeight: 'fontWeightMedium', ml: 2 }}>{moment(dateEl).format('dddd, DD MMMM')}</Typography>
              </Box>
              {!errorCinema && sessions.map((session) => (
                moment(session.date).format() === moment(dateEl).format()
                  ? (
                    <CinemaContainer
                      time={session.time}
                      price={session.price}
                      cinemas={session.cinemaId}
                      key={session._id}
                    />
                  ) : ''
              ))}

            </Box>
          ))}
        </Box>
      </section>
    </div>
  );
};
