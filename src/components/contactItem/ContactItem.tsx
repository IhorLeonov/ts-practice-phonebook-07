import { ButtonDelete, Item } from './ContactItem.styled';
import { toggleModal } from 'redux/contactsSlice';
import { useAppDispatch } from 'redux/store';
import { Contact } from 'constants/types';
import { FC } from 'react';

export const ContactItem: FC<Contact> = ({ id, name, phone }) => {
  const dispatch = useAppDispatch();
  const handleToggleModal = () => dispatch(toggleModal(id));

  return (
    <Item>
      {name}: {phone}
      <ButtonDelete type="button" onClick={handleToggleModal}>
        Delete
      </ButtonDelete>
    </Item>
  );
};
