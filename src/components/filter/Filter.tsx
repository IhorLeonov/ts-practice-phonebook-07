import { ChangeEvent } from 'react';
import { Label, Input } from './Filter.styled';
import { changeFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
import { useAppDispatch, useAppSelector } from 'redux/store';

export const Filter = () => {
  const filterValue = useAppSelector(selectFilter);
  const dispatch = useAppDispatch();
  const handleChangeFilter = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(changeFilter(e.currentTarget.value));

  return (
    <Label>
      Find contacts by name:
      <Input
        type="text"
        value={filterValue}
        onChange={handleChangeFilter}
      ></Input>
    </Label>
  );
};
