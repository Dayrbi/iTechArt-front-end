/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import {
  Button, TextField, Alert, Snackbar,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { func } from 'prop-types';
import { loginUser } from '../../redux/actions/user';
import { useStyles } from './loginStyles';
import CinemaImg from '../../assets/img/Cinema2.png';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of min 8 characters '),
});

export const LoginPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isError, setIsError] = useState(false);
  const authUser = async (formValue) => {
    try {
      const { email, password } = formValue;
      await dispatch(loginUser(email, password));
      navigate('/');
    } catch (e) {
      setIsError(true);
    }
  };
  const handleClose = () => {
    setIsError(false);
  };
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      authUser(values);
    },
  });
  return (
    <div className={classes.main}>
      <Snackbar open={isError} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Alert variant="filled" onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Invalid e-mail address or password
        </Alert>
      </Snackbar>
      <div className={classes.container}>
        <div className={classes.containerBackGroundImg}>
          <img src={CinemaImg} alt="Cinema img" className={classes.cinemaImg} />
        </div>
        <div className={classes.containerContent}>
          <div className={classes.containerContentForm}>
            <div className={classes.titleContainer}>
              <h1 className={classes.formTitle}>Log In</h1>
            </div>
            <form className={classes.loginForm} onSubmit={formik.handleSubmit}>
              <TextField
                id="standard-basic"
                label="Email"
                name="email"
                variant="standard"
                type="text"
                className={classes.formInput}
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                id="standard-basic"
                label="Password"
                name="password"
                variant="standard"
                type="password"
                className={classes.formInput}
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
              <Button color="error" variant="contained" style={{ backgroundColor: '#3F3DC9', marginTop: '10%' }} className={classes.formButtom} type="submit">Log In</Button>
            </form>
            <div className={classes.signUpContainer}>
              <span>Don’t have an account?</span>
              <a className={classes.signUpBut} href="/registration">Sign Up</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
LoginPage.propTypes = {
  loginUser: func,
};
