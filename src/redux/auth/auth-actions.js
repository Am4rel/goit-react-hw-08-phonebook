import { createAction } from '@reduxjs/toolkit';

export const authRequest = createAction("auth/AUTH_REQUEST");

export const loginSuccess = createAction("auth/LOGIN_SUCCESS");
export const loginFailure = createAction("auth/LOGIN_FAILURE");

export const logOutSuccess = createAction("auth/LOGOUT_SUCCESS");
export const logOutFailure = createAction("auth/LOGOUT_FAILURE");

export const registerSuccess = createAction("auth/REGISTER_SUCCESS");
export const registerFailure = createAction("auth/REGISTER_FAILURE");

export const getCurrentUserSuccess = createAction("auth/GET_CURRENT_USER_SUCCESS");
export const getCurrentUserFailure = createAction("auth/GET_CURRENT_USER_FAILURE");
