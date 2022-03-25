import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { LoginPage } from '../pages/login/LoginPage';
import MainPage from '../pages/main/MainPage';
import RegistrationPage from '../pages/registration/RegistrationPage';

export const Routing = () => (
  <Routes>
    <Route path="/registration" element={<RegistrationPage />} exact />
    <Route path="/login" element={<LoginPage />} exact />
    <Route path="/" element={<MainPage />} exact />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);
