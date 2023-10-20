import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { contactsReducer } from 'redux/contactsSlice';
import { filterReducer } from 'redux/filterSlice';
const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
});
export const store = configureStore({
    reducer: rootReducer,
});
export const useAppSelector = useSelector;
export const useAppDispatch = useDispatch;
//# sourceMappingURL=store.js.map