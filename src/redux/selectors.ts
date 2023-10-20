import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';

export const selectContacts = (state: RootState) => state.contacts.items;
export const selectIsLoading = (state: RootState) => state.contacts.isLoading;
export const selectError = (state: RootState) => state.contacts.error;
export const selectFilter = (state: RootState) => state.filter;
export const selectShowModal = (state: RootState) => state.contacts.showModal;
export const selectDeleteId = (state: RootState) => state.contacts.deleteId;

// Memoize selector
export const selectFiltredContacts = createSelector(
  // Массив входных селекторов
  [selectContacts, selectFilter],
  // Функция преобразователь
  (contacts, filterValue) => {
    // Выполняем вычисления и возвращаем результат
    return (
      contacts !== null &&
      contacts.filter(({ name }) =>
        name.toLowerCase().includes(filterValue.toLowerCase())
      )
    );
  }
);
