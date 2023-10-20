import { jsx as _jsx } from "react/jsx-runtime";
import { ContactItem } from 'components/contactItem/ContactItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectFiltredContacts } from 'redux/selectors';
export const ContactList = () => {
    const filtredContacts = useSelector(selectFiltredContacts);
    return (_jsx(List, { children: filtredContacts.map(({ id, name, phone }) => (_jsx(ContactItem, { id: id, name: name, phone: phone }, id))) }));
};
//# sourceMappingURL=ContactList.js.map