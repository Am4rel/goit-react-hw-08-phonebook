import { createAction } from '@reduxjs/toolkit';

export const APIRequest = createAction("contacts/API_REQUEST");

export const fetchAPISuccess = createAction("contacts/API_FETCH_SUCCESS");
export const fetchAPIFailure = createAction("contacts/API_FETCH_FAILURE");

export const addAPISuccess = createAction("contacts/ADD_NUM_SUCCESS");
export const addAPIFailure = createAction("contacts/ADD_NUM_FAILURE");

export const deleteAPISuccess = createAction("contacts/DELETE_NUM_SUCCESS");
export const deleteAPIFailure = createAction("contacts/DELETE_NUM_FAILURE");

export const filter = createAction("contacts/FILTER");


