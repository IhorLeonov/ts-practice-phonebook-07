import { GlobalStyle } from 'constants/GlobalStyle';
import { Layout } from 'components/layout/Layout';
import { ContactForm } from 'components/contactForm/ContactForm';
import { ContactList } from 'components/contactList/ContactList';
import { Filter } from 'components/filter/Filter';
import { MainTitle, Phonebook, SecondTitle } from 'components/app/App.styled';
import { Notification } from 'components/notification/Notification';
import { Modal } from 'components/modal/Modal';
import { DeleteContact } from 'components/deleteContact/DeleteContact';
import { useAppDispatch, useAppSelector } from 'redux/store';
import { FC, useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

import {
  selectError,
  selectIsLoading,
  selectContacts,
  selectDeleteId,
  selectShowModal,
} from 'redux/selectors';

export const App: FC = () => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(selectContacts);
  const isLoading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectError);
  const showModal = useAppSelector(selectShowModal);
  const deleteId = useAppSelector(selectDeleteId);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <Phonebook>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm />
        <Filter />
        {!isLoading && <SecondTitle>Contacts</SecondTitle>}
        {isLoading && !error && <SecondTitle>Loading...</SecondTitle>}
        {contacts && contacts?.length < 1 ? (
          <Notification message={'Phonebook is empty!'} />
        ) : (
          <ContactList />
        )}
        <GlobalStyle />
      </Phonebook>
      {showModal ? (
        <Modal>
          <DeleteContact id={deleteId} />
        </Modal>
      ) : (
        <></>
      )}
    </Layout>
  );
};
