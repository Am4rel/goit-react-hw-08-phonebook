import * as actions from './auth-actions';
import axios from 'axios';

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
    set(token) {
        return axios.defaults.headers.common['Authorization'] = token;
    },
    unset() {
        return axios.defaults.headers.common['Authorization'] = "";
    }
}

const login = creds => async dispatch => {
    dispatch(actions.authRequest());

    try {
        const response = await axios.post("/users/login", creds);
        dispatch(actions.loginSuccess(response.data));
        token.set(response.data.token)
    } catch (error) {
        dispatch(actions.loginFailure(error.message));
    };
};

const logout = () => async dispatch => {
    dispatch(actions.authRequest());

    try {
        await axios.post("/users/logout");
        dispatch(actions.logOutSuccess());
        token.unset()
    } catch (error) {
        dispatch(actions.logOutFailure(error.message));
    }
};

const register = creds => async dispatch => {
    dispatch(actions.authRequest());

    try {
        const response = await axios.post("/users/signup", creds);
        dispatch(actions.registerSuccess(response.data));
        token.set(response.data.token)
    } catch (error) {
        dispatch(actions.registerFailure(error.message));
    }
};

const getCurrentUser = () => async (dispatch, getState) => {
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

export default {
    login, 
    logout, 
    register, 
    getCurrentUser,
};