import React, { useEffect, useState } from 'react';
import {
  Autocomplete, TextField, Button, Avatar, Typography,
} from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authUser } from 'redux/actions/user';
import { useStyles } from './baseStyle';

export const BasePage = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.usersReducer.users);
  const [isUser, setIsUser] = useState(false);
  useEffect(() => {
    getUserData();
  }, []);
  const getUserData = async () => {
    try {
      setIsUser(true);
      await dispatch(authUser());
    } catch (e) {
      setIsUser(false);
    }
  };
  return (
    <div className={classes.mainContainer}>
      <header className={classes.appBar}>
        <div className={classes.searchContainer}>
          <span className={classes.searchTitle}>CinemaBuy</span>
          <Autocomplete
            className={classes.searchInput}
            freeSolo
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
