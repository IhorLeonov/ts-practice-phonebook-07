import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import toast, { Toaster } from 'react-hot-toast';
import { Formik } from 'formik';
import { ContactSchema } from 'constants/contactSchema';
import { useAppDispatch, useAppSelector } from 'redux/store';
import { Form, Field, FormLabel, ErrorMessage, ButtonSubmit, } from './ContactForm.styled';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
const notifyError = (message) => toast.error(message);
export const ContactForm = () => {
    const dispatch = useAppDispatch();
    const contacts = useAppSelector(selectContacts);
    const handleAddContact = (name, number) => {
        dispatch(addContact({
            name,
            phone: number,
        }));
    };
    const handlSubmit = (values, actions) => {
        const { name, number } = values;
        const { resetForm } = actions;
        const condition = contacts
            ? contacts.some(current => current.name.toLowerCase() === name.toLowerCase())
            : null;
        if (condition)
            return notifyError(`${name} is already in contacts.`);
        handleAddContact(name, number);
        resetForm();
    };
    return (_jsx(Formik, { initialValues: { name: '', number: '' }, validationSchema: ContactSchema, onSubmit: handlSubmit, children: _jsxs(Form, { children: [_jsxs(FormLabel, { children: ["Name:", _jsx(Field, { type: "text", name: "name", title: "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" }), _jsx(ErrorMessage, { name: "name", component: "span" })] }), _jsxs(FormLabel, { children: ["Number:", _jsx(Field, { type: "tel", name: "number", title: "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +" }), _jsx(ErrorMessage, { name: "number", component: "span" })] }), _jsx(ButtonSubmit, { type: "submit", children: "Add contact" }), _jsx(Toaster, { position: "top-left", toastOptions: { duration: 3000 } })] }) }));
};
//# sourceMappingURL=ContactForm.js.map