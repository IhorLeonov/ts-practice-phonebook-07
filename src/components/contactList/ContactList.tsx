import { ContactItem } from 'components/contactItem/ContactItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectFiltredContacts } from 'redux/selectors';
import { FC } from 'react';
import { Contact } from 'constants/types';

export const ContactList: FC = () => {
  const filtredContacts = useSelector(selectFiltredContacts) as Contact[];

  return (
    <List>
      {filtredContacts.map(({ id, name, phone }) => (
        <ContactItem key={id} id={id} name={name} phone={phone} />
      ))}
    </List>
  );
};
