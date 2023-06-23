import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { Report } from 'notiflix/build/notiflix-report-aio';


import { nanoid } from 'nanoid';
import { AddBtn, Form, Input, FormName, } from './ContactForm.styled';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'services/fetchApi';
import { getContacts } from 'redux/Selectors';

export const ContactForm = () => {
  const [user, setUser] = useState({ name: '', number: '' });

  const contactUser = useSelector(getContacts);
  const dispatch = useDispatch();
  // console.log(contactUser)

  const handleChangeName = e => {
    setUser({ ...user, name: e.currentTarget.value });
  };

  const handleChangeNumber = e => {
    setUser({ ...user, number: e.currentTarget.value });
  };


  const handleFormSubmit = e => {
    e.preventDefault();
    const ContactId = nanoid();

    const contact = {
      name: user.name,
      id: ContactId,
      number: user.number,
    };

    if (contactUser.find(item => item.name.toLowerCase() === user.name.toLowerCase())) {
      Report.failure(`'${user.name}' is already in contacts.`);
      return;
    } else if (contactUser.find(item => item.number === user.number)) {
      Report.failure(`'${user.number}' is already in contacts.`);
      return;
    }

    dispatch(addContact(contact));
    resetForm();
  };

  const resetForm = () => {
    setUser({ name: '', number: '' });
  };

  return (
    <>
      <Form action="" onSubmit={handleFormSubmit}>
        <label htmlFor="name">
          <FormName>Name</FormName>
          <Input
            type="text"
            name="name"
            pattern="^[A-Za-z\u0080-\uFFFF ']+$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChangeName}
            value={user.name}
          />
        </label>
        <label htmlFor="number">
          <FormName>Number</FormName>
          <Input
            type="tel"
            name="number"
            pattern="^(\+?[0-9.\(\)\-\s]*)$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChangeNumber}
            value={user.number}
          />
        </label>

        <AddBtn type="submit">Add contact</AddBtn>
      </Form>
      </>
  );
}

// ContactForm.propTypes = {
//     add: PropTypes.func.isRequired,
//     contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
//   };