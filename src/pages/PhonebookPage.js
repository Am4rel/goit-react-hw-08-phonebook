import React from 'react';
import Form from '../components/Form'
import Filter from '../components/Filter'
import ContactsList from '../components/ContactsList';

import stylesDiv from '../styles/boxStyle.module.css'

const PhonebookPage = () => (
      <>
        <h2 className={stylesDiv.title}>My phonebook</h2>
        <Form />
        <div className={stylesDiv.divBox}>
          <Filter />
          <ContactsList />
        </div>
      </>
    )


export default PhonebookPage;