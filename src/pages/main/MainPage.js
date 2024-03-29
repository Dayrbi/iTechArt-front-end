import React, { useState, useEffect } from 'react';
import {
  TextField, Link, Select, Box, Typography, FormControl, MenuItem, CircularProgress,
} from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  useQueryParams, withDefault, StringParam, DateParam,
} from 'use-query-params';
import Slider from 'react-slick';
import { getPopularFilms } from 'redux/actions/films';
import { getCinemasByFilter, getFilterParams } from 'redux/actions/cinemas';
import moment from 'moment-timezone';
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
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 620,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrow: false,
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
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
  const [errorFilter, setErrorFilter] = useState(false);
  const [sliderLoading, setSliderLoading] = useState(false);
  const [cinemaLoading, setCinemaLoading] = useState(false);
  const [filterOptions, setFilterOptions] = useQueryParams({
    theatre: withDefault(StringParam, ''),
    city: withDefault(StringParam, ''),
    date: withDefault(DateParam, null),
  });
  useEffect(() => {
    getFilms();
    getParams();
  }, []);
  useEffect(() => {
    getFilterCinemas();
  }, [filterOptions]);
  const dispatch = useDispatch();
  const filmsArr = useSelector((state) => state.filmsReducer.films.popular);
  const cinemasArr = useSelector((state) => state.cinemasReducer.cinemas.allCinemas);
  const filterParamsArr = useSelector((state) => state.cinemasReducer.cinemas.filterParams);
  const [dateArr] = cinemasArr;
  const cityArr = [...new Set(filterParamsArr.map((item) => item.city))];
  const theatreName = [...new Set(filterParamsArr.map((item) => item.title))];
  const handleChange = async (event) => {
    if (!event.target) {
      setFilterOptions((prevState) => ({ ...prevState, date: event }));
      return;
    }
    const { name, value } = event.target;
    setFilterOptions((prevState) => ({ ...prevState, [name]: value }), 'push');
  };

  async function getFilms() {
    try {
      setSliderLoading(true);
      await dispatch(getPopularFilms());
      setSliderLoading(false);
    } catch (e) {
      setErrorFilm(true);
    }
  }
  async function getFilterCinemas() {
    try {
      const { theatre, city, date } = filterOptions;
      setCinemaLoading(true);
      await dispatch(getCinemasByFilter(theatre, city, date));
      setCinemaLoading(false);
    } catch (e) {
      setErrorCinema(true);
    }
  }
  async function getParams() {
    try {
      await dispatch(getFilterParams());
    } catch (e) {
      setErrorFilter(true);
    }
  }
  const handleFilmClick = (id) => {
    if (id) {
      navigate(`/filmDescription/${id}`);
    }
  };
  const handleSessionClick = (id, time) => {
    if (id) {
      navigate(`/checkout/${id}/${time}`);
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
        <div className={classes.widthContainer}>
          <div className={classes.selectContainer}>
            <div className={classes.filterBox}>
              <h3>City</h3>
              <Select
                className={classes.selectInput}
                value={filterOptions.city}
                name="city"
                onChange={handleChange}
              >
                <MenuItem value=""><em>None</em></MenuItem>
                {!errorFilter && cityArr && cityArr.map((item) => (
                  <MenuItem value={item} key={item}>{item}</MenuItem>
                ))}
              </Select>

            </div>
            <div className={classes.filterBox}>
              <h3>Theatre</h3>
              <FormControl>
                <Select
                  className={classes.selectInput}
                  value={filterOptions.theatre}
                  name="theatre"
                  onChange={handleChange}
                >
                  <MenuItem value=""><em>None</em></MenuItem>
                  {!errorFilter && theatreName && theatreName.map((item) => (
                    <MenuItem value={item} key={item}>{item}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className={classes.filterBox}>
              <h3 className={classes.timePickerTitle}>Date</h3>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  className={classes.selectInput}
                  value={filterOptions.date}
                  onChange={(newValue) => {
                    handleChange(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                  name="date"
                  clearable
                />
              </LocalizationProvider>
            </div>
          </div>
        </div>
      </section>
      <section className={classes.sliderSection}>
        <main className={classes.widthContainer}>
          <h2>Popular</h2>
          {!sliderLoading
            ? (
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
            )
            : (
              <Box className={classes.loaderContainer}>
                <CircularProgress width={60} height={60} />
              </Box>
            )}
        </main>
      </section>
      <section className={classes.cinemaSection}>
        <div className={classes.movieTitleContainer}>
          <h1 className={classes.mainTitle}>Cinemas</h1>
        </div>
        <Box
          sx={{
            width: '65%', borderRadius: '10px', backgroundColor: 'common.white', boxShadow: '1',
          }}
          className={classes.widthContainer}
        >
          { !cinemaLoading
            ? dateArr && dateArr.date.map((date) => (
              <div className={classes.cinemaContainer} key={date}>
                <Box sx={{
                  width: '100%', height: '50px', backgroundColor: 'grey.300', alignItems: 'center', display: 'flex', borderRadius: '10px 10px 0 0',
                }}
                >
                  <Typography variant="body3" sx={{ fontWeight: 'fontWeightMedium', ml: 2 }}>{moment(date).format('dddd, DD MMMM')}</Typography>
                </Box>
                {
                !errorCinema && cinemasArr.map((cinema) => (
                  <CinemaCard
                    handleSessionClick={handleSessionClick}
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
            : (
              <Box className={classes.loaderContainer}>
                <CircularProgress width={60} height={60} color="secondary" />
              </Box>
            )}
        </Box>
      </section>
    </div>
  );
};
