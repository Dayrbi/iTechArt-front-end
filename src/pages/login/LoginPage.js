import React, { useState } from 'react';
import {
  TextField, Alert, Snackbar,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/actions/user';
import CinemaImg from 'assets/img/Cinema2.png';
import { useStyles } from './loginStyles';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of min 8 characters ')
    .required('Password is required'),
});

export const LoginPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isError, setIsError] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const authUser = async (formValue) => {
    try {
      const { email, password } = formValue;
      setLoginLoading(true);
      await dispatch(loginUser(email, password));
      setLoginLoading(false);
      navigate('/');
    } catch (e) {
      setIsError(true);
      setLoginLoading(false);
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
              <LoadingButton
                variant="contained"
                sx={{ backgroundColor: 'button.purple', mt: '10%' }}
                className={classes.formButtom}
                type="submit"
                loading={loginLoading}
              >
                Log In
              </LoadingButton>
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
