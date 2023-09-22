import { LabelStyled, FilterStyled } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from '../../redux/filtersSlice';

export const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <FilterStyled>
      <LabelStyled>
        <h3>Find contacts by name</h3>
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={e => {
            dispatch(filterContact(e.target.value.toLowerCase().trim()));
          }}
        />
      </LabelStyled>
    </FilterStyled>
  );
};
