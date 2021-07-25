import * as actions from './auth-actions';
import axios from 'axios';

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
    set(token) {
        return axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        return axios.defaults.headers.common.Authorization = "";
    }
}

export const login = creds => async dispatch => {
    dispatch(actions.authRequest());

    try {
        const response = await axios.post("/users/login", creds);
        token.set(response.data.token)
        dispatch(actions.loginSuccess(response.data));
        
    } catch (error) {
        dispatch(actions.loginFailure(error.message));
    };
};

export const logout = () => async dispatch => {
    dispatch(actions.authRequest());

    try {
        await axios.post("/users/logout");
        token.unset()
        dispatch(actions.logOutSuccess());
        
    } catch (error) {
        dispatch(actions.logOutFailure(error.message));
    }
};

export const register = creds => async dispatch => {
    dispatch(actions.authRequest());

    try {
        const response = await axios.post("/users/signup", creds);
        token.set(response.data.token)
        dispatch(actions.registerSuccess(response.data));
    } catch (error) {
        dispatch(actions.registerFailure(error.message));
    }
};

export const getCurrentUser = () => async (dispatch, getState) => {
    const {auth: {token: persistedToken}} = getState();

    if(!persistedToken){
        return;
    };

    token.set(persistedToken);
    
    dispatch(actions.authRequest());

    try {
        const response = await axios.get("/users/current");
        dispatch(actions.getCurrentUserSuccess(response.data));
    } catch (error) {
        dispatch(actions.getCurrentUserFailure(error.message));
    }
};