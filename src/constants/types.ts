import { ChangeEvent, JSX } from 'react';

export interface Contact {
  id: string;
  name: string;
  phone: string;
}

export interface FormValue {
  name: string;
  number: string;
}

export interface IListProps {
  contacts: Contact[];
  onDelete: (deleteId: string) => void;
}

export interface ItemProps {
  contact: Contact;
  onDelete: (deleteId: string) => void;
}

export interface ContactFormProps {
  onSubmit: (name: string, phone: string) => void;
}

export interface FilterProps {
  filterValue: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

export interface NotificationProps {
  message: string;
}
