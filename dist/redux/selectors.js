import { createSelector } from '@reduxjs/toolkit';
export const selectContacts = (state) => state.contacts.items;
export const selectIsLoading = (state) => state.contacts.isLoading;
export const selectError = (state) => state.contacts.error;
export const selectFilter = (state) => state.filter;
export const selectShowModal = (state) => state.contacts.showModal;
export const selectDeleteId = (state) => state.contacts.deleteId;
// Memoize selector
export const selectFiltredContacts = createSelector(
// Массив входных селекторов
[selectContacts, selectFilter], 
// Функция преобразователь
(contacts, filterValue) => {
    // Выполняем вычисления и возвращаем результат
    return (contacts !== null &&
        contacts.filter(({ name }) => name.toLowerCase().includes(filterValue.toLowerCase())));
});
//# sourceMappingURL=selectors.js.map