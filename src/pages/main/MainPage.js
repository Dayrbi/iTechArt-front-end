import React, { useState, useEffect } from 'react';
import {
  TextField, Link, Select, Box,
} from '@mui/material';
import { LocalizationProvider, DesktopDateTimePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import { getPopularFilms } from 'redux/actions/films';
import { getAllCinemas } from 'redux/actions/cinemas';
import moment from 'moment';
import { FilmCard } from './components/filmsCard/filmCard';
import { CinemaCard } from './components/cinemaCard/cinemaCard';
import { CustomArrowRight, CustomArrowLeft } from './components/customArrow/customArrow';
import { useStyles } from './mainStyle';
import './sliderStyle.css';

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 3,
  nextArrow: <CustomArrowRight />,
  prevArrow: <CustomArrowLeft />,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1750,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 2,
        dots: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
      },
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrow: false,
        centerMode: true,
      },
    },
  ],
};

export const MainPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [errorFilm, setErrorFilm] = useState(false);
  const [errorCinema, setErrorCinema] = useState(false);
  const [filterOptions, setFilterOptions] = useState({
    theatre: '',
    city: '',
    seats: '',
    date: new Date('2018-01-01T00:00:00.000Z'),
  });
  useEffect(() => {
    getFilms();
  }, []);
  useEffect(() => {
    getCinemas();
  }, []);
  const dispatch = useDispatch();
  const filmsArr = useSelector((state) => state.filmsReducer.films.popular);
  const cinemasArr = useSelector((state) => state.cinemasReducer.cinemas.allCinemas);
  const [dateArr] = cinemasArr;
  const handleChange = (event) => {
    if (!event.target) {
      setFilterOptions((prevState) => ({ ...prevState, date: event }));
      return;
    }
    const { name, value } = event.target;
    setFilterOptions((prevState) => ({ ...prevState, [name]: value }));
  };
  async function getFilms() {
    try {
      await dispatch(getPopularFilms());
    } catch (e) {
      setErrorFilm(true);
    }
  }
  async function getCinemas() {
    try {
      await dispatch(getAllCinemas());
    } catch (e) {
      setErrorCinema(true);
    }
  }
  const handleFilmClick = (id) => {
    if (id) {
      navigate(`/filmDescription/${id}`);
    }
  };
  return (
    <div className={classes.mainContainer}>
      <section className={classes.navSection}>
        <div className={classes.movieTitleContainer}>
          <h1 className={classes.mainTitle}>Movies</h1>
        </div>
        <nav className={classes.navBar}>
          <Link
            className={classes.LinkButton}
            component="button"
            variant="body2"
            href="/"
          >
            All Films
          </Link>
          <Link
            className={classes.LinkButton}
            component="button"
            variant="body2"
            href="/"
          >
            Popular
          </Link>
          <Link
            className={classes.LinkButton}
            component="button"
            variant="body2"
            href="/"
          >
            horror
          </Link>
          <Link
            className={classes.LinkButton}
            component="button"
            variant="body2"
            href="/"
          >
            fantasy
          </Link>
        </nav>
        <div style={{ width: '65%' }}>
          <div className={classes.selectContainer}>
            <div className={classes.filterBox}>
              <h3>City</h3>
              <Select
                className={classes.selectInput}
                value={filterOptions.city}
                name="city"
                onChange={handleChange}
              />
            </div>
            <div className={classes.filterBox}>
              <h3>Theatre</h3>
              <Select
                className={classes.selectInput}
                value={filterOptions.theatre}
                name="theatre"
                onChange={handleChange}
              />
            </div>
            <div className={classes.filterBox}>
              <h3>Seats</h3>
              <Select
                className={classes.selectInput}
                value={filterOptions.seats}
                name="seats"
                onChange={handleChange}
                fullWidth
              />
            </div>
            <div className={classes.filterBox}>
              <h3>Date and time</h3>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDateTimePicker
                  className={classes.selectInput}
                  value={filterOptions.date}
                  onChange={(newValue) => {
                    handleChange(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                  name="date"
                />
              </LocalizationProvider>
            </div>
          </div>
        </div>
      </section>
      <section className={classes.sliderSection}>
        <main style={{ width: '65%' }}>
          <h2>Popular</h2>
          <Slider {...settings}>
            {
              !errorFilm && filmsArr.map((film) => (
                <FilmCard
                  handleFilmClick={handleFilmClick}
                  img={film.img}
                  id={film.id}
                  title={film.title}
                  key={film.id}
                />
              ))
            }
          </Slider>
        </main>
      </section>
      <section className={classes.cinemaSection}>
        <div className={classes.movieTitleContainer}>
          <h1 className={classes.mainTitle}>Cinemas</h1>
        </div>
        {
          dateArr && dateArr.date.map((date) => (
            <div className={classes.cinemaContainer} key={date}>
              <Box sx={{ width: '100%', bacgroundColor: 'grey.main' }}>{moment(date).format('dddd, MMMM')}</Box>
              {
              !errorCinema && cinemasArr.map((cinema) => (
                <CinemaCard
                  handleFilmClick={handleFilmClick}
                  title={cinema.title}
                  address={cinema.address}
                  sessions={cinema.sessions}
                  key={cinema.title}
                  date={date}
                />
              ))
            }
            </div>
          ))
        }
      </section>
    </div>
  );
};
