import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as actions from './auth-actions';

const initialState = {name: null, email: null}

const user = createReducer(initialState, {
    [actions.getCurrentUserSuccess]: (_, {payload}) => payload,
    [actions.loginSuccess]: (_, {payload}) => payload.user,
    [actions.registerSuccess]: (_, {payload}) => payload.user,
    [actions.logOutSuccess]: () => initialState,
})

const token = createReducer("", {
    [actions.registerSuccess]: (_, {payload}) => payload.token,
    [actions.loginSuccess]: (_, {payload}) => payload.token,
    [actions.logOutSuccess]: () => "",
});

const error = createReducer("", {
    [actions.getCurrentUserFailure]: (_, {payload}) => payload,
    [actions.logOutFailure]: (_, {payload}) => payload,
    [actions.registerFailure]: (_, {payload}) => payload,
    [actions.loginFailure]: (_, {payload}) => payload,
})

const isAuthenticated = createReducer(false, {
    [actions.getCurrentUserSuccess]: () => true,
    [actions.loginSuccess]: () => true,
    [actions.registerSuccess]: () => true,
    [actions.logOutSuccess]: () => false,
})

export const authReducer = combineReducers({
    user,
    isAuthenticated,
    token,
    error,
})