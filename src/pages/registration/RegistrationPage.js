import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button, TextField, Alert, Snackbar,
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import api from '../../services/api.servises';
import CinemaSecondImg from '../../assets/img/chuttersnap-TgQHWBDA3mM-unsplash_edited.png';
import useStyles from './registrationStyle';
import { registerUser } from '../../redux/actions/user';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .matches(
      /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}/g,
      'Must contain 8 characters, one number, one Uppercase',
    )
    .required('Password is required'),
  passwordConfirm: yup
    .string('Confirm your password')
    .oneOf([yup.ref('password')], 'Password does not match'),
  username: yup
    .string('Enter your username')
    .required('username is required'),
});

export default function RegistrationPage() {
  const classes = useStyles();
  const [isNotReg, setIsNotReg] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const createUser = async (data) => {
    try {
      const { username, email, password } = data;
      const responce = await api.post('/register', { username, email, password });
      if (responce.data) {
        const { token } = responce.data;
        dispatch(registerUser(token));
        Cookies.set('token', token);
        navigate('/');
      }
    } catch (e) {
      setIsNotReg(true);
    }
  };
  const handleClose = () => {
    setIsNotReg(false);
  };
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      username: '',
      passwordConfirm: '',
    },
    validationSchema,
    onSubmit: (values) => {
      createUser(values);
    },
  });

  return (
    <div className={classes.main}>
      <Snackbar open={isNotReg} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Alert variant="filled" onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Invalid e-mail address or password
        </Alert>
      </Snackbar>
      <div className={classes.container}>
        <div className={classes.containerContent}>
          <div className={classes.containerContentForm}>
            <div className={classes.titleContainer}>
              <h1 className={classes.formTitle}>Registration</h1>
            </div>
            <form className={classes.registerForm} onSubmit={formik.handleSubmit}>
              <TextField
                id="standard-basic"
                label="Username"
                variant="standard"
                className={classes.formInput}
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                error={formik.touched.username && Boolean(formik.errors.username)}
                helperText={formik.touched.username && formik.errors.username}
              />
              <TextField
                id="standard-basic"
                label="Email"
                variant="standard"
                className={classes.formInput}
                name="email"
                type="text"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                id="standard-basic"
                label="Password"
                type="password"
                variant="standard"
                className={classes.formInput}
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
              <TextField
                id="standard-basic"
                label="Repeat password"
                type="password"
                variant="standard"
                className={classes.formInput}
                name="passwordConfirm"
                value={formik.values.passwordConfirm}
                onChange={formik.handleChange}
                error={formik.touched.passwordConfirm && Boolean(formik.errors.passwordConfirm)}
                helperText={formik.touched.passwordConfirm && formik.errors.passwordConfirm}
              />
              <Button variant="contained" style={{ backgroundColor: '#3F3DC9', marginTop: '10%' }} className={classes.formButtom} type="submit">Sign Up</Button>
            </form>
            <div className={classes.signUpContainer}>
              <span>Already have an account?</span>
              <a className={classes.signUpBut} href="/login">Log in</a>
            </div>
          </div>
        </div>
        <div className={classes.containerBackGroundImg}>
          <img src={CinemaSecondImg} alt="img is not availible" className={classes.cinemaSecondImg} />
        </div>
      </div>
    </div>
  );
}
