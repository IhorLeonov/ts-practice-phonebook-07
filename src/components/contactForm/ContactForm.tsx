import toast, { Toaster } from 'react-hot-toast';
import { Formik, FormikHelpers } from 'formik';
import { ContactSchema } from 'constants/contactSchema';
import { useAppDispatch, useAppSelector } from 'redux/store';
import {
  Form,
  Field,
  FormLabel,
  ErrorMessage,
  ButtonSubmit,
} from './ContactForm.styled';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import { FC } from 'react';
import { FormValue } from 'constants/types';

const notifyError = (message: string) => toast.error(message);

export const ContactForm: FC = () => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(selectContacts);

  const handleAddContact = (name: string, number: string) => {
    dispatch(
      addContact({
        name,
        phone: number,
      })
    );
  };

  const handlSubmit = (
    values: FormValue,
    actions: FormikHelpers<FormValue>
  ): any => {
    const { name, number } = values;
    const { resetForm } = actions;

    const condition = contacts
      ? contacts.some(
          current => current.name.toLowerCase() === name.toLowerCase()
        )
      : null;

    if (condition) return notifyError(`${name} is already in contacts.`);
    handleAddContact(name, number);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={ContactSchema}
      onSubmit={handlSubmit}
    >
      <Form>
        <FormLabel>
          Name:
          <Field
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
          <ErrorMessage name="name" component="span" />
        </FormLabel>
        <FormLabel>
          Number:
          <Field
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
          <ErrorMessage name="number" component="span" />
        </FormLabel>
        <ButtonSubmit type="submit">Add contact</ButtonSubmit>
        <Toaster position="top-left" toastOptions={{ duration: 3000 }} />
      </Form>
    </Formik>
  );
};
