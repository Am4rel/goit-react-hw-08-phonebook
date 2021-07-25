import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteNumber, fetchContacts } from '../redux/contacts/contacts-operations';
import * as selectors from '../redux/contacts/contacts-selectors';
import {Loader} from './Loader'
import styles from '../styles/ContactList.module.css'
import buttonStyles from '../styles/button.module.css'

class ContactsList extends Component {
    
    componentDidMount() {
        this.props.doFetch();
    }

    render() {
        const { contacts, filter, onContactDelete, isLoading } = this.props;
        const contactList = filter !== "" ?
        contacts.filter(contact => { return contact.name.toString().toLowerCase().includes(filter.toString().toLowerCase()) }) :
        contacts;

        return (
        <>
                {isLoading === true && <Loader />}
            <ul className={styles.list}>
                {contactList?.map(contact =>
                    <li id={contact.id} key={contact.id} className={styles.listItem}>
                        <p><b>Name: </b>{contact.name}</p>
                        <p><b>Number: </b>{contact.number}</p>
                        <button type="button" onClick={onContactDelete} className={buttonStyles.button}>Delete</button>
                    </li>)
                }
            </ul >
        </>
    )
    }
};

const mapStateToProps = state => {
    return {
        contacts: selectors.getContacts(state),
        filter: selectors.getFilter(state),
        isLoading: selectors.getLoadingState(state)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onContactDelete: (e) => {
            const id = e.target.parentElement.id;
            return dispatch(deleteNumber(id));
        },
        doFetch: () => (dispatch(fetchContacts()))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);