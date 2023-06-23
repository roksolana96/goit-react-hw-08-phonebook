// import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

import { useDispatch } from 'react-redux';
import { getVisibleContact } from 'redux/FilterSlice';

export function Filter() {
  const dispatch = useDispatch();
  return (
    <Label>
      Find contacts by name
      <Input type="text" name="filter" onChange={e => dispatch(getVisibleContact(e.target.value))} />
    </Label>
  );
}
