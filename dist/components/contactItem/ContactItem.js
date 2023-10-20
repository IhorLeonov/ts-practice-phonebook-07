import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ButtonDelete, Item } from './ContactItem.styled';
import { toggleModal } from 'redux/contactsSlice';
import { useAppDispatch } from 'redux/store';
export const ContactItem = ({ id, name, phone }) => {
    const dispatch = useAppDispatch();
    const handleToggleModal = () => dispatch(toggleModal(id));
    return (_jsxs(Item, { children: [name, ": ", phone, _jsx(ButtonDelete, { type: "button", onClick: handleToggleModal, children: "Delete" })] }));
};
//# sourceMappingURL=ContactItem.js.map