import * as actions from './contacts-actions';
import axios from 'axios';

export const addNumber = (name, number) => dispatch => {
    const contact = {
        name,
        number
    }
    dispatch(actions.APIRequest());

    axios.post("/contacts", contact)
        .then(({ data }) => dispatch(actions.addAPISuccess(data)))
        .catch(error => dispatch(actions.addAPIFailure(error.message)));
};

export const deleteNumber = id => dispatch => {
    dispatch(actions.APIRequest());

    axios.delete(`/contacts/${id}`)
        .then(id => dispatch(actions.deleteAPISuccess(id.config.url)))
        .catch(error => dispatch(actions.deleteAPIFailure(error.message)));
};

export const fetchContacts = () => dispatch => {
    dispatch(actions.APIRequest());

    axios.get("/contacts")
        .then(({ data }) => dispatch(actions.fetchAPISuccess(data)))
        .catch(error => dispatch(actions.fetchAPIFailure(error.message)));
};