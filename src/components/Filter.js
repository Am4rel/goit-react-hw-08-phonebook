import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/contacts/contacts-actions';
import * as selectors from '../redux/contacts/contacts-selectors';
import styles from '../styles/Filter.module.css'

function Filter({ onFilter }) {
    return (
        <div className={styles.filterField}>
            <h2>Contacts</h2>
            <label> <p>Find contact by name:</p>
                <input type="text" name="filter" onChange={onFilter}></input>
            </label>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        filter: selectors.getFilter(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFilter: (e) => {
            const value = e.target.value;
            return dispatch(actions.filter(value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);