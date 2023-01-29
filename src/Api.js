import React from 'react';
import axios from 'axios';
axios.defaults.baseURL = 'https://identitytoolkit.googleapis.com/v1';
const API_KEY = 'AIzaSyCtX9FnhmiM2HRM2UKuUq-9V16EO0lkevA';
const REGISTER_URL = `/accounts:signUp?key=${API_KEY}`;
const RegisterApi = (inputs) => {
  let data = {
    displayName: inputs.name,
    email: inputs.email,
    password: inputs.password,
  };
  return axios.post(REGISTER_URL, data);
};
export default RegisterApi;
