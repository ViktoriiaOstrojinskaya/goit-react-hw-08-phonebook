import { FilterInput, FilterLabel, FilterForm } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllContacts, selectFilter } from 'redux/contacts/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const input = useSelector(selectFilter);

  const handleFilter = event => {
    const value = event.target.value.toLowerCase();
    dispatch(selectAllContacts(value));
  };

  return (
    <FilterForm>
      <FilterLabel>
        Find contacts by name
        <FilterInput type="text" value={input} onChange={handleFilter} />
      </FilterLabel>
    </FilterForm>
  );
};
