import {
  Alert,
  Box, Skeleton, Snackbar, Typography,
} from '@mui/material';
import moment from 'moment-timezone';
import React, { useEffect, useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCinemasForCheckout, updateCinemaHall } from 'redux/actions/cinemas';
import { getFilmForCheckout } from 'redux/actions/films';
import { createOrder } from 'redux/actions/orders';
import { useStyles } from './CheckoutPageStyle';
import { CinemaHall } from './components/cinemaHall/cinemaHall';
import { FoodCard } from './components/foodCard/foodCard';
import { InfoByPlace } from './components/infoByPlace/infoByPlace';
import { SelectedCinemaPlace } from './components/selectedcinema/selectedCinemaPlace';

export const CheckoutPage = () => {
  const classes = useStyles();
  const { id, time } = useParams();
  const [sessionData] = useSelector((state) => state.cinemasReducer.cinemas.checkoutCinemas);
  const [filmsArr] = useSelector((state) => state.filmsReducer.films.filmCheckout);
  const userId = useSelector((state) => state.usersReducer.users.id);
  const dispatch = useDispatch();
  const [sessionError, setSessionError] = useState(false);
  const [filmError, setFilmError] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState([]);
  const [selectedFood, setSelectedFood] = useState([]);
  const [userExist, setUserExist] = useState(true);
  const [IsBuyError, setIsBuyError] = useState(true);
  const [foodState, dispatchFood] = useReducer(foodReducer, { food: {} });
  useEffect(() => {
    getSession();
    getFilm();
  }, []);
  useEffect(() => {
    createInitialState();
  }, [sessionData]);
  async function getSession() {
    try {
      dispatch(getCinemasForCheckout(id, time));
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
  async function updateCinema() {
    try {
      const [cinemaHallArr] = sessionData.cinemaHall;
      const { cinemaHall } = cinemaHallArr;
      dispatch(updateCinemaHall(id, cinemaHall, time));
    } catch (e) {
      setIsBuyError(false);
    }
  }
  async function addNewOrder(cinemaName, city) {
    try {
      const { filmId, date } = sessionData;
      const { img, title } = filmsArr;
      const amount = selectedSum();
      dispatch(createOrder(selectedPlace, selectedFood, filmId, amount, time, date, cinemaName, city, img, title, userId));
    } catch (e) {
      setIsBuyError(false);
    }
  }
  function createInitialState() {
    const initialState = sessionData && sessionData.food.reduce((accObj, food) => ({ ...accObj, [food.title]: 0 }), {});
    dispatchFood({ type: 'initial', initialState });
  }
  function foodReducer(foodState, action) {
    switch (action.type) {
      case 'initial':
        return { ...foodState, food: action.initialState };
      case 'increment':
        return { ...foodState, food: { ...foodState.food, [action.title]: foodState.food[action.title] + 1 } };
      case 'decrement':
        return { ...foodState, food: { ...foodState.food, [action.title]: foodState.food[action.title] - 1 } };
      default:
        return foodState;
    }
  }
  const handlePlaceClick = (column, row) => {
    if (selectedPlace.length < 5) {
      const [placeInfo] = sessionData.cinemaHall.map((hall) => hall.cinemaHall[row][column]);
      for (let i = 0; i < sessionData.cinemaHall.length; i++) {
        if (sessionData.cinemaHall[i].cinemaHall[row][column].selected) {
          sessionData.cinemaHall[i].cinemaHall[row][column].selected = false;
          const deleteIndex = selectedPlace.findIndex((place) => place.seat === column && place.row === row + 1);
          const selectedPlaceCopy = [...selectedPlace];
          selectedPlaceCopy.splice(deleteIndex, 1);
          setSelectedPlace(selectedPlaceCopy);
        } else {
          sessionData.cinemaHall[i].cinemaHall[row][column].selected = true;
          placeInfo.seat = column + 1;
          placeInfo.row = row + 1;
          setSelectedPlace([...selectedPlace, placeInfo]);
        }
      }
    }
  };
  const handleAddFood = (title, price) => {
    dispatchFood({ type: 'increment', title });
    const isExist = selectedFood.find((food) => food.title === title);
    if (isExist) {
      const selectedFoodCopy = selectedFood.map((food) => (food.title === title ? { ...food, amount: food.amount + 1 } : food));
      setSelectedFood(selectedFoodCopy);
    } else {
      setSelectedFood([...selectedFood, { title, price, amount: 1 }]);
    }
  };
  const handleRemoveFood = (title) => {
    if (foodState.food[title] !== 0) {
      dispatchFood({ type: 'decrement', title });
      const selectedFoodCopy = selectedFood.map((food) => (food.title === title ? { ...food, amount: food.amount - 1 } : food));
      const selectedFoodRemoveCopy = selectedFoodCopy.filter((food) => food.amount !== 0);
      setSelectedFood(selectedFoodRemoveCopy);
    }
  };
  const selectedSum = () => {
    const placeSum = selectedPlace.reduce((sum, place) => (sum + place.price), 0);
    const foodSum = selectedFood.reduce((sum, food) => (sum + (food.price * food.amount)), 0);
    return placeSum + foodSum;
  };
  const handlePay = () => {
    if (sessionData.cinemaId) {
      const [cinema] = sessionData.cinemaId;
      const [cinemaHall] = sessionData.cinemaHall;
      for (let i = 0; i < selectedPlace.length; i++) {
        const { row, seat } = selectedPlace[i];
        cinemaHall.cinemaHall[row - 1][seat - 1].disable = true;
      }
      const { title, city } = cinema;
      updateCinema();
      addNewOrder(title, city);
      setSelectedFood([]);
      setSelectedPlace([]);
    } else {
      setUserExist(false);
    }
  };
  const userAlertClose = () => {
    setUserExist(true);
  };
  const buyErrorClose = () => {
    setIsBuyError(true);
  };
  return (
    <section className={classes.mainContainer}>
      <Snackbar
        open={!userExist}
        autoHideDuration={3000}
        onClose={userAlertClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert variant="filled" severity="error" onClose={userAlertClose} sx={{ width: '100%', mt: 9 }}>
          Need to login to buy tickets
        </Alert>
      </Snackbar>
      <Snackbar
        open={!IsBuyError}
        autoHideDuration={3000}
        onClose={buyErrorClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert variant="filled" severity="error" onClose={buyErrorClose} sx={{ width: '100%', mt: 9 }}>

          The order has not been placed, please try again
        </Alert>
      </Snackbar>
      <Box
        className={classes.checkoutTitle}
      >
        <Typography variant="customTitleH2">Checkout</Typography>
      </Box>
      <Box
        className={classes.checkoutContainer}
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
                  {moment(time).format('YYYY-MM-DD, HH:mm')}

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
        <Box className={classes.checkoutContent}>
          <Box className={classes.foodContainer}>
            <Box sx={{
              mb: 2, mt: 4, display: 'flex', justifyContent: 'center',
            }}
            >
              <Typography variant="cardTitle">Food</Typography>
            </Box>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gridTemplateRows: 'auto',
                gap: '16px',
                placeItems: 'center',
              }}
            >
              {sessionData && sessionData.food.map((card) => (
                <FoodCard
                  img={card.img}
                  title={card.title}
                  price={card.price}
                  key={card.title}
                  handleAddFood={handleAddFood}
                  handleRemoveFood={handleRemoveFood}
                  foodState={foodState.food}
                />
              ))}
            </Box>
          </Box>
          <Box className={classes.cinemaContainer}>
            <Box sx={{
              mb: 2, mt: 4, display: 'flex', justifyContent: 'center',
            }}
            >
              <Typography variant="cardTitle">Hall plan</Typography>
            </Box>
            <Box sx={{
              borderColor: 'grey.300',
              borderWidth: '0 1px 0 1px',
              borderStyle: 'solid',
              my: 3,
              width: '100%',
              maxWidth: { xs: '100%', md: '750px' },
              overflow: 'scroll',
              overflowX: 'auto',
            }}
            >
              {
              sessionData && sessionData.cinemaHall.map((hall) => (
                hall.cinemaHall.map((columns, rowInd) => (
                  <Box
                    key={rowInd}
                    sx={{
                      display: 'flex', alignItems: 'center', mx: 2,
                    }}
                  >
                    <Typography variant="body3" sx={{ ml: 2, mr: { xs: 3, sm: 0 } }}>{rowInd}</Typography>
                    <CinemaHall columns={columns} rowIndex={rowInd} handlePlaceClick={handlePlaceClick} />
                    <Typography variant="body3" sx={{ mr: 2 }}>{rowInd}</Typography>
                  </Box>
                ))
              ))
            }
              <InfoByPlace />
            </Box>
          </Box>
          <Box className={classes.selectContainer}>
            <Box sx={{
              mb: 2, mt: 4, display: 'flex', justifyContent: 'center',
            }}
            >
              <Typography variant="cardTitle">Selected</Typography>
            </Box>
            <SelectedCinemaPlace places={selectedPlace} food={selectedFood} selectedSum={selectedSum} handlePay={handlePay} />
          </Box>
        </Box>
      </Box>
    </section>
  );
};
