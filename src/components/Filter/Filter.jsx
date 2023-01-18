import { FilterInput, FilterLabel, FilterForm } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { setContactsFilter } from 'redux/contacts/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const input = useSelector(selectFilter);

  const handleFilter = event => {
    const value = event.target.value;
    dispatch(setContactsFilter(value));
  };

  return (
    <FilterForm>
      <FilterLabel>
        Find contact by name
        <FilterInput type="text" value={input} onChange={handleFilter} />
      </FilterLabel>
    </FilterForm>
  );
};
