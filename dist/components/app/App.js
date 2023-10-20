import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
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
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading, selectContacts, selectDeleteId, selectShowModal, } from 'redux/selectors';
export const App = () => {
    const dispatch = useAppDispatch();
    const contacts = useAppSelector(selectContacts);
    const isLoading = useAppSelector(selectIsLoading);
    const error = useAppSelector(selectError);
    const showModal = useAppSelector(selectShowModal);
    const deleteId = useAppSelector(selectDeleteId);
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    return (_jsxs(Layout, { children: [_jsxs(Phonebook, { children: [_jsx(MainTitle, { children: "Phonebook" }), _jsx(ContactForm, {}), _jsx(Filter, {}), !isLoading && _jsx(SecondTitle, { children: "Contacts" }), isLoading && !error && _jsx(SecondTitle, { children: "Loading..." }), contacts && (contacts === null || contacts === void 0 ? void 0 : contacts.length) < 1 ? (_jsx(Notification, { message: 'Phonebook is empty!' })) : (_jsx(ContactList, {})), _jsx(GlobalStyle, {})] }), showModal ? (_jsx(Modal, { children: _jsx(DeleteContact, { id: deleteId }) })) : (_jsx(_Fragment, {}))] }));
};
//# sourceMappingURL=App.js.map