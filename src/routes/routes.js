import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { LoginPage } from 'pages/login/LoginPage';
import { MainPage } from 'pages/main/MainPage';
import RegistrationPage from 'pages/registration/RegistrationPage';
import { BasePage } from 'pages/basic/BasePage';
import { FilmDescription } from 'pages/filmDescription/FilmDescription';
import { CheckoutPage } from 'pages/checkoutPage/CheckoutPage';
import { OrderPage } from 'pages/orderPage/OrderPage';

export const Routing = () => (
  <Routes>
    <Route path="/registration" element={<RegistrationPage />} exact />
    <Route path="/login" element={<LoginPage />} exact />
    <Route path="/" element={<BasePage />}>
      <Route path="/" element={<MainPage />} exact />
      <Route path="/filmDescription/:id" element={<FilmDescription />} exact />
      <Route path="/checkout/:id/:time" element={<CheckoutPage />} exact />
      <Route path="/my/:id" element={<OrderPage />} exact />
    </Route>
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);
