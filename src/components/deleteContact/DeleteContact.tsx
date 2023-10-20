import { deleteContact } from 'redux/operations';
import { toggleModal } from 'redux/contactsSlice';
import { Wrapper, Text, ButtonOk, ButtonNo } from './DeleteContact.styled';
import { Contact } from 'constants/types';
import { useAppDispatch } from 'redux/store';

export const DeleteContact = ({ id }: Pick<Contact, 'id'>) => {
  const dispatch = useAppDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
    dispatch(toggleModal(id));
  };
  const handleCloseModal = () => dispatch(toggleModal(id));

  return (
    <Wrapper>
      <Text>A you sure?</Text>
      <ButtonOk type="button" onClick={handleDeleteContact}>
        Ok
      </ButtonOk>
      <ButtonNo type="button" onClick={handleCloseModal}>
        No
      </ButtonNo>
    </Wrapper>
  );
};
