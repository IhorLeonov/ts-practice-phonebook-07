import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { deleteContact } from 'redux/operations';
// import { useDispatch } from 'react-redux';
import { toggleModal } from 'redux/contactsSlice';
import { Wrapper, Text, ButtonOk, ButtonNo } from './DeleteContact.styled';
import { useAppDispatch } from 'redux/store';
export const DeleteContact = ({ id }) => {
    const dispatch = useAppDispatch();
    const handleDeleteContact = () => {
        dispatch(deleteContact(id));
        dispatch(toggleModal(id));
    };
    const handleCloseModal = () => dispatch(toggleModal(id));
    return (_jsxs(Wrapper, { children: [_jsx(Text, { children: "A you sure?" }), _jsx(ButtonOk, { type: "button", onClick: handleDeleteContact, children: "Ok" }), _jsx(ButtonNo, { type: "button", onClick: handleCloseModal, children: "No" })] }));
};
//# sourceMappingURL=DeleteContact.js.map