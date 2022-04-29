import React, { useCallback, useEffect, useState } from 'react';
import {
  Autocomplete, TextField, Button, Avatar, Typography,
} from '@mui/material';
import debounce from 'lodash.debounce';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useQueryParams, withDefault, StringParam } from 'use-query-params';
import { authUser } from 'redux/actions/user';
import { getFilmsForSearch } from 'redux/actions/films';
import { useStyles } from './baseStyle';
import { SearchItem } from './components/searchItem/searchItem';

export const BasePage = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.usersReducer.users);
  const filmSearchData = useSelector((state) => state.filmsReducer.films.filmSearch);
  const [isUser, setIsUser] = useState(false);
  const [filmName, setFilmName] = useQueryParams({ search: withDefault(StringParam, '') });
  const [errorFilm, setErrorFilm] = useState(false);
  useEffect(() => {
    getUserData();
  }, []);
  useEffect(() => () => {
    debouncedChangeHandler.cancel();
  }, []);
  useEffect(() => {
    getSearchFilms();
  }, [filmName]);
  async function getUserData() {
    try {
      setIsUser(true);
      await dispatch(authUser());
    } catch (e) {
      setIsUser(false);
    }
  }
  async function getSearchFilms() {
    try {
      setErrorFilm(false);
      const { search } = filmName;
      await dispatch(getFilmsForSearch(search));
    } catch (e) {
      setErrorFilm(true);
    }
  }
  const handleChange = (event) => {
    if (event?.target?.value) {
      setFilmName({ search: event.target.value.trim() });
    }
  };
  const debouncedChangeHandler = useCallback(
    debounce(handleChange, 300),
    [filmName],
  );
  const handleClick = (id) => {
    if (id) {
      navigate(`/filmDescription/${id}`);
    }
  };
  return (
    <div className={classes.mainContainer}>
      <header className={classes.appBar}>
        <div className={classes.searchContainer}>
          <span className={classes.searchTitle} onClick={() => navigate('/')}>CinemaBuy</span>
          <Autocomplete
            className={classes.searchInput}
            freeSolo
            value={filmName.search}
            loading={!!filmSearchData}
            loadingText={errorFilm ? 'Nothing found for your request' : 'Loading...'}
            onInputChange={debouncedChangeHandler}
            options={filmSearchData}
            getOptionLabel={(option) => {
              if (typeof option === 'string') {
                return option;
              }
              if (option.inputValue) {
                return option.inputValue;
              }
              return option.title;
            }}
            renderOption={(props, option) => (
              <SearchItem
                {...props}
                option={option}
                key={option.id}
                handleClick={() => handleClick(option.id)}
              />
            )}
            renderInput={(params) => <TextField {...params} placeholder="Search..." />}
          />
        </div>
        {isUser ? (
          <div className={classes.butContainer}>
            <Typography sx={{ mr: 3 }} color="common.white" variant="body2">{userData.username}</Typography>
            <Avatar src="/broken-image.jpg" />
          </div>
        ) : (
          <div className={classes.butContainer}>
            <Button className={classes.logButton} variant="text" onClick={() => navigate('/login')}>Log In</Button>
            <Button className={classes.signButton} variant="contained" onClick={() => navigate('/registration')}>Sign Up</Button>
          </div>
        )}
      </header>
      <Outlet />
      <footer className={classes.footerContainer}>
        <p className={classes.footerTitle}>CinemaBuy</p>
      </footer>
    </div>
  );
};
