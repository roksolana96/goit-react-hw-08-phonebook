// import PropTypes from 'prop-types';
import { DeleteBtn,ContactName } from './ContactList.styled';

import { useDispatch } from 'react-redux';
import { getFilteredUser, getContacts  } from 'redux/Selectors';
import { deleteContact } from 'services/fetchApi';

import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contactUser = useSelector(getContacts);
  const filteredUser = useSelector(getFilteredUser);
  const dispatch = useDispatch();

  const normalizeFilteredUser = filteredUser.toLowerCase();
  const visibleContact = contactUser.filter(el =>
    el.name.toLowerCase().includes(normalizeFilteredUser)
  );

    return (
        <ul>
          {visibleContact.map(({ id, number, name }) => {
            return (
              <ContactName key={id}>
                <span>
                  {name}: {number}
                </span>
                <DeleteBtn type="button" onClick={() => {dispatch(deleteContact(id))}}>
              Delete
            </DeleteBtn>
              </ContactName>
            );
          })}
        </ul>
  );
};
