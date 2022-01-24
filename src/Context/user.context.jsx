import * as React from 'react';

const INITIAL_STATE = {
	firstname: "",
	lastname: "",
	email: "",
	password: "",
	confirmPassword: "",
	showPassword: false
}

const UserActionTypes = {
  SET_FIRSTNAME: 'SET_FIRSTNAME',
  SET_LASTNAME: 'SET_LASTNAME',
  SET_EMAIL: 'SET_EMAIL',
  SET_PASSWORD: 'SET_PASSWORD',
  SET_SHOW_PASSWORD: 'SET_SHOW_PASSWORD'
}

export const SET_FIRSTNAME = (string) => {
  
}