import React, { useState, useEffect } from 'react';
import {
  Autocomplete, TextField, Button, Link,
  Select,
} from '@mui/material';
import { LocalizationProvider, DesktopDateTimePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { useDispatch, useSelector } from 'react-redux';
import { func, element } from 'prop-types';
import Slider from 'react-slick';
import { getPopularFilm } from 'redux/actions/films';
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
        centerMode: true,
      },
    },
  ],
};

export const MainPage = () => {
  const classes = useStyles();
  const [errorFilm, setErrorFilm] = useState(false);
  const [filterOptions, setFilterOptions] = useState({
    theatre: '',
    city: '',
    seats: '',
    date: new Date('2018-01-01T00:00:00.000Z'),
  });
  useEffect(() => {
    getFilms();
  }, []);
  const dispatch = useDispatch();
  const filmsArr = useSelector((state) => state.filmsReducer.films.popular);
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
      await dispatch(getPopularFilm());
    } catch (e) {
      setErrorFilm(true);
    }
  }
  return (
    <div className={classes.mainContainer}>
      <header className={classes.appBar}>
        <div className={classes.searchContainer}>
          <span className={classes.searchTitle}>CinemaBuy</span>
          <Autocomplete
            className={classes.searchInput}
            freeSolo
            options={filmsArr.map((options) => options.title)}
            renderInput={(params) => <TextField {...params} placeholder="Search..." />}
          />
        </div>
        <div className={classes.butContainer}>
          <Button className={classes.logBut} variant="text">Log In</Button>
          <Button className={classes.signBut} variant="contained">Sign Up</Button>
        </div>
      </header>
      <section className={classes.navSection}>
        <div className={classes.movieTitleContainer}>
          <h1 className={classes.mainTitle}>Movies</h1>
        </div>
        <nav className={classes.navBAr}>
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
                className={classes.SelectInput}
                value={filterOptions.city}
                name="city"
                onChange={handleChange}
              />
            </div>
            <div className={classes.filterBox}>
              <h3>Theatre</h3>
              <Select
                className={classes.SelectInput}
                value={filterOptions.theatre}
                name="theatre"
                onChange={handleChange}
              />
            </div>
            <div className={classes.filterBox}>
              <h3>Seats</h3>
              <Select
                className={classes.SelectInput}
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
                  className={classes.SelectInput}
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
                <FilmCard img={film.img} id={film.id} title={film.title} key={film.id} />
              ))
            }
          </Slider>
        </main>
      </section>
      <section className={classes.cinemaSection}>
        <div className={classes.movieTitleContainer}>
          <h1 className={classes.mainTitle}>Cinemas</h1>
        </div>
        <div className={classes.cinemaContainer}>
          <CinemaCard title="Belarus" address="Adress,street" />
          <CinemaCard title="Belarus" address="Adress,street" />
          <CinemaCard title="Belarus" address="Adress,street" />
        </div>
      </section>
      <footer className={classes.footerContainer}>
        <p className={classes.footerTitle}>CinemaBuy</p>
      </footer>
    </div>
  );
};
MainPage.propTypes = {
  getPopulFilm: func,
  FilmCard: element,
  CustomArrowLeft: func,
  CustomArrowRight: func,
};
