import { Box, Skeleton, Typography } from '@mui/material';
import moment from 'moment-timezone';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCinemasForCheckout } from 'redux/actions/cinemas';
import { getFilmForCheckout } from 'redux/actions/films';
import { useStyles } from './CheckoutPageStyle';
import { FoodCard } from './components/foodCard/foodCard';

export const CheckoutPage = () => {
  const classes = useStyles();
  const { id } = useParams();
  const [sessionData] = useSelector((state) => state.cinemasReducer.cinemas.checkoutCinemas);
  const [filmsArr] = useSelector((state) => state.filmsReducer.films.filmCheckout);
  const dispatch = useDispatch();
  const [sessionError, setSessionError] = useState(false);
  const [filmError, setFilmError] = useState(false);
  useEffect(() => {
    getSession();
  }, []);
  useEffect(() => {
    getFilm();
  }, []);
  async function getSession() {
    try {
      dispatch(getCinemasForCheckout(id));
    } catch (e) {
      setSessionError(true);
    }
  }
  async function getFilm() {
    try {
      dispatch(getFilmForCheckout(id));
    } catch (e) {
      setFilmError(true);
    }
  }
  return (
    <section className={classes.mainContainer}>
      <Box sx={{
        width: '80%', display: 'flex', justifyContent: 'flex-start', mb: 3,
      }}
      >
        <Typography variant="customTitleH2">Checkout</Typography>
      </Box>
      <Box sx={{
        width: '80%', height: '500px', backgroundColor: 'common.white', boxShadow: '1', borderRadius: '8px',
      }}
      >
        <Box sx={{
          width: '100%', display: 'flex', height: '108px', borderRadius: '8px 8px 0 0', backgroundColor: 'background.darkBlue',
        }}
        >
          {filmsArr
            ? (
              <Box
                component="img"
                src={!filmError ? filmsArr.img : ''}
                alt={!filmError ? `${filmsArr.title} img` : 'Film Img'}
                sx={{ width: '75px', borderRadius: '8px 0 0 0' }}
              />
            )
            : <Skeleton animation="wave" variant="rectangle" width={75} height={108} sx={{ backgroundColor: 'grey.300' }} />}
          <Box sx={{
            display: 'flex', ml: 2, flexDirection: 'column', height: '100%', justifyContent: 'center',
          }}
          >
            {filmsArr
              ? (
                <Typography
                  variant="bodyTitle"
                  sx={{ color: 'common.white', mb: 1 }}
                >
                  {!filmError && filmsArr.title}

                </Typography>
              )
              : <Skeleton width={130} sx={{ backgroundColor: 'grey.400' }} />}
            {sessionData
              ? (
                <Typography
                  variant="caption"
                  sx={{ color: 'common.white' }}
                >
                  {moment(!sessionError && sessionData.date).format('L')}

                </Typography>
              )
              : <Skeleton width={90} sx={{ backgroundColor: 'grey.400' }} />}
            {sessionData
              ? (
                <Typography
                  variant="caption"
                  sx={{ color: 'common.white' }}
                >
                  {!sessionError && sessionData.cinemaId.map((cinema) => `${cinema.title}, ${cinema.city}`)}

                </Typography>
              )
              : <Skeleton width={90} sx={{ backgroundColor: 'grey.400' }} />}
          </Box>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ width: '15%', ml: 4 }}>
            <Box sx={{
              mb: 2, mt: 4, display: 'flex', justifyContent: 'center',
            }}
            >
              <Typography variant="cardTitle">Food</Typography>
            </Box>
            <Box sx={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'auto', gap: '16px', placeItems: 'center',
            }}
            >
              {sessionData && sessionData.food.map((card) => (
                <FoodCard img={card.img} title={card.title} price={card.price} />
              ))}
            </Box>
          </Box>
          <Box sx={{
            width: '60%', ml: 3,
          }}
          >
            <Box sx={{
              mb: 2, mt: 4, display: 'flex', justifyContent: 'center',
            }}
            >
              <Typography variant="cardTitle">Hall plan</Typography>
            </Box>
            <Box sx={{
              borderColor: 'grey.800', borderWidth: '0 1px 0 1px', borderStyle: 'solid', my: 3, width: '100%',
            }}
            >
              <Box sx={{ height: '100%', width: '100%' }} />
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};
