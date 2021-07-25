import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as actions from './contacts-actions';

const items = createReducer([], {
    [actions.fetchAPISuccess]: (_, { payload }) => payload,
    [actions.addAPISuccess]: (state, { payload }) => [...state, payload],
    [actions.deleteAPISuccess]: (state, { payload }) => {
        const id = payload.split("/")[2];
        // console.log(state.filter(item => item.id.toString() !== id.toString()))
        return state.filter(item => item.id.toString() !== id.toString())
    },
    
})

const isLoading = createReducer(false, {
    [actions.APIRequest]: () => true,
    [actions.addAPISuccess]: () => false,
    [actions.addAPIFailure]: () => false,
    [actions.deleteAPISuccess]: () => false,
    [actions.deleteAPIFailure]: () => false,
    [actions.fetchAPISuccess]: () => false,
    [actions.fetchAPIFailure]: () => false,
});

const error = createReducer("", {
    [actions.fetchAPIFailure]: (_, {payload}) => payload,
    [actions.addAPIFailure]: (_, {payload}) => payload,
    [actions.deleteAPIFailure]: (_, {payload}) => payload,
})

const filter = createReducer("", {
    [actions.filter]: (_, { payload }) => payload
})

export const contactReducer = combineReducers({
    items,
    filter,
    isLoading,
    error,
})